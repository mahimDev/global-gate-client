import { useEffect, useState } from "react";
import LatestVisaCard from "../../Components/LatestVisaCard/LatestVisaCard";
import { Link } from "react-router-dom";

const LatestVisas = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    data?.map(item => <LatestVisaCard key={item?.id} item={item}></LatestVisaCard>)
                }
            </div>

            <div className="flex justify-center my-10">
                <Link to={'allVisas'}> <button className="text-lg font-semibold border py-3 px-8 rounded bg-[#D4AF37]">See All Visa    ➜</button></Link>
            </div>
        </>
    );
};

export default LatestVisas;