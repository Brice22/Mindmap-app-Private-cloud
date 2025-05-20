// src/api.js
const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function fetchNotes() {
  const res = await fetch(`${API_BASE}/notes`);
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}
