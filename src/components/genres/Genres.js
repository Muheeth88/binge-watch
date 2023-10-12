import React from 'react'

const Genres = (props) => {

    const fetchGenres = async () => {
        await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    }
  return (
    <div>Genres</div>
  )
}

export default Genres