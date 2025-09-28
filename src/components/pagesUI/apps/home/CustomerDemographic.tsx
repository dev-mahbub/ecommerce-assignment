import Image from "next/image";
import WorldImg from "../../../../../public/assets/images/map/map.png"
import UsImg from "../../../../../public/assets/images/map/america.svg"
import FranceImg from "../../../../../public/assets/images/map/france.svg"
import { MoreVertical } from "lucide-react";

export default function CustomersDemographic() {
  return (
    <div className="col-span-12 sm:col-span-7 xxl:col-span-7">
        <div className="card__wrapper bg-white shadow-sm rounded-2xl p-6 w-full max-w-md">
        {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div>
                <h2 className="text-lg font-semibold text-gray-800">
                    Customers Demographic
                </h2>
                <p className="text-sm text-gray-500">
                    Number of customer based on country
                </p>
                </div>
                <button className="hover:bg-gray-100 p-2 rounded-full">
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* World Map */}
            <div className="border border-border dark:border-border-dark rounded-xl p-4 pb-3 flex justify-center items-center">
                <Image
                src={WorldImg}
                alt="World Map"
                width={600}
                height={300}
                className="opacity-80"
                />
            </div>

            {/* Countries */}
            <div className="mt-6 space-y-4">
                {/* USA */}
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                        <div className="flex items-center gap-2 min-w-[32px]">
                            <Image
                                src={UsImg}
                                alt="USA Flag"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-800 font-medium">USA</span>
                            <span className="text-sm text-gray-500">2,379 Customers</span>
                        </div>
                    </div>
                    <div className="w-[40%] flex items-center">
                        <div className=" w-[70%] bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "79%" }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-3.5 ml-2">79%</p>
                    </div>
                </div>

                {/* France */}
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                        <div className="flex items-center gap-2 min-w-[32px]">
                            <Image
                                src={FranceImg}
                                alt="France Flag"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-800 font-medium">France</span>
                            <span className="text-sm text-gray-500">643 Customers</span>
                        </div>
                    </div>
                    <div className="w-[40%] flex items-center">
                        <div className=" w-[70%] bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "23%" }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-3.5 ml-2">23%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}
