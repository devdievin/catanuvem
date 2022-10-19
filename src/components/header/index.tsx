import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

type Props = {
    logo: string
}

const Header = ({ logo }: Props) => {
    const [sidebarToggle, setSidebarToogle] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            if (window.scrollY >= (window.screen.height / 2)) {
                document.querySelector('#navbarFixed')?.classList.add('navbar-fill');
            } else {
                document.querySelector('#navbarFixed')?.classList.remove('navbar-fill');
            }
        });
    });

    const toggleSidebar = () => {
        setSidebarToogle(!sidebarToggle);

        const sidebar = (document.querySelector('#sidebarNav') as HTMLDivElement);
        const openToggle = (document.querySelector('#openToggle') as HTMLDivElement);
        const closeToggle = (document.querySelector('#closeToggle') as HTMLDivElement);

        if (sidebarToggle) {
            sidebar.style.left = '-200px';
            closeToggle.style.display = "none";
            openToggle.style.display = "block";
        } else {
            sidebar.style.left = '0px';
            openToggle.style.display = "none";
            closeToggle.style.display = "block";
        }
    }

    return (
        <React.Fragment>
            <Navbar fixed="top" id={'navbarFixed'}>
                <div className={styles.container}>
                    <Navbar.Brand href="#home"><span className={styles.logo}>{logo}</span></Navbar.Brand>
                    <div className={styles.toggle} onClick={toggleSidebar}>
                        <div id={'openToggle'}>
                            <div className={styles.bar_1}></div>
                            <div className={styles.bar_2}></div>
                            <div className={styles.bar_3}></div>
                        </div>
                        <div className={styles.closeToggle} id={'closeToggle'} onClick={toggleSidebar}>
                            <img src="/icons/icon-close.svg" alt="ícone fechar navbar" width="26" height="26" />
                        </div>
                    </div>
                    <div className={`justify-content-end ${styles.nav_group}`}>
                        <Nav>
                            <a href="#search" className={styles.navLinks}>Buscar Cidades</a>
                            <a href="#help" className={styles.navLinks}>Ajuda</a>
                        </Nav>
                    </div>

                    <div className={styles.sidebar} id={'sidebarNav'}>
                        <Link to={'#search'} className={styles.side_link_group}>
                            <div className={styles.side_link}>
                                Buscar cidades
                            </div>
                        </Link>
                        <Link to={'#help'} className={styles.side_link_group}>
                            <div className={styles.side_link}>
                                Ajuda
                            </div>
                        </Link>
                    </div>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;