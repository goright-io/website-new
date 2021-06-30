import React from "react";
import Card from "@components/card";
import clsx from "clsx";

const Triangle = ({ dir = "left" }) => (
  <div
    className={clsx(
      `w-0 position-relative mx-auto
      border-0
      border-transparent `,
      dir === "right"
        ? "border-l-30 border-b-30 border-l-white border-r-white"
        : "border-r-30 border-b-30 border-l-white border-r-white"
    )}
  />
);

export default function Testimonial({ author, children, dir = "left" }) {
  return (
    <div className="flex flex-col flex-grow flex-shrink md:w-1/2">
      <Card className="flex-1">
        <div className="relative flex flex-col h-full">
          <p className="z-10 italic text-center text-gray-800 text-l">
            {children}
          </p>
        </div>
      </Card>
      <div className={dir === "right" ? "mr-24 z-10" : "ml-24 z-10"}>
        <Triangle dir={dir} />
        <p
          className={`text-lg text-center md:text-base font-bold text-gray-700 leading-tight mt-3 mb-6 ${
            dir === "right" ? "pr-4" : "pl-4"
          }`}
        >
          {author}
        </p>
      </div>
    </div>
  );
}
