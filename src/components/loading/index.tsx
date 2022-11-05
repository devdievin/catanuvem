import SectionBackgroundMain from "../background-main";
import Footer from "../footer";
import "./Loading.css";

type LoadingProps = {
   error: boolean,
   message: string
}

const Loading = ({ error, message }: LoadingProps) => {
   return (
      <SectionBackgroundMain>
         <div className="screen-container">
            <section className={'section-logo'}>
               <img src="/images/logo-catanuvem.svg" alt="logotipo catanuvem" className="logo-img" />
               <div className="logo-subtitle">
                  <span>CATANUVEM</span>
               </div>
            </section>

            <section className="section-info">
               {(!error) ?
                  <>
                     <div className="info-title">
                        <h4>Buscando informações do clima, aguarde...</h4>
                     </div>

                     <div className="info-loader">
                        <img src="/images/loading-catavento.svg" alt="loader catavento" className="loader-catavento" />
                     </div>
                  </>
                  :
                  <>
                     <div className="info-title">
                        <h4>{message}</h4>
                     </div>

                     <div className="info-error">
                        <p>Esta cidade que você está pesquisando está fora do nosso banco de dados ou não existe!</p>
                        <a href="/" className="btn-default">Voltar ao início</a>
                     </div>
                  </>
               }

               <div className="info-subtitle">
                  <p><span className="info-subtitle-tip">Dica:</span> Para uma medição mais rápida e precisa, permita usar sua
                     localização no navegador</p>
               </div>
            </section>

            <Footer background="transparent" />
         </div>
      </SectionBackgroundMain>
   );
}

export default Loading;