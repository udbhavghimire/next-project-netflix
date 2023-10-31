import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import style from "@/app/styles/common.module.css";

const page = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "293d7f0864mshe4cb365b805b027p1b404cjsn540e21209e87",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
    <>
      <section className={style.movieSection}>
        <div className={style.container}>
          <h1>Series and Movies</h1>
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
