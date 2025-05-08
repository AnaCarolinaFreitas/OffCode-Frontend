"use client";

import styles from "./Perfis.module.css";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import CardPostagem from "@/components/CardPostagem";

export default function perfis() {
    return (
        <div className={styles.perfisContainer}>
            <Navigation />
        </div>
    )

}