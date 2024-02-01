import logoImagem from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`margin-right: 12px;`

function Logo() {
    return (
		<LogoContainer>
			<LogoImage
			src={logoImagem}
			alt='logo do projeto'
			className='logo-img'
			></LogoImage>
			<p><strong>Alura</strong>Books</p>
		</LogoContainer>
    )
}

export default Logo;