// Featured.tsx
import React from 'react';
import { Trophy } from '@phosphor-icons/react';

interface FeaturedItem {
  id: number;
  title: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: 'U.S Congressional App Challenge',
  },
  {
    id: 2,
    title: 'Brown University B-Lab Startup Accelerator',
  },
//   {
//     id: 3,
//     title: 'Open Source Contributor',
//   },
];

const Featured: React.FC = () => {
  return (
    <section className="bg-blue-200 w-full md:h-screen lg:h-full">
        <div className="px-5 md:px-24 2xl:p-32 h-full py-20">
          <h2 className="text-4xl font-display font-bold mb-8">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-secondary text-primary p-6 rounded-md border-2 border-black">
                  <Trophy size={48} weight="fill" className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Featured;