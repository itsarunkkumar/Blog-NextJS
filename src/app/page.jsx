import Image from "next/image";
import Styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <h1 className={Styles.title}>
          Better design for your digital products.
        </h1>
        <p className={Styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
        {/* <button className={Styles.button}>See Our Works</button> */}
      </div>
        <div className={Styles.item}>
          <Image src="/hero.png" width={500} height={500} alt="" className={Styles.img} />
        </div>
    </div>
  );
}
