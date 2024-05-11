// Featured.tsx
import React from "react";
import { Trophy } from "@phosphor-icons/react";

interface FeaturedItem {
  id: number;
  title: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: "U.S Congressional App Challenge",
  },
  {
    id: 2,
    title: "Brown University B-Lab Startup Accelerator",
  },
];

const Featured: React.FC = () => {
  return (
    <section className="w-full bg-blue-200 md:h-screen lg:h-full">
      <div className="h-full px-5 py-20 md:px-24 2xl:p-32">
        <h2 className="mb-8 font-display text-4xl font-bold">Featured</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-md border-2 border-black bg-secondary p-6 text-primary"
            >
              <Trophy size={48} weight="fill" className="mb-4" />
              <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
