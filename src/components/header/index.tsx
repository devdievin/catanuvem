import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalComponent from '../modal';

import styles from './Header.module.css';

type Props = {
    logo: string
}

const Header = ({ logo }: Props) => {
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

    const sidebar = (document.querySelector('#sidebarNav') as HTMLDivElement);
    const openToggle = (document.querySelector('#openToggle') as HTMLDivElement);
    const closeToggle = (document.querySelector('#closeToggle') as HTMLDivElement);

    const toggleSidebar = () => {
        setSidebarToogle(!sidebarToggle);
        (sidebarToggle) ? closeActions() : openActions();
    }

    const closeActions = () => {
        sidebar.style.left = '-200px';
        closeToggle.style.display = "none";
        openToggle.style.display = "block";
    }

    const openActions = () => {
        sidebar.style.left = '0px';
        openToggle.style.display = "none";
        closeToggle.style.display = "block";
    }

    return (
        <React.Fragment>
            <Navbar fixed="top" id={'navbarFixed'}>
                <div className={styles.container}>
                    <Navbar.Brand href="/"><span className={styles.logo}>{logo}</span></Navbar.Brand>
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
                            <a href="#help" className={styles.navLinks}>Ajuda</a>
                        </Nav>
                    </div>

                    <div className={styles.sidebar} id={'sidebarNav'}>
                        <button className={`${styles.side_link_group} ${styles.navLinkButton}`} onClick={() => { closeActions(); setModalShow(true) }}>
                            <div className={styles.side_link}>
                                Buscar cidades
                            </div>
                        </button>
                        <Link to={'#help'} className={styles.side_link_group}>
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