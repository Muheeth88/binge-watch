import { Pagination } from '@mui/material'
import React from 'react'

const Paginationx = (props) => {

    const handlePageChange = (page) => {
        props.setPage(page);
        window.scroll(0, 0);
    }

  let  numOfPages = 10

  return (
    <div style={{width: "100%", display:"flex", justifyContent:"center", marginTop: 10}}>
      <Pagination color='primary' count={numOfPages} onChange={(e) => handlePageChange(e.target.textContent)} />
    </div>
  )
}

export default Paginationx