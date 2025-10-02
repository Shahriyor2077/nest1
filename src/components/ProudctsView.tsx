import React, { FC } from "react";
import SeeMore from "./SeeMore";

interface Props {
  data: any[];
}

const ProductsView: FC<Props> = ({ data }) => {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md flex flex-col"
        >
          <div className="h-48 flex items-center justify-center overflow-hidden p-4">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col p-4">
            <h3 className="font-semibold text-gray-800 text-base line-clamp-2">
              {product.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>

            <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
              {"★".repeat(Math.round(product.rating.rate))}
              {"☆".repeat(5 - Math.round(product.rating.rate))}
              <span className="text-gray-600 text-xs ml-2">
                ({product.rating.count})
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {product.description}
            </p>

            <div className="mt-auto pt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-blue-600">
                ${product.price}
              </span>
              <SeeMore id={product.id} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsView;
