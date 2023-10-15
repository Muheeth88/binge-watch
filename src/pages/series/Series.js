import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import Paginationx from '../../components/pagination/Paginationx';
import Genres from '../../components/genres/Genres';
import style from "./Series.module.css"
import useGenres from '../../components/hooks/useGenres';

const Series = () => {
  const [page, setPage] = useState(1);  
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genresForURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genresForURL}`
    );
    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovies();
  }, [page, genresForURL])
  


  return (
    <>
    <div>Series</div>
    <Genres 
      type = "tv"
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      genres={genres}
      setGenres={setGenres}
      setPage={setPage}
    />
      <div className={style.content}>
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              rating={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && 
        <Paginationx setPage={setPage} numOfPages={numOfPages}/>
      }
      </>
  )
}

export default Series