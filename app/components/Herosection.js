import React from "react";
import herostyle from "/app/styles/herosection.module.css";
import style from "/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";

const Herosection = ({ title, imageUrl }) => {
  return (
    <main className={herostyle.main_section}>
      <div className={style.container}>
        <div className={style.grid_two_section}>
          <div className={herostyle.hero_content}>
            <h1>{title}</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi modi deserunt iure ab quia inventore ipsum similique
              reprehenderit numquam quo porro alias quod, totam eligendi veniam?
              Non ratione necessitatibus nisi!
            </p>
            <Link href="/movie">
              <button>Explore Movies</button>
            </Link>
          </div>

          <div className={herostyle.hero_image}>
            <Image src={imageUrl} width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Herosection;
