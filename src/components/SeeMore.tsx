"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SeeMore = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <button
      className="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition"
      onClick={() => router.push(`/products/${id}`)}
    >
      SeeMore
    </button>
  );
};

export default SeeMore;
