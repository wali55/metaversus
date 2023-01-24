'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText, TitleText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />

      <motion.div
        variant={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full max-h-[550px]"
      >
        <img src="map.png" alt="map" className="w-full h-full object-fill" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-16 left-[55%] w-[180px] h-[136px] p-[6px] rounded-[12px] bg-[#5d6680]">
          <img src="card-01.png" alt="people" className="w-full h-full rounded-[12px]" />
          <h1 className="text-white absolute bottom-2 left-3 font-bold">Hawkins Labs</h1>
          <p className="text-white absolute bottom-10 left-14 text-[12px]">+ 264 has joined</p>
          <img className="h-[24px] w-[24px] absolute bottom-10 left-7" src="people-03.png" alt="people" />
          <img className="h-[24px] w-[24px] absolute bottom-10 left-5" src="people-02.png" alt="people" />
          <img className="h-[24px] w-[24px] absolute bottom-10 left-3" src="people-01.png" alt="people" />
        </div>
        <div className="absolute top-1/2 left-[15%] w-[180px] h-[136px] p-[6px] rounded-[12px] bg-[#5d6680]">
          <img src="card-02.png" alt="people" className="w-full h-full rounded-[12px]" />
          <h1 className="text-white absolute bottom-2 left-3">The Upside Down</h1>
          <p className="text-white absolute bottom-10 left-14 text-[12px]">+ 264 has joined</p>
          <img className="h-[24px] w-[24px] absolute bottom-10 left-7" src="people-03.png" alt="people" />
          <img className="h-[24px] w-[24px] absolute bottom-10 left-5" src="people-02.png" alt="people" />
          <img className="h-[24px] w-[24px] absolute bottom-10 left-3" src="people-01.png" alt="people" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
