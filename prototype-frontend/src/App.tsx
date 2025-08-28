import { useState } from "react";
import udelarLogo from "/logo-Udelar.jpg";
import "./App.css";
import { getMembers, type Member } from "./api/member.api.ts";

function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMembers();
      setMembers(data);
    } catch {
      setError("No se pudieron cargar los integrantes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Prototipo de PIS</h1>
      <div>
        <a href="https://www.fing.edu.uy/" target="_blank">
          <img src={udelarLogo} className="logo" alt="Udelar logo" />
        </a>
      </div>

      <div className="card">
        <button onClick={handleLoadMembers} disabled={loading}>
          {loading ? "Cargando..." : "Obtener integrantes"}
        </button>

        {error && <p style={{ color: "crimson" }}>{error}</p>}

        <p><strong>INTEGRANTES:</strong></p>

        {members.length === 0 && !loading && !error && (
          <p>Todavía no cargados.</p>
        )}

        {members.length > 0 && (
          <ul>
            {members.map((m) => (
              <li key={m.id}>
                {m.first_name} {m.last_name}
                {<small> — {m.email}</small>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
