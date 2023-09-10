import { CardActions, Button } from '@mui/material'
import React, { useState } from 'react'

const ItemCount = () => {

    const [count, setCount] = useState(1)

    const sumar = ()=>{
        if (count < 5){
            setCount(count + 1)
        }
    }

    const restar = () =>{
        if (count > 1){
            setCount(count - 1)
        }
    }

    const onAdd = () =>{
        if (count != 0){
            alert(`Has agregado ${count} productos al carrito`)
        }
    }

  return (
        <div id="itemCount">
            <CardActions>
                <Button size="small" onClick={restar}>-</Button>
                <p>{count}</p>
                <Button size="small" onClick={sumar}>+</Button>
            </CardActions>
            <CardActions>
                <Button size="small" onClick={onAdd}>Agregar al carrito</Button>
            </CardActions>
        </div>
  )
}

export default ItemCount