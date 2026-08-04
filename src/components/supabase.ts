import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in your .env file (see .env.example).'
  )
}

const REQUEST_TIMEOUT_MS = 12000

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  global: {
    fetch: (input, init) => {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
      return fetch(input, { ...(init ?? {}), signal: controller.signal }).finally(() =>
        clearTimeout(timer)
      )
    },
  },
})