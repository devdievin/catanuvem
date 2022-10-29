import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Modal.module.css';
import { Modal } from 'react-bootstrap';
import { globals } from '../../utils/global_variables';

const ModalComponent = (props: any) => {
    const [cityName, setCityName] = useState("");
    const [cities, setCities] = useState<any | null>(null);
    const [cityCount, setCityCount] = useState(0);

    useEffect(() => {
        if (cityName !== "") {
            axios.get(`${globals.PATH_GET_CITY}/${cityName}`)
                .then(response => {
                    if (response.data.length > 0) {
                        setCities({ status: 200, data: response.data });
                    } else {
                        setCities({ status: 404, data: 'Cidade não encontrada...' });
                    }
                })
                .catch(err => console.error("Error", err));
        }
    }, [cityName]);

    const resetInput = (event: any) => {
        if (event.code === "Escape") {
            setCityName("");
            setCities(null);
        }
    }

    const handleCity = (name: string, state: string) => {
        setCityCount(cityCount + 1);
        window.location.href = `/${name}/${state}`;
        localStorage.setItem(`city${cityCount}`, JSON.stringify({ name, state }));
    }

    const closeModal = () => {
        setCityName("");
        setCities(null);
        props.onHide();
    }

    const checkInputEmpty = (value: any) => {
        if (value === '') {
            setCities(null);
        }
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body className={styles.modalBody}>
                <div className={styles.modalHeader}>
                    <Modal.Title id="contained-modal-title-vcenter" className={styles.modalTitle}>
                        Buscar Cidades
                        <img src="/icons/icon-close.svg" alt="fechar modal" width={22} height={22} onClick={closeModal} />
                    </Modal.Title>
                </div>
                <section className={styles.modalSearch}>
                    <div className={styles.modalInputGroup}>
                        <input type="text" placeholder='Exemplo: Brasília, DF' onChange={(e) => { setCityName(e.target.value); checkInputEmpty(e.target.value) }} onKeyDown={resetInput} value={cityName} />
                        <img src="/icons/icon-search.svg" alt="ícone pesquisar cidade" width={24} height={24} className={styles.modalInputIcon} />
                    </div>

                    {cities && <div className={styles.cardSearchResults}>
                        {(cities.status === 200) ?
                            <>
                                {cities.data.map((city: any, index: number) => {
                                    return <p key={index} onClick={() => handleCity(city.nome, city.sigla_uf)}>{city.nome}, {city.sigla_uf}</p>
                                })
                                }
                            </>
                            :
                            <p>{cities.data}</p>
                        }
                    </div>

                    }
                </section>
            </Modal.Body>
        </Modal>
    );
}

export default ModalComponent;