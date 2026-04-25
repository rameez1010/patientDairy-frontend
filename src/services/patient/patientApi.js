const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const fetchPatients = async () => {
  const res = await fetch(`${BASE_URL}/patients`);
  if (!res.ok) throw new Error('Failed to fetch patients');
  return res.json();
};

export const fetchPatientById = async (id) => {
  const res = await fetch(`${BASE_URL}/patients/${id}`);
  if (!res.ok) throw new Error('Failed to fetch patient');
  return res.json();
};

export const createPatient = async (patientData) => {
  const res = await fetch(`${BASE_URL}/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData),
  });
  if (!res.ok) throw new Error('Failed to create patient');
  return res.json();
};
