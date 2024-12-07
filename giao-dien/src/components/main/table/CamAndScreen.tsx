import React, {FC, useState} from "react";
import Image from "next/image";
import {CAS} from "@/types";

const CamAndScreen: FC<{ data1: CAS; data2: CAS }> = ({data1, data2}) => {
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
                <td className="border-l p-2 font-medium w-[443px]">{renderValue(value1)}</td>
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
                <h2 className="text-lg font-bold">Camera & Màn hình</h2>
            </div>
            <div
                className={`shadow-xl  transition-all duration-1000 ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 hidden"
                }`}
            >
                <div
                    className="p-3 mt-2 border border-t-black rounded-8 max-h-[400px] overflow-auto " // Thêm overflow-auto
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                        {renderRow("Độ phân giải camera sau", data1.do_phan_giai_cam_sau, data2.do_phan_giai_cam_sau)}
                        {renderRow("Quay phim camera sau", data1.quay_phim_cam_sau, data2.quay_phim_cam_sau)}
                        {renderRow("Đèn Flash camera sau", data1.flash, data2.flash)}
                        {renderRow("Tính năng camera sau", data1.tinh_nang_cam_sau, data2.tinh_nang_cam_sau)}
                        {renderRow("Độ phân giải camera trước", data1.do_phan_giai_cam_truoc, data2.do_phan_giai_cam_truoc)}
                        {renderRow("Tính năng camera trước", data1.tinh_nang_cam_truoc, data2.tinh_nang_cam_truoc)}
                        {renderRow("Công nghệ màn hình", data1.man_hinh, data2.man_hinh)}
                        {renderRow("Độ phân giải màn hình", data1.do_phan_giai, data2.do_phan_giai)}
                        {renderRow("Kích thước màn hình", data1.kich_thuoc, data2.kich_thuoc)}
                        {renderRow("Độ sáng tối đa", data1.do_sang_max, data2.do_sang_max)}
                        {renderRow("Mặt kính cảm ứng", data1.mat_kinh_cam_ung, data2.mat_kinh_cam_ung)}
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CamAndScreen;
