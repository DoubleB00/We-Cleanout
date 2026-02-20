/*
  # Create Quote Requests Table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key)
      - `name` (text) - customer full name
      - `phone` (text) - customer phone number
      - `email` (text) - customer email address
      - `job_description` (text) - description of the junk removal job
      - `service_type` (text) - type of service requested
      - `status` (text) - pending/contacted/completed, default 'pending'
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for anonymous users to INSERT (submit quotes)
    - Add policy for authenticated users (admins) to SELECT all records
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL DEFAULT '',
  job_description text NOT NULL DEFAULT '',
  service_type text NOT NULL DEFAULT 'general',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);
