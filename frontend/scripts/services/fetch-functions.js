export default async function registerFetch(email, phone, password) {
  const response = await fetch('http://localhost:8080/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      phone,
      password,
    }),
  });

  return response.json();
}
