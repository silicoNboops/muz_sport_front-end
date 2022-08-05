import React, {useEffect, useState} from "react";
import API from "../api/API";
import WishedProducts from '../components/filters/WishedProducts';


const WishList = () => {
    const [wishes, setWishes] = useState([]);
    const [pending, setPending] = useState(true);


    useEffect(() => {
        API.getWishlist()
            .then((res) => {
                setPending(false)
                setWishes(res.data);
            });
    },[]);

    if(pending) return <div></div>

    if(wishes.length >= 1)
    return(
        <WishedProducts wishedProducts={wishes} />
)
    else {
        return (
            <div className="container pt-5 mt-5" style={{minHeight:'300px'}}>
                <h1 className="text-white pt-4">WishList пуст!</h1>
            </div>
        )
    }

}
export default WishList;
