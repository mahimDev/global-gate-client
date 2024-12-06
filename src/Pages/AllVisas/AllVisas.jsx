import { useLoaderData } from "react-router-dom";
import LatestVisaCard from "../../Components/LatestVisaCard/LatestVisaCard";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const AllVisas = () => {
    const loaderData = useLoaderData()
    const { isDark } = useContext(AuthContext)

    return (
        <div className="">
            <h1 className={`text-center ${isDark ? 'text-gold' : 'text-[#1A1A1A]'} font-bold text-7xl my-20`}>All Visas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    loaderData.map(item => <LatestVisaCard key={item?._id} item={item}></LatestVisaCard>)
                }
            </div>
        </div>
    );
};

export default AllVisas;