import React, {FC, useState} from "react";
import Image from "next/image";
import {CAM, CAS} from "@/types";

const ConfigAndMemo: FC<{ data1: CAM; data2: CAM }> = ({data1, data2}) => {
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
            {/* Tiêu đề dropdown */}
            <div className="flex gap-2 items-center cursor-pointer" onClick={toggleDropdown}>
                <div
                    className={`transform-gpu
                    ${isOpen ? "rotate-180" : "rotate-0"} 
                    transition-transform duration-300`}
                >
                    <Image src="/Style=outline.svg" alt="#" width={20} height={20}/>
                </div>
                <h2 className="text-lg font-bold">Cấu hình & Bộ nhớ</h2>
            </div>

            {/* Nội dung dropdown */}
            <div
                className={`shadow-xl overflow-hidden transition-all duration-1000 ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 hidden"
                }`}
            >
                <div className="p-3 mt-2 border border-t-black rounded-8 overflow-auto max-h-[400px]">
                    <table className="w-full text-left border-collapse">
                        <tbody>
                        {renderRow("Hệ điều hành", data1.he_dieu_hanh, data2.he_dieu_hanh)}
                        {renderRow("Chip xử lý (CPU)", data1.chip, data2.chip)}
                        {renderRow("Tốc độ CPU", data1.cpu, data2.cpu)}
                        {renderRow("Chip đồ họa (GPU)", data1.gpu, data2.gpu)}
                        {renderRow("RAM", data1.ram, data2.ram)}
                        {renderRow("Dung lượng lưu trữ", data1.dung_luong_luu_tru, data2.dung_luong_luu_tru)}
                        {renderRow("Dung lượng còn lại (khả dụng)", data1.dung_luong_con_lai, data2.dung_luong_con_lai)}
                        {renderRow("Thẻ nhớ", data1.the_nho, data2.the_nho)}
                        {renderRow("Danh bạ", data1.danh_ba, data2.danh_ba)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ConfigAndMemo;
