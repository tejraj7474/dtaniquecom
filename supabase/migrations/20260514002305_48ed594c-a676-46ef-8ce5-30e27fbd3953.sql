
DROP POLICY "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Anyone can submit a valid lead"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 100
    AND length(phone) BETWEEN 5 AND 20
    AND (email IS NULL OR length(email) <= 255)
    AND (concern IS NULL OR length(concern) <= 1000)
    AND (source IS NULL OR length(source) <= 50)
  );
