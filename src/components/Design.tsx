"use client";
import React, { useState } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export default function Design() {
  return (
    <section id="design">
      <h1 className="text-center text-white text-3xl font-bold">
        Our <span className="text-primary">Design</span>
      </h1>
      <div className="h-screen w-full">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-primary">Designed Perfectly</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        ANTI is perfectly designed to have a cute and unique appearance for
        interacting with humans
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-primary">Flexible Arms</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The arms on ANTI is designed to be able to pick up various types of
        waste
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-primary">
        Cute and Adorable Design
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The unique body combined with the cute head increases human interest in
        interacting with ANTI
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-primary">Strong Frame</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The frame of the ANTI robot is designed to withstand the entire load
        placed on it
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/overall.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/lengan.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/kepala.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/rangka.jpg",
  },
];
