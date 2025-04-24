import styles from "../styles/Navigation.module.css";
import NavigationText from "./NavigationText"
import Image from "next/image";

export default function Navigation() {
  return (
    <div className={styles.feedNavigation}>
      <Image 
      className={styles.image} 
      src="/LogoOffCode.png" 
      width={50} 
      height={50}
      alt="profile image" />
      <nav className={styles.navigation}>
        <ul>
          <NavigationText text="Feed" src="/feed-icon.png" />
          <NavigationText text="Dúvidas" src="/feed-icon.png"/>
          <NavigationText text="Perfis" src="/feed-icon.png"/>
        </ul>
        </nav>
    </div>
  );
}
