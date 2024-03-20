import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { useSearchedProducts } from "../Hook/useSearchedProducts";

const SearchProductsPage = () => {
  //const { searchedProducts } = useSearch();
  // console.log(
  //   "Productos buscados en la pagina de resultados",
  //   searchedProducts
  // );

  const products = useSearchedProducts();

  return (
    <>
      <main>
        <div className="lg: min-h-screen">
        <ul className="productsTable grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 auto-cols-max gap-4 justify-items-center  w-full pt-[15px]">
          {products.map((product) => (
            <li key={product.id} className="max-w-[154px] lg:max-w-[154px]">
              <Link to={`/products/product/?id=${product.id}`} key={product.id}>
                <ProductCard
                  productCategory={product.category}
                  productImg1={product.imageURL}
                  productImg2={product.imageURL2}
                  productName={product.name}
                  productPrice={product.price}
                  productId={product.id}
                  // {...console.log(product.id)}
                />
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </main>
    </>
  );
};

export default SearchProductsPage;
