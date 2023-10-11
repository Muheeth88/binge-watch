import React from 'react'
// import style from "./Card.module.css "
import { img_300, unavailable } from '../../config/config';
import Badge from '@mui/material/Badge';

const Card = (props) => {
  return (
    <div>
        <Badge badgeContent={props.rating.toFixed(1)} color={props.rating > 6 ? "primary" : "secondary"}></Badge>
        <img src={props.poster ? `${img_300}/${props.poster}` : unavailable} alt='img'></img>
        <b>{props.title}</b>
        <span>{props.media_type === 'tv' ? "TV Series" : "Movie"}</span>
        <span>{props.date}</span>
    </div>
  )
}

export default Card