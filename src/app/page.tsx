'use client';

import pic1 from '../../public/images/1.jpg';
import pic2 from '../../public/images/2.jpg';
import pic3 from '../../public/images/3.jpg';
import Lenis from 'lenis';
import Image, { StaticImageData } from 'next/image';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <main className='overflow-hidden'>
      <div className="h-[100vh]" />
      <Slide src={pic1} left={"-40%"} />
      <Slide src={pic2} left={"-25%"} />
      <Slide src={pic3} left={"-75%"} />
      <div className="h-[100vh]" />
    </main>
  );
}

interface SlideProps {
  src: string | StaticImageData;
  left: string;
}

const Slide = ({ src, left }: SlideProps) => {
  return (
    <div style={{ left }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </div>
  )
}

interface PhraseProps {
  src: string | StaticImageData;
}

const Phrase = ({ src }: PhraseProps) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw]">Web Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image src={src} style={{ objectFit: 'cover' }} alt='images' fill sizes='(max-width: 768px) 100vw, 33vw' />
      </span>
    </div>
  )
}
