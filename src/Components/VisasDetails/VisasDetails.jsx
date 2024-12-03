import { useLoaderData, useParams } from "react-router-dom";

const VisasDetails = () => {
    const { id } = useParams()
    const loaderData = useLoaderData()
    const item = loaderData.find(data => data.id == id)
    const {
        age_restriction,
        application_method,
        country_image,
        flag_image,
        country_name,
        description,
        fee,

        processing_time,
        required_documents,
        validity,
        visa_type,
    } = item
    return (
        <div className="w-11/12 mx-auto mt-20">

        </div>
    );
};

export default VisasDetails;