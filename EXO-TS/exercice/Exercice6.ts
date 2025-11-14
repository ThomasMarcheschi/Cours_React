async function fetchUser(id: number): Promise<string> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return String(data.name);
}

fetchUser(2).then((name) => console.log(name));
