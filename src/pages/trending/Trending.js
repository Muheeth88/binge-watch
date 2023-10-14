import React, { useEffect, useState } from "react";
import style from "./Trending.module.css"
import axios from "axios";
import Card from "../../components/card/Card";
import Paginationx from "../../components/pagination/Paginationx";
import Genres from "../../components/genres/Genres";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1)          

  let fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line 
  }, [page]);

  // let numOfPages = 10;

  return (
    <>
      <div className="page-title">Trending</div>
      <div className={style.content}>
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              rating={c.vote_average}
            />
          ))}
      </div>
      <Paginationx setPage={setPage}/>
    </>
  );
};

export default Trending;
