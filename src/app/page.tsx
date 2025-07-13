'use client';

import pic1 from '../../public/images/1.jpg';
import pic2 from '../../public/images/2.jpg';
import pic3 from '../../public/images/3.jpg';
import Lenis from 'lenis';
import Image, { StaticImageData } from 'next/image';

import {useEffect, useRef} from 'react';
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";

export default function Home() {
    const container = useRef<HTMLDivElement | null>(null);

    // track scroll progress
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    // initialize lenis smooth scroll
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
        <div ref={container}>
          <Slide src={pic1} direction={"left"} left={"-40%"} progress={scrollYProgress}/>
          <Slide src={pic2} direction={"right"} left={"-25%"} progress={scrollYProgress} />
          <Slide src={pic3} direction={"left"} left={"-75%"} progress={scrollYProgress} />
        </div>
      <div className="h-[100vh]" />
    </main>
  );
}

interface SlideProps {
  src: string | StaticImageData;
  left: string;
  direction: string;
  progress:  MotionValue<number>;
}

const Slide = ({ src, left, direction, progress }: SlideProps) => {
  const scrollDirection = direction === 'left' ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [150 * scrollDirection, -150 * scrollDirection]);

  return (
    <motion.div style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
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