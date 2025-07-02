const BASE_URL = 'http://localhost:4000/api';

export async function getNotes() {
  const res = await fetch(`${BASE_URL}/notes`);
  return res.json();
}

export async function createNote(note) {
  const res = await fetch(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return res.json();
}

export async function deleteNote(id) {
  const res = await fetch(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
