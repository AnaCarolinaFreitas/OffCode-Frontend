"use client";

import styles from "./feed.module.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function feed() {
    return (
        <div className={styles.navigationContainer}>
            <Navigation/>
        <div className={styles.feedContainer}>
            <Header/>
        </div>
        </div>
    );
}
