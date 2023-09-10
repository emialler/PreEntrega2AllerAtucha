import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

  return (
    <div id="cardContainer">
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                sx={{ height: 200 }}
                image= {producto.pictureUrl}
                />
            <div id="card">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {producto.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    {producto.price}
                    </Typography>
                </CardContent>
                <Link to={`/item/${producto.id}`}>
                    <Button variant="contained">Ver detalle</Button>
                </Link>
            </div>
        </Card>
    </div>
  )
}

export default Item