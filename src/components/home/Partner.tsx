// components/ImageSwitcher.tsx

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import img1 from '@/assets/partner/p11.webp'
import img2 from '@/assets/partner/p22.png'
import img3 from '@/assets/partner/p3.jpg'
import img4 from '@/assets/partner/p44.png'
import img5 from '@/assets/partner/p5.jpg'
import img6 from '@/assets/partner/p6.png'
import img7 from '@/assets/partner/p7.webp'
import img8 from '@/assets/partner/p8.png'
const images = [
  img1, img2, img3, img4,
  img5, img6, img7, img8,
];

export default function Partner() {
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out
      setFade(false);
      setTimeout(() => {
        setShowFirstSet(prev => !prev);
        // Fade-in next group
        setFade(true);
      }, 300); // fade-out duration
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentImages = showFirstSet ? images.slice(0, 4) : images.slice(4, 8);

  return (
    <div
      className={`grid grid-cols-2   p-4 transition-opacity duration-500 ${
        fade ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {currentImages.map((src, index) => (
        <div key={index} className={`relative w-full p-6  aspect-square overflow-hidden 
        ${index == 0 && 'border-b-2  border-r-2'} ${index == 1 && 'border-b-2  '} ${index == 2  && ' border-r-2'}
        `}>
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            
            className='mix-blend-multiply min-h-[150px] md:min-h-[200px] max-h-[220px]'
          />
          
        </div>
      ))}
    </div>
  );
}