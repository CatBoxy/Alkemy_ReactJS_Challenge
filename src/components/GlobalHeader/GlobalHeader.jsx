import React from 'react';
import { useSession } from '../../context/SessionProvider';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styles } from './styles';

function GlobalHeader() {
  const { removeToken, userToken } = useSession();

  return (
    <>
      <Styles>
        <Navbar>
          <Container>
            <Navbar.Brand className="title"><Link to='/'>Home</Link></Navbar.Brand>
            <div>
              {userToken && <Link className="exploreLink" to='/dishes'><Button className='button'>Explorar Platos</Button></Link>
              }
              {userToken && <Button className="button" onClick={removeToken}> Logout </Button>
              }
            </div>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

export default GlobalHeader;