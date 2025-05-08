"use client";

import styles from "./Duvidas.module.css";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import CardPostagem from "@/components/CardDuvidas";

export default function duvidas() {
    return (
        <div className={styles.duvidasContainer}>
            <Navigation />
            <CardPostagem src="/LogosOffCode.png" username="OffCode" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>
    )

}