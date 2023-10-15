import React from 'react'
import style from "./Card.module.css"
import { img_300, unavailable } from '../../config/config';
import Badge from '@mui/material/Badge';
import DetailsModal from '../modal/DetailsModal';

const Card = (props) => {
  return (
    <DetailsModal media_type={props.media_type} id={props.id} className={style.card}>
        <Badge badgeContent={props.rating.toFixed(1)} color={props.rating > 6 ? "primary" : "secondary"}></Badge>
        <img src={props.poster ? `${img_300}/${props.poster}` : unavailable} alt='img'></img>
        <b>{props.title}</b>
        <div className={style.subtitle}>
          <div> {props.media_type === 'tv' ? "TV Series" : "Movie"} </div>
          <div> {props.date} </div>
        </div>
    </DetailsModal>
  )
}

export default Card