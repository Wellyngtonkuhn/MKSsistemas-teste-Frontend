import { useAppSelector } from "../../redux/hooks";

import { HeaderSection, Content, Logo, Cart } from "./style";

import { CartImage } from "../../assests";
import { Container } from "../../styles/globalStyles";
import { ShowCartType } from "../cart/";


export default function Header({ setShowCart }: ShowCartType ) {

  const { cartItems } = useAppSelector(state => state.cart)

  return (
    <HeaderSection>
      <Container>
        <Content>
          <Logo>
            <h1>
              MKS <span>Sistemas</span>
            </h1>
          </Logo>

          <Cart>
            <img role={"img"} src={CartImage} alt="Imagem do carinho" onClick={() => setShowCart(true)} />
            <p role={'paragraph'} onClick={() => setShowCart(true)} >{cartItems.length}</p> 
          </Cart>
        </Content>
      </Container>
    </HeaderSection>
  );
}
