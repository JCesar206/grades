export default function Nota({nota, onEditar, onEliminar}) {
  return(
		<div className='bg-yellow-100 border-l-4 border-yellow-400 shadow-md p-4 rounded-md relative min-h-[100px]'>
			<p className='text-yellow-900 whitespace-pre-wrap'>{nota.texto}</p>
				<div className='absolute top-2 right-2 flex space-x-2'>
					<button
					onClick={() => onEditar(nota.id)}
					className='text-yellow-700 hover:text-yellow-900'
					title='Editar'
					>
						✏️
					</button>
					<button
					onClick={() => onEliminar(nota.id)}
					className='text-red-600 hover:text-red-800'
					title='Eliminar'
					>
						🗑️
					</button>
				</div>
		</div>
	);
}