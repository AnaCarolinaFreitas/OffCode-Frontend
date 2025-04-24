"use client";

import styles from "./feed.module.css";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

export default function feed() {
    return (
        <div className={styles.feedContainer}>
            <Navigation />
           
        </div>
    )

}