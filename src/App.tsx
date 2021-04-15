import { useEffect, useState, FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { spaceId, accessToken, query } from "./lib/api";
import Button from "./components/button/button";
import Product from "./components/product/product";

interface AppProps {
  sendSearchQuery?(): void;
}

interface ProductProps {
  title: string;
  description: string;
}

const App: FC<AppProps> = ({ sendSearchQuery = () => undefined }) => {
  const [products, setProducts] = useState<ProductProps>();
  const [searchValue, setSearchValue] = useState<string>();

  useEffect(() => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data.productCollection);
      });
  }, []);

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const search = () => {
    sendSearchQuery();
  };

  const productList = products?.items.map((product, i) => {
    return (
      <Product title={product.title} description={product.description} />
    );
  });

  return (
    <div className="App">
      {productList}
      <Button onClick={search} label="click me"></Button>

      <input
        value={searchValue}
        onChange={onSearchInput}
        type="text"
        name="search"
      />
    </div>
  );
};

export default App;
