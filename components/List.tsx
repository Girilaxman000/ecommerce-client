import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";

const List = () => {
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8000/products");
    return response.data;
  };
  const { data, isLoading, isError } = useQuery("products", fetchProducts);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Product List</h1>
      <div className="flex justify-around">
        {data &&
          data.map((product: any) => (
            <div
              key="index"
              className="min-w-[300px] bg-gray-100 p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-center">
                <div className=" w-20 h-20 mr-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={80} // Adjust width and height as needed
                    height={80}
                  />
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <h2 className="text-xl font-semibold">{product.name}</h2>

                <p className="text-green-600 font-semibold mt-2">
                  ${product.price}
                </p>
              </div>
              <button className="bg-blue-300 w-full rounded-sm">
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
