
import React from "react";
import Styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image";


const Blog = () => {
    return(
        <div className={Styles.maincontainer}>
            <Link href="blog/test" className={Styles.container}>
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
                    <h1 className={Styles.title}>Title</h1>
                    <p className={Styles.desc}>Description</p>
                </div>
            </Link>

            <Link href="blog/test" className={Styles.container}>
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
                    <h1 className={Styles.title}>Title</h1>
                    <p className={Styles.desc}>Description</p>
                </div>
            </Link>

            <Link href="blog/test" className={Styles.container}>
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
                    <h1 className={Styles.title}>Title</h1>
                    <p className={Styles.desc}>Description</p>
                </div>
            </Link>
        </div>
    )
}

export default Blog;