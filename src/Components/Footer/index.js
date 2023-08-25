import { styled } from 'styled-components';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem  0px 3.75rem 0px;
    border-top: 2px solid var(--color-primary);
`

const Logo = styled.img`
    width: 15.81rem;
    height: 3.75rem;
`

function Footer(){
    return <ContainerFooter>
         <Link to="/">
            <Logo src={logo} alt='Logo de Alura-flix'/>
        </Link>
    </ContainerFooter>
}

export default Footer