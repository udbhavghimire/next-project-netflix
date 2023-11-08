import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import style from "@/app/styles/common.module.css";

const page = async () => {
  const url =
    "https://api.condomonk.ca/api/preconstructions-city/calgary/";
  const options = {
    method: "GET",
  
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.preconstructions;
  console.log(data);

  return (
    <>
      <section className={style.movieSection}>
        <div className={style.container}>
          <h1>Preconstructions in Calgary</h1>
          <div className={style.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
