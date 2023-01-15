"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import { TypingText, TitleText } from "../components";

import styles from "../styles";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[16px] flex w-full h-[500px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="lg:w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="./people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="./people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="./people-03.png" alt="people" className="w-full h-full" />
        </div>
        {/* <div className="absolute top-20 right-[400px] w-[350px] h-[200px] rounded-full bg-[#5d6680]">
          <img src="/one.png" alt="people" className="w-[70px] h-[70px]" />
          <img src="/one.png" alt="people" className="w-[350px] h-[200px]" />
        </div> */}
        <motion.img
          variants={zoomIn(0.2, 1)}
          src="/one.png"
          alt="people"
          className="absolute bottom-60 left-[600px] w-[350px] h-[300px] "
        />
        <motion.img
          variants={zoomIn(0.2, 1)}
          src="/two.png"
          alt="people"
          className="absolute top-60 left-[100px] w-[350px] h-[300px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
