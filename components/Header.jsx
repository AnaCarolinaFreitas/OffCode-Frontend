import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
             <Image 
                className={styles.image} 
                src="/offcode.png" 
                width={200} 
                height={100}
                alt="logo image" />
            </div>

        </header>
    );
}