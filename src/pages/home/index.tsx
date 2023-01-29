import { useQuery } from "react-query";
import { Card, HomeSection, Content } from "./style";

interface IProducts {
  id: number;
  name: string;
  photo: string;
  brand: string;
  description: string;
  price: number;
}

export default function Home() {

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
                    R${item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </div>
                <p className="description" role={"contentinfo"}>{item.description}</p>
                <button role={"button"}>Comprar</button>
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
