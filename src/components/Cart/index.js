import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      let totalPrice = 0

      cartList.forEach(each => {
        const {price, quantity} = each
        const amount = price * quantity
        totalPrice += amount
      })

      const noOfItems = cartList.length
      const showEmptyView = noOfItems === 0
      // TODO: Update the functionality to remove all the items in the cart

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  className="remove"
                  type="button"
                  onClick={removeAllCartItems}
                >
                  {' '}
                  Remove all
                </button>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <div className="summery-container">
                  <h1 className="order-price">
                    Order Total:{' '}
                    <span className="rate">Rs {totalPrice}/- </span>{' '}
                  </h1>
                  <p className="items">{noOfItems} Items in cart</p>
                  <button className="checkout" type="button">
                    {' '}
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
