import React, {FC, useState} from "react";
import Image from "next/image";
import {CAS, connect} from "@/types";

const Connect: FC<{ data1: connect; data2: connect }> = ({data1, data2}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const renderRow = (label: string, value1: CAS['do_phan_giai_cam_sau'] | CAS['quay_phim_cam_sau'] | CAS['flash'] | CAS['tinh_nang_cam_sau'] | CAS['do_phan_giai_cam_truoc'] | CAS['tinh_nang_cam_truoc'] | CAS['man_hinh'] | CAS['do_phan_giai'] | CAS['kich_thuoc'] | CAS['do_sang_max'] | CAS['mat_kinh_cam_ung'] | undefined, value2: typeof value1) => {
        if (!value1 && !value2) return null;

        const renderValue = (value: string | undefined) =>
            value
                ? value.replace(/^\n/, "").split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                        <br/>
                  </span>
                ))
                : null;

        return (
            <tr className="border-b">
                <td className="p-2 font-medium w-[250px]">{label}</td>
                <td className="p-2 font-medium border-l w-[443px]">{renderValue(value1)}</td>
                <td className="p-2 font-medium border-l">{renderValue(value2)}</td>
            </tr>
        );
    };

    return (
        <div className="">
            <div className="flex gap-2 items-center cursor-pointer" onClick={toggleDropdown}>
                <div
                    className={`transform-gpu
                    ${isOpen ? "rotate-180" : "rotate-0"} 
                    transition-transform duration-300`}
                >
                    <Image src="/Style=outline.svg" alt="#" width={20} height={20}/>
                </div>
                <h2 className="text-lg font-bold">Kết nối</h2>
            </div>
            <div
                className={`shadow-xl overflow-hidden transition-all duration-1000 ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 hidden"
                }`}
            >
                <div
                    className="p-3 mt-2 border border-t-black rounded-8 overflow-auto max-h-[400px]"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                        {renderRow("Mạng di động", data1.mang_di__dong, data2.mang_di__dong)}
                        {renderRow("SIM", data1.sim, data2.sim)}
                        {renderRow("Wifi", data1.wifi, data2.wifi)}
                        {renderRow("GPS", data1.gps, data2.gps)}
                        {renderRow("Bluetooth", data1.bluetooth, data2.bluetooth)}
                        {renderRow("Cổng kết nối/sạc", data1.cong_ket_noi, data2.cong_ket_noi)}
                        {renderRow("Jack tai nghe", data1.jack_tai_nghe, data2.jack_tai_nghe)}
                        {renderRow("Kết nối khác", data1.ket_noi_khac, data2.ket_noi_khac)}
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Connect;
