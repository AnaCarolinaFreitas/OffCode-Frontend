"use client";

import styles from "./Feed.module.css";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import CardPostagem from "@/components/CardPostagem";

// export default function feed() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {

//         const fetchPosts = async () => {
//             const response = await fetch('/api/posts');
//             const data = await response.json();
//             setPosts(data);
//         };
//         fetchPosts();
//     }, []);
    
export default function feed() {
    return (
        <div className={styles.feedContainer}>
            <Navigation />
            <CardPostagem src="/LogosOffCode.png" username="OffCode" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
           
        </div>
    )

}