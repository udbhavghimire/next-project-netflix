import React from "react";
import style from "@/app/styles/common.module.css"
import Image from "next/image";

const page = async({params}) => {
    const slug = params.slug;

    const url =
    `https://api.condomonk.ca/api/preconstructions-detail/${params.slug}/`;
    
  const options = {
    method: "GET",
    
  };

  const res = await fetch(url, options);
  const data = await res.json();
  
  return (
 <div className={style.container}>
    <h2 className={style.movie_title}>Calgary \ <span> {data.project_name} </span> </h2>
    <div className={style.card_section}>
    {data.image.length > 0 ? (
                  <Image
                  src={`https://api.condomonk.ca${data.image[0].image}`}
                  width={600}
                  height={400}
                />
            ) : (
              <p>NO Image</p>
            )}
        <div className={style.textt}>
        <h2 className={style.textt}>{data.project_name}</h2>
        <h3 className={style.price}>Price Starting From ${data.price_starting_from}</h3>
        <p className={style.textt}>{data.project_address}</p>
        <p className={style.textt}>Developer: {data.developer.name}</p>
        <p className={style.textt}>Occupancy: {data.occupancy}</p>
        <p className={style.textt}>Units: {data.no_of_units}</p>
        {/* <div className={style.description}
         dangerouslySetInnerHTML={{ __html: data.description, }}>

         </div> */}
        </div>
    </div>
 </div>

  );
};

export default page;
