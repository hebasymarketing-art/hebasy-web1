/*
  # Seed data for the Hebasy Marketing website

  Run this in the Supabase SQL Editor (or via `supabase db reset`), AFTER the
  migrations have been applied. Inserts are idempotent where a unique key exists
  (blog.slug, Reports.client_code) so it is safe to run more than once.

  Demo login codes for the Client Portal (/portal):
    - HEBASY001
    - HEBASY002
*/

-- ============================================================
-- BLOG POSTS
-- ============================================================
INSERT INTO "Blog" (title, content, slug, image_url, created_at) VALUES
(
  '5 Digital Marketing Trends Shaping 2026',
  'Digital marketing moves fast, and staying ahead of the curve is the difference between leading your market and chasing it.\n\nHere are the five trends that will define 2026:\n\n1. AI-Powered Personalization - Smart tools now craft unique experiences for every visitor. From dynamic emails to tailored landing pages, brands that personalize convert better.\n\n2. Short-Form Video Dominance - TikTok, Reels and Shorts remain the fastest way to grow reach. Consistency beats polish: publish valuable clips every single week.\n\n3. Local SEO & Google Business Profiles - Customers search for services "near me". Claiming and optimizing your local profile drives foot traffic and phone calls.\n\n4. Community-First Marketing - Building real communities on Telegram and WhatsApp turns followers into loyal advocates who sell for you.\n\n5. Data-Driven Storytelling - Numbers matter, but stories win. Combine analytics with authentic brand narratives to build trust and memory.\n\nAt Hebasy Marketing we combine these trends with a strategy built around your specific goals in Adama and beyond. Contact us to get started.',
  '5-digital-marketing-trends-2026',
  '/portfolio/photo1.webp',
  now() - interval '21 days'
),
(
  'Why Local SEO Matters for Businesses in Adama',
  'When someone in Adama searches for "best coffee shop" or "marketing agency near me", which business do you want them to find?\n\nThe answer is usually the one that has invested in Local SEO.\n\nLocal SEO is the practice of optimizing your online presence so nearby customers can find you. It includes:\n\n- An optimized Google Business Profile with photos, hours and services\n- Consistent Name, Address and Phone details across the web\n- Positive customer reviews (more reviews = more trust = higher rankings)\n- Local keywords woven into your website content\n\nWhy does this matter for Adama? Most customers are ready to buy when they search. Local searches convert at a much higher rate than general searches. A strong local presence means you capture customers at the exact moment they decide.\n\nStart with the basics: claim your profile, add real photos of your business, and ask happy customers for reviews. Then let the data guide the rest.\n\nWant help? Hebasy Marketing builds complete local SEO strategies for Ethiopian businesses. Reach out today.',
  'why-local-seo-matters-adama',
  '/portfolio/photo2.webp',
  now() - interval '14 days'
),
(
  'The Complete Guide to Social Media Engagement',
  'Posting regularly is only half the job. Engagement is what turns followers into customers.\n\nHere is how we grow engagement for brands:\n\n1. Reply to Every Comment - In the first hour. Social platforms reward fast responses with more reach.\n\n2. Ask Questions - End posts with a question. It is the easiest way to spark conversation.\n\n3. Use Stories Daily - Polls, Q&As and behind-the-scenes content build a personal connection algorithms love.\n\n4. Post Native Video - Platforms push native video hard. Upload directly instead of linking from elsewhere.\n\n5. Track and Adjust - Watch which content performs, then double down. Data beats guesswork.\n\nEngagement is not vanity. Every like, comment and share is a signal that pushes your content to more people. Build the habit, and the growth compounds.\n\nNeed a content strategy that actually engages? Hebasy Marketing manages social media for growing brands across Ethiopia.',
  'social-media-engagement-guide',
  '/portfolio/photo3.webp',
  now() - interval '7 days'
),
(
  'From Concept to Launch: Our Product Photography Process',
  'Great product photography is a science of light, angle and story.\n\nOur process at Hebasy:\n\nStep 1: Concept - We learn your brand, audience and goal. Is this for an online shop, a catalog, or social media?\n\nStep 2: Styling - We bring props, backgrounds and lighting that match your brand colors.\n\nStep 3: Shoot - Professional camera, multiple angles, macro detail shots and lifestyle context.\n\nStep 4: Edit - Color grading, background cleanup and retouching for a consistent, premium look.\n\nStep 5: Deliver - High-resolution files optimized for web and print, ready to publish.\n\nThe result? Images that make customers stop scrolling and start buying.\n\nSee the difference a professional shoot makes for your products.',
  'product-photography-process',
  '/portfolio/photo4.webp',
  now() - interval '2 days'
);

-- ============================================================
-- GALLERY
-- ============================================================
INSERT INTO gallery (title, caption, category, video_url, tiktok_url, insta_url, created_at) VALUES
(
  'Brand Campaign - Modern Coffee House',
  'A bold launch campaign built around motion, color and local flavor.',
  'Commercial',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://tiktok.com/@hebasymarketing',
  'https://instagram.com/hebasymarketing',
  now() - interval '30 days'
),
(
  'Product Shoot - Artisan Coffee Brand',
  'Cinematic product film that turns a package into a lifestyle.',
  'Product',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://tiktok.com/@hebasymarketing',
  'https://instagram.com/hebasymarketing',
  now() - interval '24 days'
),
(
  'Promo Video - Real Estate Project',
  'Aerial-driven promo that sold out the first phase in three weeks.',
  'Promo',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://tiktok.com/@hebasymarketing',
  'https://instagram.com/hebasymarketing',
  now() - interval '18 days'
),
(
  'Event Highlight - Adama Fashion Week',
  'Backstage energy, runway moments and the crowd that loved it.',
  'Event',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://tiktok.com/@hebasymarketing',
  'https://instagram.com/hebasymarketing',
  now() - interval '10 days'
),
(
  'Social Cut - Food Delivery App',
  'A 30-second vertical cut engineered for maximum scroll-stopping power.',
  'Social',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://tiktok.com/@hebasymarketing',
  'https://instagram.com/hebasymarketing',
  now() - interval '5 days'
);

-- ============================================================
-- CLIENT COMMENTS
-- ============================================================
INSERT INTO comments (user_name, user_email, company_name, comment_text, rating, created_at) VALUES
(
  'Hana Tesfaye',
  'hana@zemencoffee.com',
  'Zemen Coffee',
  'Hebasy grew our Instagram from 2k to 40k followers in six months. Sales have never been this steady. Their team feels like part of our company.',
  5,
  now() - interval '45 days'
),
(
  'Dawit Alemu',
  'dawit@kebelere.com',
  'Kebele Real Estate',
  'The promo video they produced for our new project brought in more inquiries in a month than we got all last year. Professional from start to finish.',
  5,
  now() - interval '33 days'
),
(
  'Sara Bekele',
  'sara@adamafashionhub.com',
  'Adama Fashion Hub',
  'Great content, always on time, and the photography is stunning. Our online orders doubled within weeks of launching the new campaign.',
  5,
  now() - interval '20 days'
),
(
  'Mikiyas Girma',
  'mikiyas@eagleconstruction.com',
  'Eagle Construction',
  'They built our website and handle our social media. Clear communication and real results. Highly recommend for any business in Ethiopia.',
  5,
  now() - interval '9 days'
);

-- ============================================================
-- CLIENT PORTAL REPORTS
-- ============================================================
INSERT INTO "Reports" (
  client_code,
  client_name,
  package_name,
  total_amount,
  paid_amount,
  remaining_amount,
  total_videos_planned,
  videos_published,
  contract_duration,
  contract_start,
  contract_expiry,
  next_content_topic,
  editor_name,
  host_name,
  host_image_url,
  host_instagram,
  host_tiktok,
  host_gender,
  total_views,
  total_engagement,
  traffic_generated,
  script_pdf_url,
  content_calendar,
  monthly_growth
) VALUES
(
  'HEBASY001',
  'Hana Tesfaye',
  'VIP Package',
  150000,
  100000,
  50000,
  12,
  5,
  '6 Months',
  '2026-01-15',
  '2026-07-15',
  'Brand Story - The Journey of Your Coffee',
  'Abel Tadesse',
  'Selam Wondimu',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
  'https://instagram.com/selamwondimu',
  'https://tiktok.com/@selamwondimu',
  'female',
  245000,
  18750,
  3200,
  '',
  '',
  18.5
),
(
  'HEBASY002',
  'Dawit Alemu',
  'Growth Package',
  90000,
  45000,
  45000,
  8,
  2,
  '4 Months',
  '2026-02-01',
  '2026-06-01',
  'Project Tour - Walking Through Phase One',
  'Abel Tadesse',
  'Yonas Haile',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  'https://instagram.com/yonash',
  'https://tiktok.com/@yonash',
  'male',
  112000,
  9400,
  1850,
  '',
  '',
  9.2
);

-- Refresh schema caches so the new tables are immediately visible.
NOTIFY pgrst, 'reload schema';
