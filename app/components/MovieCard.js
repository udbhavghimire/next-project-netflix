import style from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;
  return (
    <div className={style.card}>
      <div className={style.card_image}>
        <Image
          src={curElem.jawSummary.backgroundImage.url}
          width={300}
          height={200}
        />
      </div>
      <div className={style.card_data}>
        <h2>{title.substring(0,20)}</h2>
        <p>{`${synopsis.substring(0,100)}...`}</p>
        <Link href={`/movie/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
