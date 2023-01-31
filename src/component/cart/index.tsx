import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { addProductToCart, removeFromCart, decreaseCartItem } from "../../redux/cartSlice";
import { CartSection, CartHeader, CartContent, Card, CartFooter } from "./style";

export type ShowCartType = {
  setShowCart: (active: boolean) => void;
}

export default function Cart({ setShowCart }: ShowCartType ) {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch()

  const handleTotalCart = () => {
      const totalProducts = cartItems.map(item => Number(item.price) * item.productQuantity)
      const totalCart = totalProducts.reduce((acc, curr) => {
        return acc + curr
      }, 0)
    return Number(totalCart)
  }

  return (
    <CartSection>
      <CartContent>
        <CartHeader>
          <h3>
            Carrinho <span>de compras</span>
          </h3>
          <button className="btnCloseCart" onClick={() => setShowCart(false)}>X</button>
        </CartHeader>
        {cartItems &&
          cartItems.map(product => {
            return (
            <Card key={product.id}>
              <button className="btnRemove" onClick={() => dispatch(removeFromCart(product))}>x</button>
              <img src={product.photo} alt="product.name" role={'img'}/>
              <h3 role={"definition"}>{product.name}</h3>
              <div className="productInfo">
                <p className="quantity" data-testid='qtdText'>Qtd:</p>
                <div>
                  <button data-testid='btnDesc' onClick={() => dispatch(decreaseCartItem(product))}>-</button>
                  <p data-teid='qtdNumber'>{product.productQuantity}</p>
                  <button data-testid='btnInsc' onClick={() => dispatch(addProductToCart(product))}>+</button>
                </div>
                <p className="price">{
               ( Number(product.price) * (product.productQuantity)).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0
               })}</p>
              </div>
            </Card>
            )
          })
        }
        <CartFooter>
          <h3 data-testid='totalPrice'>
            Total: <span>{handleTotalCart().toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0
            })}</span>
          </h3>
          <button data-testid='btnFinalizarCompra'>Finalizar compra</button>
        </CartFooter>
        
      </CartContent>
    </CartSection>
  );
}


/*
  test("should render product total price", async () => {
    renderCart();
    const productTotalPrice = await screen.findByTestId('totalPrice')

    expect(productTotalPrice).toBeInTheDocument();
  });

  test("should render btn finalizar compra", async () => {
    renderCart();
    const btnFinalizarCompra = await screen.findByTestId('btnFinalizarCompra')

    expect(btnFinalizarCompra).toBeInTheDocument();
  });
  */