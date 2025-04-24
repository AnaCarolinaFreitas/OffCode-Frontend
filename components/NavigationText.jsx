import styles from "../styles/NavigationText.module.css";

export default function NavigationText({ text, icon }) {
    return (
        <div className={styles.navText}>
            <img className={styles.image} src={icon} alt="icon" />
            <span className={styles.text}>{text}</span>
        </div>
    );
}