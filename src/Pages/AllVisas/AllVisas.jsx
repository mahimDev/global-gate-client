import { useLoaderData } from "react-router-dom";
import LatestVisaCard from "../../Components/LatestVisaCard/LatestVisaCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const AllVisas = () => {
    const loaderData = useLoaderData()
    const [data, setData] = useState(loaderData || [])
    // const [isActive, setIsActive] = useState("All Visa")
    // 
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("All Visa")
    // array of options 

    useEffect(() => {
        if (selectedValue == "Official Visa") {
            const filter = loaderData.filter(item => item.visa_type == "Official Visa")
            setData(filter)
        }
        if (selectedValue == "Tourist Visa") {
            const filter = loaderData.filter(item => item.visa_type == "Tourist Visa")
            setData(filter)
        }
        if (selectedValue == "Student Visa") {
            const filter = loaderData.filter(item => item.visa_type == "Student Visa")
            setData(filter)
        }
        if (selectedValue == "All Visa") {
            setData(loaderData)
        }
    }, [loaderData, selectedValue])



    const { isDark } = useContext(AuthContext)

    return (
        <div className="">
            <div className="flex justify-between items-center  mb-16">
                <div className=" w-1/6"></div>
                <h1 className={`text-center ${isDark ? 'text-gold' : 'text-[#1A1A1A]'} font-bold md:text-7xl text-4xl my-20`}>All Visas</h1>
                <div>
                    <div className="relative ">
                        {/* dropdown - btn */}
                        <div onClick={() => setIsOpen(!isOpen)} className="mx-auto flex w-72 items-center justify-between rounded-xl bg-white px-6 py-2 border">
                            <h1 className="font-medium text-gray-600">Filter Visa Type</h1>
                            <svg className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
                        </div>
                        {/* dropdown - options  */}
                        <div className={`${isOpen ? 'visible top-8 opacity-100' : 'invisible -top-4 opacity-0'} absolute mx-auto my-4 w-72 rounded-xl py-4 border duration-300 z-50`}>
                            <div>
                                <button
                                    onClick={() => setSelectedValue("Official Visa")}
                                    className="px-6 w-full py-2 text-left text-gray-500 hover:bg-gray-100">Official visa</button>
                                <button
                                    onClick={() => setSelectedValue("Student Visa")}
                                    className="px-6 w-full py-2 text-left text-gray-500 hover:bg-gray-100">Student Visa</button>
                                <button
                                    onClick={() => setSelectedValue("Tourist Visa")}
                                    className="px-6 w-full py-2 text-left text-gray-500 hover:bg-gray-100">Tourist Visa</button>
                                <button
                                    onClick={() => setSelectedValue("All Visa")}
                                    className="px-6 w-full py-2 text-left text-gray-500 hover:bg-gray-100">All Visa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    data.map(item => <LatestVisaCard key={item?._id} item={item}></LatestVisaCard>)
                }
            </div>
        </div>
    );
};

export default AllVisas;