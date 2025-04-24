import styles from "../styles/CardPostagem.module.css";
import Image from "next/image";

export default function CardPostagem({ src, username, content}) {
    return (
        <div className={styles.cardPostagem}>
            <div className={styles.cardHeader}>
                <Image 
                    className={styles.image} 
                    src={src} 
                    width={50} 
                    height={50}
                    alt="profile image"
                    priority />
                <h2>{username}</h2>
            </div>
            <p className={styles.cardContent}>{content}</p>
            <div className={styles.line}></div>
            <div className={styles.cardFooter}>
                <button className={styles.button}
                onClick={() => src="/coracao-roxo.png"}>
                    <Image 
                        className={styles.icon} 
                        src="/coracao.png" 
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
    )
}