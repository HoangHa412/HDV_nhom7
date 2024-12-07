import {Phone} from "@/types";
import React, {FC} from "react";
import ConfigAndMemo from "@/components/main/table/ConfigAndMemo";
import Connect from "@/components/main/table/Connect";
import CamAndScreen from "@/components/main/table/CamAndScreen";
import BatteryAndCharger from "@/components/main/table/BatteryAndCharger";
import Features from "@/components/main/table/Feature";
import DesAndMaterial from "@/components/main/table/DesAndMaterial";
import QuickCompare from "@/components/main/table/QuickCompare";

const ComparisonTable: FC<{ phone1: Phone, phone2: Phone }> = ({ phone1, phone2 }) => {
        return (
            <div className='my-8 flex flex-col gap-4 w-[1136px]'>
                <QuickCompare data1={phone1 ?? ''} data2={phone2 ?? ''} />
                <ConfigAndMemo data1={phone1?.config_and_memo ?? ''} data2={phone2?.config_and_memo ?? ''}/>
                <CamAndScreen data1={phone1?.cam_and_screen ?? ''} data2={phone2?.cam_and_screen ?? ''} />
                <BatteryAndCharger data1={phone1?.battery_and_charger ?? ''} data2={phone2?.battery_and_charger ?? ''} />
                <Features data1={phone1?.feature ?? ''} data2={phone2?.feature ?? ''} />
                <Connect data1={phone1?.connect ?? ''} data2={phone2?.connect ?? ''} />
                <DesAndMaterial data1={phone1?.des_and_material ?? ''} data2={phone2?.des_and_material ?? ''} />
            </div>
        )
    }
;
export default ComparisonTable
