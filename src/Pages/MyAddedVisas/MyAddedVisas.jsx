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
        <div>
            {
                data.map(item => <MyAddedVisasCard key={item._id} visa={item} ></MyAddedVisasCard>)
            }
        </div>
    );
};

export default MyAddedVisas;