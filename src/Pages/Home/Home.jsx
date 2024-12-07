import Banner from "../../Shared/Banner/Banner";
import LatestVisas from "../../Shared/LatestVisas/LatestVisas";
import Professional from "../../Shared/ProfessionalTeam/Professional";
import VisaCard from "../../Shared/VisaCard/VisaCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestVisas></LatestVisas>
            <VisaCard></VisaCard>
            <Professional></Professional>
        </div>
    );
};

export default Home;