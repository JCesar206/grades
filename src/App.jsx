import {  useEffect,useState } from 'react';
import Nota from './components/Nota';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [notas, setNotas] = useState([]);
  const [texto, setTexto] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    const notasGuardadas = JSON.parse(localStorage.getItem('notas'));
    if (notasGuardadas) setNotas(notasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const agregarNota = () => {
    if (texto.trim() === '') return;
    if (editandoId) {
      setNotas (
        notas.map((nota) => 
        nota.id === editandoId ? {...nota, texto} : nota 
        )
      );
      setEditandoId(null);
    } else {
      const nuevaNota = {
        id: crypto.randomUUID(),
        texto,
      };
      setNotas([nuevaNota, ...notas]);
    }
    setTexto('');
  };

  const editarNota = (id) => {
    const nota = notas.find((n) => n.id === id);
    setTexto(nota.texto);
    setEditandoId(id);
  };

  const eliminarNota = (id) => {
    setNotas(notas.filter((n) => n.id !== id));
    if (editandoId === id) {
      setTexto('');
      setEditandoId(null);
    }
  };

  return (
      <div className='min-h-screen pb-32 bg-yellow-50 p-4'>
        <h1 className='text-3xl font-bold text-center text-yellow-800 mb-6'>
        📝  Nota Loka
        </h1>

        <div className='max-w-xl mx-auto mb-6'>
          <textarea
          className='w-full p-3 border border-yellow-300 rounded shadow resize-none text-orange-600 font-semibold'
          placeholder='Escribe tu nota loca aquí...'
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={3}
          />
          <button
          onClick={agregarNota}
          className='mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full transition'
          >
            {editandoId ? 'Guardar Cambios' : 'Agregar Nota'}
          </button>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {notas.map((nota) => (
            <Nota
            key={nota.id}
            nota={nota}
            onEditar={editarNota}
            onEliminar={eliminarNota}
            />
          ))}
        </div>

      <Footer />
      </div>
  );
}