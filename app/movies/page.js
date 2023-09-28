"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const moviesData = [
  {
    title: "Interstellar",
    description: "Space Adventure!",
    image: "/mv_1.jpg",
  },
  {
    title: "Inception",
    description: "Dream Adventure!",
    image: "/mv_2.jpg",
  },
  {
    title: "Batman",
    description: "I am Batman!",
    image: "/mv_3.jpg",
  },
];

export default function Movies() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black h-screen">
      <div className="container mx-auto py-8 px-5">
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mb-5 py-2 px-4 rounded-full transition-transform transform hover:scale-105 inline-block"
        >
          &lt; Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-8">
          Explore Movies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {moviesData.map((movie, index) => (
            <button
              className="bg-gray-800 p-4 rounded-lg"
              onClick={() => router.push(`/movies/${index}`)}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-auto rounded-lg"
              />
              <h2 className="text-xl font-semibold text-white py-3">
                {movie.title}
              </h2>
              <p className="text-gray-400 mt-2">{movie.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
