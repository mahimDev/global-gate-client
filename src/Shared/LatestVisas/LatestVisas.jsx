import { useEffect, useState } from "react";
import LatestVisaCard from "../../Components/LatestVisaCard/LatestVisaCard";

const LatestVisas = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                data?.map(item => <LatestVisaCard key={item?.id} item={item}></LatestVisaCard>)
            }
        </div>
    );
};

export default LatestVisas;