import styles from '../styles/Noticias.module.css';

const Noticias = () => {
    const noticias = [
        {
            img: '/images/news1.png',
            texto: 'Tecnologia quântica é inovadora, mas os benefícios ainda são modestos'
        },
        {
            img: '/images/news2.png',
            texto: 'Avanços em inteligência artificial prometem transformar a indústria'
        },
        {
            img: '/images/news3.png',
            texto: 'Como se preparar para entrevistas técnicas em grandes empresas'
        }
    ];

    return (
        <div className={styles.sidebar}>
            <h2>NOTÍCIAS</h2>
            {noticias.map((noticia, index) => (
                <div key={index} className={styles.newsCard}>
                    <img src={noticia.img} alt="Notícia" />
                    <p>{noticia.texto}</p>
                </div>
            ))}
        </div>
    );
};

export default Noticias;

