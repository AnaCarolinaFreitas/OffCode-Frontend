import styles from "../styles/NavigationText.module.css";

export default function NavigationText({text, icon}) {
    return (
        <div className={styles.navText}>
            <img className={styles.image}>{icon}</img>
            <Text className={styles.text}>{text}</Text>
        </div>
    );
}