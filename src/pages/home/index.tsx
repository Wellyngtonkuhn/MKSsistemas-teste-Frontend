import { useQuery } from "react-query";
import { useAppDispatch } from "../../redux/hooks";
import { addProductToCart } from "../../redux/cartSlice";
import { Card, HomeSection, Content } from "./style";

export interface IProducts {
  id: number;
  name: string;
  photo: string;
  brand: string;
  description: string;
  price: number;
  productQuantity: number,
  createdAt: string,
  updatedAt: string
}

export default function Home() {
  const dispatch = useAppDispatch()

  const { data, isLoading } = useQuery(["products"], async () => {
      const request = await fetch("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC", {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return request.json();
    },
    {
      staleTime: 1000 * 60, // um minuto
    }
  );

  const handleAddProductToCart = ( product: IProducts ) => {
      dispatch(addProductToCart(product))
  }

  return (
    <HomeSection>
      <Content>
        {data &&
          data.products.map((item: IProducts) => {
            return (
              <Card key={item.id} data-testid= "cardItems" >
                <img src={item.photo} alt={item.name} role='img' />
                <div className="productDetails" role={"contentinfo"}>
                  <h3>{item.name}</h3>
                  <div>
                    <p>
                    {Number(item.price).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        maximumFractionDigits: 0
                      })}
                    </p>
                  </div>
                </div>
                <p className="description" role={"contentinfo"}>{item.description}</p>
                <button onClick={() =>{
                  const product = {
                    ...item,
                    productQuantity: 1
                  }
                  handleAddProductToCart(product)
                }} role={"button"}>Comprar</button>
              </Card>
            );
          })}

        {isLoading && (
          <>
            <Card>
              <div className="image loading"></div>
              <div className='priceName'>
                <div className="loading"></div>
                <div className="loading"></div>
              </div>
              <div className="descriptionLoading loading"></div>
              <button>Comprar</button>
            </Card>

            <Card>
              <div className="image loading"></div>
              <div className='priceName'>
                <div className="loading"></div>
                <div className="loading"></div>
              </div>
              <div className="descriptionLoading loading"></div>
              <button>Comprar</button>
            </Card>

            <Card>
              <div className="image loading"></div>
              <div className='priceName'>
                <div className="loading"></div>
                <div className="loading"></div>
              </div>
              <div className="descriptionLoading loading"></div>
              <button>Comprar</button>
            </Card>

            <Card>
              <div className="image loading"></div>
              <div className='priceName'>
                <div className="loading"></div>
                <div className="loading"></div>
              </div>
              <div className="descriptionLoading loading"></div>
              <button>Comprar</button>
            </Card>

            <Card>
              <div className="image loading"></div>
              <div className='priceName'>
                <div className="loading"></div>
                <div className="loading"></div>
              </div>
              <div className="descriptionLoading loading"></div>
              <button>Comprar</button>
            </Card>

            <Card>
              <div className="image loading"></div>
              <div className='priceName'>
                <div className="loading"></div>
                <div className="loading"></div>
              </div>
              <div className="descriptionLoading loading"></div>
              <button>Comprar</button>
            </Card>

            <Card>
              <div className="image loading"></div>
              <div className='priceName'>
                <div className="loading"></div>
                <div className="loading"></div>
              </div>
              <div className="descriptionLoading loading"></div>
              <button>Comprar</button>
            </Card>

            <Card>
              <div className="image loading"></div>
              <div className='priceName'>
                <div className="loading"></div>
                <div className="loading"></div>
              </div>
              <div className="descriptionLoading loading"></div>
              <button>Comprar</button>
            </Card>
          </>
        )}
      </Content>
    </HomeSection>
  );
}
