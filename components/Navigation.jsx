import styles from "../styles/Navigation.module.css";
import NavigationText from "./NavigationText"

export default function Navigation() {
  return (
    <div className={styles.feedNavigation}>
      <img className={styles.image} src="/LogoOffCode.png" />
      <nav className={styles.navigation}>
        <ul>
          <NavigationText text="Feed" link="/" />
          <NavigationText text="Dúvidas" link="/" />
          <NavigationText text="Perfis" link="/" />
        </ul>
        </nav>
    </div>
  );
}
