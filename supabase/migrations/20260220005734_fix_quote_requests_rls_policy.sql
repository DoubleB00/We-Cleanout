/*
  # Fix RLS Policy for quote_requests

  1. Changes
    - Drop the overly permissive INSERT policy that used `WITH CHECK (true)`
    - Replace with a restrictive policy that validates required fields are non-empty
      and enforces reasonable length limits to prevent abuse

  2. Security
    - Prevents empty/malformed submissions
    - Limits field lengths to stop data flooding
    - Still allows anonymous users to submit legitimate quote requests
*/

DROP POLICY IF EXISTS "Anyone can submit a quote request" ON quote_requests;

CREATE POLICY "Validated quote request submissions only"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(name)) > 0
    AND length(trim(name)) <= 200
    AND length(trim(phone)) > 0
    AND length(trim(phone)) <= 50
    AND length(coalesce(email, '')) <= 200
    AND length(coalesce(job_description, '')) <= 2000
    AND length(coalesce(service_type, '')) <= 100
  );
