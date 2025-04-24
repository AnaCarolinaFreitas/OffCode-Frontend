import styles from "../styles/CardPostagem.module.css";
import Image from "next/image";

export default function CardPostagem({ post }) {
    return (
        <div className={styles.cardPostagem}>
            <div className={styles.cardHeader}>
                <Image 
                    className={styles.image} 
                    src="/LogosOffCode.png" 
                    width={50} 
                    height={50}
                    alt="profile image"
                    priority />
                <h2>{post.title}</h2>
            </div>
            <p>{post.content}</p>
        </div>
    )