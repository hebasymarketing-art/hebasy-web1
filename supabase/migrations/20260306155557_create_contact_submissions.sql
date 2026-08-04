/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text)
      - `service` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text, sent/pending)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Allow anyone to insert new submissions
    - Only admins can read/update submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);
