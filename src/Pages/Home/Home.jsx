import Banner from "../../Shared/Banner/Banner";
import LatestVisas from "../../Shared/LatestVisas/LatestVisas";
import VisaCard from "../../Shared/VisaCard/VisaCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestVisas></LatestVisas>

            <VisaCard></VisaCard>
        </div>
    );
};

export default Home;