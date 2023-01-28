import { useQuery } from "react-query";
import axios from "axios";
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
      const request = await axios.get("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC", {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return request.data.products;
    },
    {
      staleTime: 1000 * 60, // um minuto
    }
  );

  return (
    <HomeSection>
      <Content>
        {data &&
          data.map((item: IProducts) => {
            return (
              <Card key={item.id}>
                <img src={item.photo} alt={item.name} />
                <div className="productDetails">
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
                <p className="description">{item.description}</p>
                <button>Comprar</button>
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
