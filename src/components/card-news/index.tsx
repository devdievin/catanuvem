import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from "react-bootstrap";

import styles from './News.module.css';

const URL_NEWS = "https://newsapi.org/v2/top-headlines?country=br&pageSize=7&apiKey=6e50b082a4c64dcc82f46cb34e2f58c8";

const CardNews = (props: any) => {
    const [dataNews, setDataNews] = useState<any | null>(null);

    useEffect(() => {
        axios.get(URL_NEWS)
            .then(response => {
                // console.log(response.data);
                setDataNews(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <Card id={styles.cardNews}>
            <Card.Body>
                <h5><strong>CataNews</strong></h5>
                <p>O que está acontecendo no Brasil hoje?</p>
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
            </Card.Body>
        </Card >
    );
}

export default CardNews;