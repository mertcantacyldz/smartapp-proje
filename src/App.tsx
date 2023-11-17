import Component0 from "./components/Component0";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component5 from "./components/Component5";
import Component4 from "./components/Component4";
import { Root } from "./types/types" // Gelen verinin veri tipi
import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { motion, Variants } from "framer-motion";
import Loader from "./components/Loader";






function App() {
  const { width, height } = useWindowSize();
  const variants: Variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };
 // console.log("Genişlik:", width);

  const [weatherData, setWeatherData] = useState<Root | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  // Fetch ile veri alma işlemi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
        if (!response.ok) {
          throw new Error('Response  Başarisiz');
        }
        const data: Root = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setWeatherData(null);
      }
    };

    fetchData();
    console.log(setWeatherData, "Veri")
  }, [setWeatherData]);

  const weeklyWeatherD = weatherData?.weeklyWeather // data içinden sadece weeklyWeathe'ı çekmek için kullanıyoruz

  if (weatherData === null || weeklyWeatherD === undefined) {
    // Veri yoksa Loading Dönsün  " Ftch yapısını bozarak  ya da setInterval  yardımı ile veri geç alınarak çalıştığı görülebilir"
    return <Loader></Loader> 
    
  }

  if (width > 767) {

    {/* BİLGİSAYAR VE TABLETLER İÇİN */ }
    return (

      <div className=" min-h-screen  md:p-[3%]  xl:p-[1.5%] 3xl:pb-[1%] 4xl:pb-[10%] bg-back  overflow-hidden " >

        <div className=" flex flex-col md:gap-8  xl:gap-0">
          <motion.div
          initial={{ x: "150vw" }}
          animate={{ x: "0", }}
          transition={{ type: "spring", duration: 1 }}
           className=" flex   mb-[2%] w- ">   {/* Header kısmı için açılan div*/}

            <Component0 data={weatherData}></Component0>

            <div className="flex flex-col items-center gap-[15%] w-[42%] ">

              <div className=" flex  items-center justify-center w-full ">
                <img src={`${process.env.PUBLIC_URL}/images-vectors/header-logo-long 1.png`} ></img>
              </div>

              <Component5></Component5>

            </div>

          </motion.div>

          <motion.div
           initial={{ x: "150vw" }}
           animate={{ x: "0", }}
           transition={{ type: "spring", duration: 1.9 }}
           className="   flex gap-[2%]  md:h-[500px] xl:h-[600px]  2xl:h-[700px] 4xl:h-[800px]  ">

            <Component1></Component1>

            <div className=" flex  flex-col w-[50%] gap-3 2xl:gap-5 3xl:w-full">


              <Component2></Component2>
              <Component3 data={weatherData}></Component3>



            </div>
            <div className=" w-[41%] 3xl:w-[85%]" >
              <Component4 data={weatherData}></Component4>
          
            </div>

          </motion.div>
        </div>

      </div>
    );
  }

  {/* TELEFONLAR İÇİN ( Spesifik olarak belirli bir telefonda çalışmasam da iphone 14 pro max, galaxy 20 ultra ve galaxy s8+ da doğru görüntüyü alabilirsiniz) */ }
  return (
    <div className="min-h-screen bg-back p-2 flex flex-col gap-3">
      <Component1></Component1>
      <Component0 data={weatherData}></Component0>
      <Component2></Component2>
      <Component3 data={weatherData}></Component3>
      <Component4 data={weatherData}></Component4>
      <Component5></Component5>

    </div>
  )


}

export default App;
