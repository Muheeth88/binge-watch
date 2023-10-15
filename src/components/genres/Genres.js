import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = (props) => {

  useEffect(() => {
    fetchGenres();
    console.log(props);
    return () => {
      props.setGenres({})
    }
    // eslint-disable-next-line
  }, [])

  const fetchGenres = async () => {
    const {data} =  await axios.get(`https://api.themoviedb.org/3/genre/${props.type}/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
    props.setGenres(data.genres)
  }

  const handleAdd = (genre) => {
    props.setSelectedGenres([...props.selectedGenres, genre]);
    props.setGenres(props.genres.filter((g) =>  g.id !== genre.id ))
    props.setPage(1)
  }

  const handleRemove = (genre) => {
    props.setSelectedGenres(props.selectedGenres.filter((selected) => selected.id !== genre.id))
    props.setGenres([...props.genres, genre])
    props.setPage(1)
  }
    

    

  return (
    <div style={{padding: "6px 0"}}>
      { props.selectedGenres.map((g) => (
        <Chip clickable onDelete={() => handleRemove(g)}  color='primary' size='small' key={g.id} label={g.name} style={{margin: "2px"}}></Chip>
      ))}
      {props.genres.length && props.genres.map((genre) => (
        <Chip clickable onClick={() => handleAdd(genre)} size='small' key={genre.id} label={genre.name} style={{margin: "2px"}}></Chip>
      ))}
    </div>
  )
}

export default Genres