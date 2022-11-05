import SectionBackgroundMain from '../../components/background-main';
import Footer from '../../components/footer';
import Header from '../../components/header';
import SectionMain from '../../components/section-main';

import styles from './Help.module.css';

const Help = (props: any) => {
    return (
        <SectionBackgroundMain>
            <Header />
            <SectionMain screenType='filledScreen'>
                <div className={styles.container}>
                    <div className={styles.cardHelp}>
                        <h3>Como usar?</h3>
                        <p>Permita o navegador utilizar sua localização para uma medição mais simples e precisa. Assim a aplicação pegará suas coordenadas e exibirá o clima mais perto de você.</p>
                        <p>Caso a permissão de usar sua localização seja negada, o app buscará a previsão climática da cidade padrão, que é Brasília, Distrito Federal.</p>
                        <p>Você também pode procurar pelos nomes das cidades em <strong>Buscar Cidades</strong>, para encontrar a cidade que deseja. São mais de 5560 municípios brasileiros disponíveis para pesquisa.</p>
                    </div>
                </div>
            </SectionMain>
            <Footer background='transparent' />
        </SectionBackgroundMain>
    );
}

export default Help;