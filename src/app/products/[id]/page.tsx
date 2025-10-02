import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: URLSearchParams; // optional, kerak bo‘lsa ishlatiladi
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = params;

  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  if (!product?.title) {
    return {
      title: "Product not found",
      description: "No product available",
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}

const DetailProduct = async ({ params }: PageProps) => {
  const { id } = params;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) return notFound();

  const data = await response.json();

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg">
      <div className="flex items-center justify-center">
        <Image
          src={data?.image}
          alt={data?.title}
          width={500}
          height={500}
          className="rounded-lg shadow-md object-contain"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800">{data?.title}</h1>
        <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full w-fit">
          {data?.category}
        </span>
        <p className="text-gray-600">{data?.description}</p>

        <div className="flex items-center gap-2 text-yellow-500 font-medium">
          {data?.rating?.rate}{" "}
          <span className="text-gray-500">({data?.rating?.count} reviews)</span>
        </div>

        <strong className="text-2xl text-green-600">${data?.price}</strong>
      </div>
    </div>
  );
};

export default DetailProduct;
