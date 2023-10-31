import React from "react";
import style from "@/app/styles/common.module.css"
import Image from "next/image";

const page = async({params}) => {
    const id = params.id;

    const url =
    `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "293d7f0864mshe4cb365b805b027p1b404cjsn540e21209e87",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  return (
 <div className={style.container}>
    <h2 className={style.movie_title}>Netflix \ <span> {main_data.type} </span> </h2>
    <div className={style.card_section}>
        <div>
            <Image src={main_data.backgroundImage.url} width={800} height={400} />
        </div>
        <div>
            <h1>{main_data.title}</h1>
            <p>{main_data.synopsis} </p>
        </div>
    </div>
 </div>
  );
};

export default page;
