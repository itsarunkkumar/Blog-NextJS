
import React from "react";
import Styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image";

async function getData(){
    const res = await fetch('https://api.vercel.app/blog',{
        cache: "no-store"
    });
    if(!res.ok){
        throw new Error('Failed to fetch Data');
    }

    return res.json();
}

const Blog =  async () => {
    const data = await getData();
    return(
        <div className={Styles.maincontainer}>
            {data.map(item => (
                <Link href={`blog/${item.id}`} className={Styles.container} key={item.id}>
                    <div className={Styles.imageContainer}>
                        <Image 
                            alt="blog image"
                            width={400}
                            height={250}
                            className={Styles.image}
                            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                        />
                    </div>
                    <div className={Styles.content}>
                        <h1 className={Styles.title}>{item.title}</h1>
                        <p className={Styles.desc}>{item.content}</p>
                        <p className={Styles.desc}>{item.category}</p>
                        <p className={Styles.desc}>{item.author}</p>
                    </div>
                </Link> 
            ))};
        </div>
    )
}

export default Blog;