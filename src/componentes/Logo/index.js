import './estilo.css';
import logoImagem from '../../imagens/logo.svg';

function Logo() {
    return (
		<div className='logo'>
			<img
			src={logoImagem}
			alt='logo do projeto'
			className='logo-img'
			></img>
			<p><strong>Alura</strong>Books</p>
		</div>
    )
}

export default Logo;