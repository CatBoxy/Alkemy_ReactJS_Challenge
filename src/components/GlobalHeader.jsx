import React from 'react';
import { useSession } from '../context/SessionProvider';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function GlobalHeader() {
  const { removeToken, userToken } = useSession();

  return (
    <>
      <Container>
        <Row>
          <Link to='/'>The new Flavour</Link>
          <Col>
            {userToken && <Link to='/dishes'><Button>Search</Button></Link>
            }
          </Col>
          <Col>{userToken && <Button onClick={removeToken}> Logout </Button>}</Col>
        </Row>
      </Container>
    </>
  );
}

export default GlobalHeader;