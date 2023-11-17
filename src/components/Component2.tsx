import React from 'react'
import { IoIosHeart } from "react-icons/io";
import { useRef, useState } from 'react'

export default function Component2() {


    const dragImage = useRef<number>(0)
    const draggedOverImage = useRef<number>(0)
    const [imageNames, setImageNames] = useState<string[]>([
        'Rectangle 15.png',
        'Rectangle 16.png',
        'Rectangle 17.png',
        'Rectangle 18.png',
    ]);

     {/* Sürükle ve Bırak İşlemleri İşlemleri */ } 
    function handleSort() {
        const imageClone = [...imageNames]
        const temp = imageClone[dragImage.current]
        imageClone[dragImage.current] = imageClone[draggedOverImage.current]
        imageClone[draggedOverImage.current] = temp
        setImageNames(imageClone)
    }






    return (
        <div className=' flex flex-col 3xl:items-center  bg-bg-gray w-full p-5 xl:p-10 3xl:p-5 h-[50%] rounded-[27.24px] '>
            <div className=' '>
                <p className='font-inter text-white text-lg flex items-center 3xl:text-2xl '> <IoIosHeart className='text-white' /> Activities in your area</p>
                <div className='flex  gap-2 md:gap-10 xl:gap-4 mt-[2%]'>
                    {imageNames.map((image, index) => (
                        <div key={index}
                            draggable
                            onDragStart={() => (dragImage.current = index)}
                            onDragEnter={() => (draggedOverImage.current = index)}
                            onDragEnd={handleSort}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <img className='     md:h-[150px] md:w-[100px] 2xl:w-[250px] 2xl:h-[250px]  xl:w-[200px] xl:h-[200px] ' src={`${process.env.PUBLIC_URL}/images-vectors/area/${image}`}></img>
                        </div>
                    )

                    )}
                </div>
            </div>

        </div>

    )
}
