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

    return(
        <WishedProducts wishedProducts={wishes} />
)
}
export default WishList;
