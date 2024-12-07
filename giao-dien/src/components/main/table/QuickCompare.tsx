import {Phone} from "@/types";
import React, {FC} from "react";
import Image from "next/image";


const QuickCompare: FC<{ data1: Phone, data2: Phone }> = ({data1, data2}) => {
    return (
        <div>
            <div className="flex gap-2 items-center cursor-pointer">
                <Image src="/arrow-square-up.svg" alt="#" width={20} height={20}/>
                <h2 className="text-lg font-bold">So sánh nhanh</h2>
                <Image src="/star-svgrepo-com (1).svg" alt="#" width={20} height={20}/>
            </div>
            <div className='p-3 mt-2 border border-t-black rounded-8'>
                <table className='w-full border-collapse text-left'>
                    <thead>
                    <tr >
                        <td className='p-2 font-medium w-[250px]'>So sánh nhanh</td>
                        <td className='border-l p-2 font-medium w-[443px]'>Màn hình:{' '}{data1.cam_and_screen.man_hinh}</td>
                        <td className='border-l p-2 font-medium'>Màn hình:{' '}{data1.cam_and_screen.man_hinh}</td>
                    </tr>
                    <tr >
                        <td></td>
                        <td className='border-l p-2 font-medium '>Chip:{' '}{data1.config_and_memo.chip}</td>
                        <td className='border-l p-2 font-medium'>Chip:{' '}{data2.config_and_memo.chip}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='border-l p-2 font-medium'>RAM:{' '}{data1.config_and_memo.ram}</td>
                        <td className='border-l p-2 font-medium'>RAM:{' '}{data2.config_and_memo.ram}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='border-l p-2 font-medium'>Dung lượng:{' '}{data1.config_and_memo.dung_luong_luu_tru}</td>
                        <td className='border-l p-2 font-medium'>Dung lượng:{' '}{data2.config_and_memo.dung_luong_luu_tru}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='border-l p-2 font-medium'>Camera sau:{' '}{data1.cam_and_screen.do_phan_giai_cam_sau}</td>
                        <td className='border-l p-2 font-medium'>Camera sau:{' '}{data2.cam_and_screen.do_phan_giai_cam_sau}</td>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default QuickCompare;