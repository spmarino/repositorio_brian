import {useState} from 'react'
import { UseCartContext } from "./CartContext";

const Cart = () => {
  const { cart,removeItem, clear } = UseCartContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
    <h2>Carrito</h2>
      {loading?<p>...Loading</p>:
     <div>
      {
        cart.map(producto => (
          <div key={producto.id}>
            <p>{producto.item.nombre}</p>
            <p>{producto.item.precio}</p>
            <p>cantidad:{producto.cantidad}</p>
            <button onClick={() => removeItem(producto.id)}>Borrar</button>
          </div>
        ))
      }<button onClick={clear}>Vaciar carrito</button>
      </div>}
    </>
  )
}

export default Cart