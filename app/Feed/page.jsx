"use client";

import styles from "./feed.module.css";
import Navigation from "@/components/Navigation";
import { CardPostagem } from "@/components/CardPostagem"; 
import Noticias from "@/components/Noticias";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    const apiKey = "bernardocaio";

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3003/api/post", {
                    headers: {
                        "x-api-key": apiKey,
                    },
                });
                setPosts(response.data);
            } catch (error) {
                console.error("Failed to load posts:", error);
            }
        };
        loadPosts();
    }, []);

    return (
        <div className={styles.pageContainer}>
            <Navigation />
            <div className={styles.mainContent}>
                <div className={styles.feedContent}>
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <CardPostagem key={post.id || index} usuarios={post.usuarios} posts={post.posts} />
                        ))
                    ) : (
                        <p>Carregando posts...</p>
                    )}
                </div>
                <Noticias />
            </div>
        </div>
    );
}