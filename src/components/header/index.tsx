import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalComponent from '../modal';

import styles from './Header.module.css';

const Header = (props: any) => {
    const [sidebarToggle, setSidebarToogle] = useState(false);
    const [modalShow, setModalShow] = useState(false);

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
        (sidebarToggle) ? closeSidebarActions() : openSidebarActions();
    }

    const autoCloseSidedar = () => {
        setSidebarToogle(!sidebarToggle);
        closeSidebarActions();
    }

    const closeSidebarActions = () => {
        (document.querySelector('#sidebarNav') as HTMLDivElement).style.left = '-200px';
        (document.querySelector('#openToggle') as HTMLDivElement).style.display = "block";
        (document.querySelector('#closeToggle') as HTMLDivElement).style.display = "none";
    }
    const openSidebarActions = () => {
        (document.querySelector('#sidebarNav') as HTMLDivElement).style.left = '0px';
        (document.querySelector('#openToggle') as HTMLDivElement).style.display = "none";
        (document.querySelector('#closeToggle') as HTMLDivElement).style.display = "block";
    }

    return (
        <React.Fragment>
            <Navbar fixed="top" id={'navbarFixed'}>
                <div className={styles.container}>
                    <Navbar.Brand href="/"><span className={styles.logo}>CATANUVEM</span></Navbar.Brand>
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
                            <button className={`${styles.navLinks} ${styles.navLinkButton}`} onClick={() => setModalShow(true)}>Buscar Cidades</button>
                            <a href="#ajuda" className={styles.navLinks}>Ajuda</a>
                        </Nav>
                    </div>

                    <div className={styles.sidebar} id={'sidebarNav'}>
                        <button className={`${styles.side_link_group} ${styles.navLinkButton}`} onClick={() => { autoCloseSidedar(); setModalShow(true) }}>
                            <div className={styles.side_link}>
                                Buscar cidades
                            </div>
                        </button>
                        <Link to={'#ajuda'} className={styles.side_link_group}>
                            <div className={styles.side_link}>
                                Ajuda
                            </div>
                        </Link>
                    </div>
                </div>
            </Navbar>
            <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
        </React.Fragment >
    );
}

export default Header;