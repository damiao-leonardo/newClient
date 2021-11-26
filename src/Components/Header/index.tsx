import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import { Container, Content } from "./styles"

export function Header(){

    return(
        <Container>
           <Content>
                <FaUser/>
                <Link to='newClient' >
                    <span>Novo Cliente</span>
                </Link>
           </Content> 
        </Container>
    )
}