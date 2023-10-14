import { Pagination } from '@mui/material'
import React from 'react'

const Paginationx = ({ setPage, numOfPages = 10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

  return (
    <div style={{width: "100%", display:"flex", justifyContent:"center", marginTop: 10}}>
      <Pagination color='primary' count={numOfPages} onChange={(e) => handlePageChange(e.target.textContent)} />
    </div>
  )
}

export default Paginationx