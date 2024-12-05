import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import MyAddedVisasCard from "../../Components/MyAddedVisasCard/MyAddedVisasCard";

const MyAddedVisas = () => {
    const [data, setData] = useState([])
    const { user } = useContext(AuthContext)
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:2000/allVisas/${email}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [email])
    console.log(data)
    return (
        <div className="min-h-[90vh]">
            {data.length ?
                <div>
                    {
                        data.map(item => <MyAddedVisasCard key={item._id} visa={item} setData={setData} data={data}></MyAddedVisasCard>)
                    }
                </div>
                :
                <h1 className="text-5xl text-center mt-20 font-bold text-[#D4AF37] h-[90vh]">Not Fount</h1>
            }
        </div>
    );
};

export default MyAddedVisas;