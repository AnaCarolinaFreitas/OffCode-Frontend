"use client";

import styles from "./Feed.module.css";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import CardPostagem from "@/components/CardPostagem";
import axios from "axios";

export default function feed() {
const apiKey = "bernardocaio";
const fetchData = async (url) => {
    try {
        const response = await axios.get(url, {
            headers: {
                "x-api-key": apiKey,
            },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
fetchData("http://localhost:3000/api/post");

    return (
        <div className={styles.feedContainer}>
            <Navigation />
            {posts.map((post) => (
                <CardPostagem key={post.id} usuarios={post.usuarios} posts={post.posts} />
            ))}
        </div>
    )

}