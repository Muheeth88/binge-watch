import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import stylex from "./DetailsModal.module.css";
import axios from 'axios';
import { img_300, img_500, unavailable, unavailableLandscape } from '../../config/config';
import YouTubeIcon from '@mui/icons-material/YouTube';
  
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DetailsModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState()

  

  const fetchData = async() => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
    setContent(data)
  }
  const fetchVideo = async() => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
    setVideo(data.results[0]?.key)
  }

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, [])
  
 
  return (
    <div>
      <div  className={stylex.card} onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          { content && (
          <Box sx={style}>
          <div className='ContentModal'>
             <div>
             <img className={stylex.landscape} src={content.poster_path ? `${img_300}/${content.backdrop_path}` : unavailableLandscape  } alt='img'></img>
             <img className={stylex.potrait} src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable  } alt='img'></img>

             </div>
             <div className={stylex.about}>
                <span className={stylex.title}>
                    {content.name || content.title} (
                        {(
                            content.first_air_date ||
                            content.release_date || "----"
                        ).substring(0, 4)}
                    )
                </span>
                { 
                    content.tagline && (
                        <i className={stylex.tagline}>{content.tagline}</i>
                    )
                }
                <span className={stylex.description}>
                    {content.overview} 
                </span>
                <Button variant='contained' color='secondary' target='__blank' href={`https://www.youtube.com/watch?v=${video}`} startIcon={<YouTubeIcon/>}>Watch the Trailer!</Button>
             </div>
          </div>
          </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
}