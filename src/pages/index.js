import React from "react";
import axios from "axios";
import Time from "@/components/products/time";

const Products = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      {data?.todos?.map((item, index) => (
        <Time data={item} key={index} />
      ))}
    </div>
  );
};
export const getServerSideProps = async () => {
  const res = await axios.get("https://dummyjson.com/todos");
  const data = await res.data;
  return { props: { data } };
};

export default Products;