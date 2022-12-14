import { CardComponent } from "../card";

import styles from './News.module.css';

const CardNews = ({ dataNews, local }: any) => {
   return (
      <CardComponent id={styles.cardNews}>
         <div>
            <h5><strong>CataNews</strong></h5>
            <p>Assuntos relacionados a <strong>{local}</strong>:</p>
            {dataNews &&
               <div>
                  {dataNews.news.map((element: any, index: number) => (
                     <div className={styles.containerNews} key={index}>
                        <div>
                           {(element.urlToImage === null) ?
                              < img src={'/images/catanews-cover.svg'} alt="imagem da notícia" width={110} height={110} referrerPolicy={"no-referrer"} />
                              :
                              <img src={element.urlToImage} alt="imagem da notícia" width={110} height={110} referrerPolicy={"no-referrer"} />
                           }
                        </div>
                        <div className={styles.containerTitle}>
                           <a href={element.url} className={styles.linkNews} target={"_blank"} rel={'noreferrer'}>
                              <p className={styles.titleNews}>{element.title}</p>
                           </a>
                        </div>
                     </div>
                  ))}
               </div>
            }
         </div>
      </CardComponent >
   );
}

export default CardNews;