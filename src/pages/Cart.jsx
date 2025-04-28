import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const Cart = () => {
  const { cart, increase, decrease, total } = useCart();
  const { token } = useUser();

  const formatPrice = (num) => num.toLocaleString('es-CL');

  return (
    <div className="container my-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No tienes pizzas en el carrito.</p>
      ) : (
        <ul className="list-group">
          {cart.map((p) => (
            <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img src={p.img} alt={p.name} width="80" className="me-3" />
                <strong>{p.name}</strong> - ${formatPrice(p.price)} x {p.quantity}
              </div>
              <div>
                <button className="btn btn-sm btn-danger me-2" onClick={() => decrease(p.id)}>-</button>
                <button className="btn btn-sm btn-success" onClick={() => increase(p.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h4 className="mt-4">Total: ${formatPrice(total)}</h4>
      <button className="btn btn-primary mt-2" disabled={!token}>Pagar</button>
    </div>
  )
}

export default Cart;

