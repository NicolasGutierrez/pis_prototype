import udelarLogo from '/logo-Udelar.jpg'
import './App.css'

function App() {
  
  return (
    <>
      <h1>Prototipo de PIS</h1>
      <div>
        <a href="https://www.fing.edu.uy/" target="_blank">
          <img src={udelarLogo} className="logo" alt="Udelar logo" />
        </a>
      </div>
      
      <div className="card">
        <button>
          Obtener integrantes
        </button>
        <p>
          INTEGRANTES:
        </p>
        <p>
          Adrián Omero, Agustín Bolazzi, Sol Roqueta, Agustina Aldunate, 
          Facundo Barquet, Lautaro Ramirez, Matias Sencion, Gastón Franco, 
          Agustín Machado, Nicolas Gutierrez, José Agustin Bizio, Bruno Peña, 
          Santiago Gestal
        </p>
      </div>
    </>
  )
}

export default App
