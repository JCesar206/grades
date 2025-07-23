import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return(
        <footer className='fixed bottom-0 left-0 w-full bg-yellow-200 shadow-inner py-3'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 text-yellow-900 text-sm'>
							<div className='flex gap-6 text-xl'>
								<a href='https://github.com/JCesar206' target='_blank' rel='noopener noreferrer'>
									<FaGithub className='hover:text-fuchsia-500' />
								</a>
								<a href='https:/www.linkedin.com/in/jcesar206/' target='_blank' rel='noopener noreferrer'>
									<FaLinkedin className='hover:text-purple-500' />
								</a>
								<a href='mailto:jcesar206@hotmail.com'>
									<FaEnvelope className='hover:text-teal-500' />
								</a>
							</div>
							<p className='text-xs text-center sm:text-left font-semibold'>
								&copy; {new Date().getFullYear()} NotaLoka. V 1.0 JulyDevops. Todos los derechos reservados.
							</p>
            </div>
        </footer>
    );
}