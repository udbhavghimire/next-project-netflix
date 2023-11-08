import style from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => {

  return (
    <>
  <div className={style.card}>
     <div className={style.card_image}>
 
         {curElem.image.length > 0 ? (
                  <Image
                  src={`https://api.condomonk.ca${curElem.image[0].image}`}
                  width={300}
                  height={200}
                />
            ) : (
              <p>NO Image</p>
            )}
      </div>
      <div className={style.card_data}>
        <h2>{curElem.project_name}</h2>
        <h3 className={style.price}>Price Starting From ${curElem.price_starting_from}</h3>
        <p>{curElem.project_address}</p>
        <Link href={`/movie/${curElem.slug}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>



  
  </>
  );
};

export default MovieCard;
