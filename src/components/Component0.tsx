import React, { useState, useEffect } from 'react';
import { Root } from "../types/types"
import { FaMapMarkerAlt } from "react-icons/fa";

interface Component0Props {
    data: Root;
}


const Component0: React.FC<Component0Props> = ({ data }) => {
    const [dayOfWeek, setDayOfWeek] = useState<string>('');
    const [day, setDay] = useState<number>(0);
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<number>(0);

    // Kısaltılmış ay isimleri
    const shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Tarihi güncelleyen useEffect
    useEffect(() => {
        // Şu anki tarih ve zamanı al
        const now = new Date();

        // Alınan tarih bilgilerini state'ler aracılığıyla güncelle
        setDayOfWeek(now.toLocaleDateString('en-US', { weekday: 'long' }));
        setDay(now.getDate());
        setMonth(shortMonthNames[now.getMonth()]);
        setYear(now.getFullYear());
    }, []);
    return (
        <div className='flex  items-center  gap-5 md:gap-0   md:w-[64%] tablet:ml-5'>
            <div className='flex flex-col  items-center justify-center mr-[5%]'>
                <div className='flex gap-2 justify-center items-center md:mb-[15%]'>
                    <FaMapMarkerAlt className='text-white md:text-3xl' />
                    <p className='font-inter text-white md:text-2xl'> {data.city} </p>

                </div>
                <p className='font-inter text-white  md:text-xl tablet:text-[32px] ' > {data.type}</p>
                <p className='font-inter text-white  md:text-4xl tablet:text-6xl md:mt-16 font-semibold'>{data.degree}°C</p>
            </div>

            <div className=' md:mr-[7%] xl:mr-[11%] flex items-center md:flex-none'>
                <img className=' w-20 h-20 md:w-40 md:h-40 tablet:w-full 2xl:w-full tablet:h-50' src={`${process.env.PUBLIC_URL}/images-vectors/389.png`}></img>
            </div>

            <p className='font-inter text-white md:text-2xl tablet:text-3xl xl:text-[40px] font-medium ' > {dayOfWeek} | {day} {month} {year}</p>



        </div>
    )
}

export default Component0;
