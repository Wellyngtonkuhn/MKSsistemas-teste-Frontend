import { HeaderSection, Content, Logo, Cart } from "./style";

import { CartImage } from "../../assests";
import { Container } from "../../styles/globalStyles";

export default function Header() {
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
            <img role={"img"} src={CartImage} alt="Imagem do carinho" />
            <p role={'paragraph'}>0</p>
          </Cart>
        </Content>
      </Container>
    </HeaderSection>
  );
}
