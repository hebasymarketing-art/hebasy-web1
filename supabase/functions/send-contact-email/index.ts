import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const supabaseUrl =
  Deno.env.get("SUPABASE_URL") || "https://mubkcabduuvylsnwlwpv.supabase.co";

const supabaseKey =
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ||
  Deno.env.get("SUPABASE_ANON_KEY") ||
  Deno.env.get("VITE_SUPABASE_PUBLISHABLE_KEY");

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    if (!supabaseKey) {
      throw new Error(
        "Supabase key is not configured. Set SUPABASE_ANON_KEY or VITE_SUPABASE_PUBLISHABLE_KEY in the function secrets."
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        status: "pending",
      });

    if (insertError) throw insertError;

    const emailBody = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service Interested In: ${formData.service}

Message:
${formData.message}

---
This submission has been saved in your Supabase database.
    `.trim();

    const mailgunResponse = await fetch("https://api.mailgun.net/v3/sandbox.mailgun.org/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${btoa(`api:${Deno.env.get("MAILGUN_API_KEY") || ""}`)}`,
      },
      body: new URLSearchParams({
        from: "Contact Form <noreply@hebasymarketing.com>",
        to: formData.email,
        subject: `New Inquiry from ${formData.name}`,
        text: emailBody,
      }).toString(),
    });

    if (!mailgunResponse.ok) {
      console.warn("Mailgun email send failed, but form was saved");
    }

    const { error: updateError } = await supabase
      .from("contact_submissions")
      .update({ status: "sent" })
      .eq("email", formData.email)
      .order("created_at", { ascending: false })
      .limit(1);

    if (updateError) {
      console.warn("Could not mark submission as sent (RLS may block updates with a publishable key):", updateError.message);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully. We will contact you soon!",
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "An error occurred",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
