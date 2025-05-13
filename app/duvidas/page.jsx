"use client";

import styles from "./Duvidas.module.css";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import CardPostagem from "@/components/CardDuvidas";

export default function Duvidas() {
    return (
        <div className={styles.duvidasContainer}>
            <Navigation />
            
        </div>
    );

}