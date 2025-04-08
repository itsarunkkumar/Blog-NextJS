import React from 'react'
import Styles from './page.module.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';


const Category = ({ params }) => {    
    return(
        <div className={Styles.container}>
            <h1 className={Styles.catTitle}>{params.category}</h1>
            <div className={Styles.item}>
                <div className={Styles.content}>
                    <h1 className={Styles.title}>Test</h1>
                    <p className={Styles.desc}>Desc</p>
                    <Button text="see more" url="#" />
                </div>
                <div className={Styles.imgContainer}>
                    <Image fill={true} alt="test-png"
                     src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                    />
                </div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.content}>
                    <h1 className={Styles.title}>Test</h1>
                    <p className={Styles.desc}>Desc</p>
                    <Button text="see more" url="#" />
                </div>
                <div className={Styles.imgContainer}>
                    <Image fill={true} alt="test-png"
                     src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                    />
                </div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.content}>
                    <h1 className={Styles.title}>Test</h1>
                    <p className={Styles.desc}>Desc</p>
                    <Button text="see more" url="#" />
                </div>
                <div className={Styles.imgContainer}>
                    <Image fill={true} alt="test-png"
                     src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Category;