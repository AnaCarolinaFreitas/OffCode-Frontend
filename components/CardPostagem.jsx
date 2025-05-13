import styles from "../styles/CardPostagem.module.css";
import Image from "next/image";

import { useState } from "react";

export default function CardPostagem({ usuarios, posts, onClick }) {
    
    const [likeIcon, setLikeIcon] = useState("/coracao.png");
    const [unlikeIcon, setUnlikeIcon] = useState("/coracao-roxo.png");

    return (
        <div className={styles.cardPostagem} onClick={onClick}>
            <div className={styles.cardHeader}>
                <Image
                    className={styles.image}
                    src={usuarios.foto_perfil}
                    width={50}
                    height={50}
                    alt="profile image"
                    priority />
                <h2>{usuarios.id_usuario}</h2>
            </div>
            <div className={styles.cardContent}>
                {posts.conteudo_post}
            
            <Image
                className={styles.imagePost}
                src={posts.anexo}
                width={500}
                height={500}
                alt="post image"
                priority />
                </div>

            <div className={styles.line}></div>
            <div className={styles.cardFooter}>
                <button 
                    className={styles.button}
                    onClick={() => 
                        setLikeIcon((prevIcon) => 
                            prevIcon === "/coracao.png" ? "/coracao-roxo.png" : "/coracao.png"
                        )
                    }>
                    <Image 
                        className={styles.icon} 
                        src={likeIcon} 
                        width={20} 
                        height={20}
                        alt="like icon" />
                </button>
                <button className={styles.button}>
                    <Image
                        className={styles.icon}
                        src="/comente.png"
                        width={20}
                        height={20}
                        alt="comment icon" />
                </button>
                <button className={styles.buttonSave}>
                    <Image
                        className={styles.icon}
                        src="/salvar.png"
                        width={20}
                        height={20}
                        alt="save icon" />
                </button>
            </div>
        </div>
    );
};