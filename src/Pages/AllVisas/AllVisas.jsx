import { useLoaderData } from "react-router-dom";
import LatestVisaCard from "../../Components/LatestVisaCard/LatestVisaCard";

const AllVisas = () => {
    const loaderData = useLoaderData()

    return (
        <div className="grid grid-cols-4 gap-3">
            {
                loaderData.map(item => <LatestVisaCard key={item?._id} item={item}></LatestVisaCard>)
            }
        </div>
    );
};

export default AllVisas;