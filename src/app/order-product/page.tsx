"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      {" "}
      <div>Order Product</div>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default OrderProduct;
