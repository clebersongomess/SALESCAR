import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import styles from './style.module.scss'; // Se quiser estilizar localmente

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" className={styles.header}>
      <Container>
        <Navbar.Brand href="#home">Meu Carro</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;