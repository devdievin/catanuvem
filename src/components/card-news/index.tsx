import { CardComponent } from "../card";

import styles from './News.module.css';

const CardNews = ({ dataNews }: any) => {

    return (
        <CardComponent id={styles.cardNews}>
            <div>
                <h5><strong>CataNews</strong></h5>
                <p>Assuntos manchetes no Brasil hoje:</p>
                {dataNews &&
                    <div>
                        {dataNews.articles.map((element: any, index: number) => (
                            <div className={styles.containerNews} key={index}>
                                <div>
                                    <img src={element.urlToImage} alt="imagem da notícia" width={150} height={90} />
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