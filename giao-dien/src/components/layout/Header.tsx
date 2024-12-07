import React, {useState, useEffect, FC} from "react";
import Image from "next/image";
import {Phone} from "@/types";
import {motion} from "framer-motion";
import Link from "next/link";

const Header: FC<{ phone1: Phone, phone2: Phone }> = ({phone1, phone2}) => {
    const [showHeader, setShowHeader] = useState(false);
    const [showDiffrences, setShowDiffrences] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;  // Vị trí cuộn hiện tại
            const screenHeight = window.innerHeight; // Chiều cao màn hình

            // Kiểm tra xem cuộn đã vượt qua 2/3 chiều cao màn hình chưa
            if (scrollPosition > screenHeight * 3 / 4) {
                setShowHeader(true);  // Hiển thị header khi cuộn qua 2/3 màn hình
            } else {
                setShowHeader(false);  // Ẩn header khi chưa cuộn đủ
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleToggleDiffernces = () => {
        setShowDiffrences(!showDiffrences);
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
                showHeader ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div
                className="bg-white shadow-xl mx-auto px-3 py-4 flex items-center transition-all"
                style={{maxWidth: "1136px", borderRadius: "8px"}}
            >
                <div className='flex gap-2 items-center'>
                    {/*<input type='checkbox' onClick={handleToggleDiffernces}*/}
                    {/*       className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'/>*/}
                    <h1 className="text-base font-medium w-[250px]">Hãy mua ngay</h1>
                </div>
                {/*Phone1*/}
                <div className='flex'>
                    <div className='flex gap-2 w-[443px] border-l'>
                        <div className='relative w-[90px] h-[60px]'>
                            <Image
                                src={phone1.img}
                                alt="Logo"
                                fill
                                className='object-contain'
                            />
                        </div>
                        <div>
                            <span className='text-sm font-normal text-center'>{phone1.phone}</span>
                            <Link href={phone1.link_san_pham} target='_blank' className='flex pt-1'>
                                <motion.button
                                    aria-label="View more recruitment details"
                                    className="bg-gradient-to-r from-[#FFB02D] to-[#EB7B31] text-white h-[30px]  w-fit px-5 py-2 flex gap-2 rounded-[8px] items-center justify-center whitespace-nowrap"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    transition={{type: 'spring', stiffness: 400, damping: 10}}
                                >
                                   <span className="font-light text-xs">
                                       Mua ngay
                                   </span>
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/*Phone2*/}
                    <div className='flex gap-2 border-l'>
                        <div className='relative w-[90px] h-[60px]'>
                            <Image
                                src={phone2.img}
                                alt="Logo"
                                fill
                                className='object-contain'
                            />
                        </div>
                        <div>
                            <span className='text-sm font-normal text-center'>{phone2.phone}</span>
                            <Link href={phone2.link_san_pham} target='_blank' className='flex pt-1'>
                                <motion.button
                                    aria-label="View more recruitment details"
                                    className="bg-gradient-to-r from-[#FFB02D] to-[#EB7B31] text-white h-[30px]  w-fit px-5 py-2 flex gap-2 rounded-[8px] items-center justify-center whitespace-nowrap"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    transition={{type: 'spring', stiffness: 400, damping: 10}}
                                >
                                 <span className="font-light text-xs">
                                     Mua ngay
                                 </span>
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
