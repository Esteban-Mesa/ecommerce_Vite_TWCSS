import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContex } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const { order } = useContext(ShoppingCartContex);

  const orderIndex = () => {
    const currentPath = window.location.pathname;
    const extract = currentPath.split("/")[2];

    const index = extract === "last" ? order.length - 1 : parseInt(extract);

    return index;
  };

  return (
    <Layout>
      <div className="relative flex justify-center w-80 mb-6 mt-20">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1 className="font-medium text-xl">My Order</h1>
      </div>
      <div className=" bg-np_white rounded-lg flex flex-col w-80 mb-20">
        {order[orderIndex()].products?.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
