import { styled } from 'styled-components';
import logo from '../../img/logo.png'
import Button from '../Button';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    border-bottom: 2px solid var(--color-primary);
    padding: 1.45rem 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content:  space-between;
    align-items: center;
    box-sizing: border-box;
`;

const Logo = styled.img`
width: 10.5rem;
height: 2.5rem;
cursor: pointer;
`

function Header(){
    return (<Nav>
       <Link to="/">
            <Logo src={logo} alt='Logo de Alura-flix'/>
        </Link>
        <Button>Nuevo video</Button>
    </Nav>)
}

export default Header

