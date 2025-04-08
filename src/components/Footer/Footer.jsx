import React from 'react'
import Styles from "./footer.module.css"
import Image from 'next/image'

function Footer() {
  return (
    <div className={Styles.container}>
      <div>©2023 Arun. All rights reserved.</div>
        <div className={Styles.social}>
          <Image src="/1.png" width={15} height={15} className={Styles.icon} alt="test" />
          <Image src="/2.png" width={15} height={15} className={Styles.icon} alt="test" />
          <Image src="/3.png" width={15} height={15} className={Styles.icon} alt="test" />
          <Image src="/4.png" width={15} height={15} className={Styles.icon} alt="test" />
        </div>
    </div>
  )
}

export default Footer
