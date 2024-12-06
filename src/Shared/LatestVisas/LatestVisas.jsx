import { useContext, useEffect, useState } from "react";
import LatestVisaCard from "../../Components/LatestVisaCard/LatestVisaCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const LatestVisas = () => {
    const [data, setData] = useState([])
    const { isDark } = useContext(AuthContext)
    useEffect(() => {
        fetch('http://localhost:2000/allVisa')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <h1 className={`text-center ${isDark ? "text-gold" : 'text-[#1A1A1A]'} font-bold text-7xl my-20`}>Latest visas</h1>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    data?.map(item => <LatestVisaCard key={item?.id} item={item}></LatestVisaCard>)
                }
            </div>

            <div className="flex justify-center my-10">
                <Link to={'allVisas'}> <button className={`text-lg font-semibold border py-3 px-8 rounded bg-[#D4AF37] ${isDark ? 'hover:shadow-2xl hover:shadow-[#8270337d]' : ''}`}>See All Visa    ➜</button></Link>
            </div>
        </>
    );
};

export default LatestVisas;