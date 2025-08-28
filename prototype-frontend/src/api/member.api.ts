export type Member = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  joined_date: string; // ISO
};

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

export async function getMembers(): Promise<Member[]> {
  const res = await fetch(`${BASE_URL}/api/members/`);
  if (!res.ok) throw new Error("Error al obtener integrantes");

  const data = await res.json();

  // Soporta paginado DRF y sin paginado
  const items: Member[] = Array.isArray(data) ? data : data.results ?? [];
  // (Opcional) ordenar en el front si el back no lo hizo
  return items.sort((a, b) =>
    (a.last_name + a.first_name).localeCompare(b.last_name + b.first_name)
  );
}
