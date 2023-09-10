import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import { Box, Card, CardMedia, Container, Typography } from '@mui/material';

const ItemDetail = ({productos}) => {

  const { itemId } = useParams();
  console.log(productos)
  console.log(itemId)

  const filteredProducts = productos.filter((producto)=> producto.id == itemId)
  console.log(filteredProducts)
  return (
    <>
    {filteredProducts.map((p)=>(
        <Container className='container'>
          <Card sx={{ display: 'flex' }}>
           <CardMedia
              component="img"
              sx={{ width: 400 }}
              image={p.pictureUrl}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component="div" variant="h5">
                {p.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {p.description}
                </Typography>
                <Typography component="div" variant="h5">
                {p.price}
                </Typography>
              <ItemCount />
            </Box>
          </Card>
        </Container>
      ))}
    </>
  )
}

export default ItemDetail