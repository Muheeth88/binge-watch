import { Button, Tab, Tabs, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from "./Search.module.css"
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Paginationx from '../../components/pagination/Paginationx';
import Card from '../../components/card/Card';

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("")
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] =useState();

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchText}&page=${page}&included_adults=true`
    )
    setContent(data.results);
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0,0);
    fetchSearch();
  }, [type, page])
  
  return (
    <>
    <div style={{display: "flex", margin: "15px 0"}}>
      <TextField
      style={{flex: "1"}}
      className={style.searchBox}
      label="Search"
      variant='filled'
      onChange={(e) => setSearchText(e.target.value)}
      ></TextField>
      <Button onClick={fetchSearch} variant='contained' style={{marginLeft: 10}}><SearchIcon/></Button>
    </div>
    <Tabs value={type} indicatorColor='primaary' textColor='primary' onChange={(event, newValue) => ( setType(newValue), setPage(1))}>
      <Tab style={{width: "50%"}} label="Movies"></Tab>
      <Tab style={{width: "50%"}} label="TV Series"></Tab>
    </Tabs>
    <div className={style.content}>
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              rating={c.vote_average}
            />
          ))}
          {searchText && !content && (<h2>No Results</h2>)}
      </div>
      {numOfPages > 1 && (<Paginationx setPage={setPage} numOfPages={numOfPages}/>)}
      
    </>
  )
}

export default Search;