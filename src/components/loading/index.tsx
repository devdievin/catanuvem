
import "./Loading.css";

const Loading = (props: any) => {
    return (
        <div className="screen-container">
            <section className={'section-logo'}>
                <img src="/images/logo-catanuvem.svg" alt="logotipo catanuvem" className="logo-img" />
                <div className="logo-subtitle">
                    <span>CATANUVEM</span>
                </div>
            </section>

            <section className="section-info">
                <div className="info-title">
                    <h4>Buscando informações do clima, aguarde...</h4>
                </div>

                <div className="info-loader">
                    <img src="/images/loading-catavento.svg" alt="loader catavento" className="loader-catavento" />
                </div>

                <div className="info-subtitle">
                    <p><span className="info-subtitle-tip">Dica:</span> Para uma medição mais rápida e precisa, permita usar sua
                        localização no navegador</p>
                </div>
            </section>

            <section className="section-footer">
                <p className="copyright-footer">© Catanuvem 2022</p>
                <p className="madeby-footer">Feito por <strong>Dievin</strong></p>
            </section>
        </div>
    );
}

export default Loading;