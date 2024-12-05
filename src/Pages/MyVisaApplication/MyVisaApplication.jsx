import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import MyVisaApplicationCard from "../../Components/MyVisaApplicationCard/MyVisaApplicationCard";

const MyVisaApplication = () => {
    const [visa, setVisa] = useState([])
    const { user } = useContext(AuthContext)
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:2000/applyVisa/${email}`)
            .then(res => res.json())
            .then(data => {
                setVisa(data)
            })
    }, [email])

    return (
        <div className="min-h-[90vh]">
            {visa.length ?

                <div>
                    {
                        visa.map(item => <MyVisaApplicationCard key={item._id} item={item} setVisa={setVisa} visa={visa}></MyVisaApplicationCard>)
                    }
                </div>
                :

                <h1 className="text-5xl text-center mt-20 font-bold text-[#D4AF37] ">Not Fount</h1>
            }
        </div>
    );
};

export default MyVisaApplication;