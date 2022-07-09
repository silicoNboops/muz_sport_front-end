import React, {useEffect, useState} from "react";
import API from "../api/API";


const WishList = () => {
    const [wishes, setWishes] = useState([]);
    const [pending, setPending] = useState(true);
    const [select, setSelect] = useState(false);
    const [waver, setWaver] = useState(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {

    API.getWishlist()
        .then((res) => {
            setPending(false)
            setWishes(res.data);
        });
}, []);

    if(pending) return <div></div>

    return(
        <div>
        <h3 className="text-white">Ебаный ВишЛист гори в аду нахуй</h3>
        <h2 className="text-white">Маму ебал твою сука</h2>
        <h2 className="text-white">Ебаное животное</h2>

        </div>
)
}
export default WishList;
