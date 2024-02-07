import Logo from '../../componentes/Logo/index.js';
import OpcoesHeader from '../../componentes/OpcoesHeader/index.js';
import IconesHeader from '../../componentes/IconesHeader/index.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/"><Logo /></Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;