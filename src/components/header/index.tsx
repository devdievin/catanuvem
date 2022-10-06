import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import styles from './Header.module.css';

type Props = {
    logo: string
}

const Header = ({ logo }: Props) => {
    return (
        <React.Fragment>
            <Navbar fixed="top">
                <div className={styles.container}>
                    <Navbar.Brand href="#home"><span className={styles.logo}>{logo}</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <a href="#search" className={styles.navLinks}>Buscar Cidades</a>
                            <a href="#help" className={styles.navLinks}>Ajuda</a>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;