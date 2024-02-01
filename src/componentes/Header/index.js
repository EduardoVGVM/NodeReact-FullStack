import './estilo.css';
import Logo from '../../componentes/Logo/index.js';
import OpcoesHeader from '../../componentes/OpcoesHeader/index.js';
import OpcoesIcones from '../../componentes/OpcoesIcones/index.js';

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <OpcoesIcones />
        </header>
    )
}

export default Header;