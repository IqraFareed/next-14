import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

type Props = {
  params: {
    productid: string;
    reviewId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productid}`);
    }, 100);
  });
  return {
    title: `product ${title}`,
  };
};
const ReviewDetail = ({ params }: Props) => {
  // const num = 2;
  // if (num == 2) {
  //   throw new Error("Bhai kia ho gia ha");
  // }

  {
    if (parseInt(params.reviewId) > 1000) {
      notFound();
    }
  }

  return (
    <div>
      Review {params.reviewId} for products
      {params.productid}
    </div>
  );
};

export default ReviewDetail;
