import React, {useEffect, useState} from 'react';
import Profile from "./sections/Profile";
import Orders from "./sections/Orders";
import Coupons from "./sections/Coupons";
import Subscription from "./sections/Subscription";


const Account = () => {
    // const sectionList = ['Профиль', 'Заказы', 'Купоны', 'Подписка'];
    // TODO сделать контекстом, чтоб проваливалось в детей
    const [activeSection, setActiveSection] = useState('Профиль');
    const [sectionComponent, setSectionComponent] = useState(null);

    useEffect(() => {
        setSectionComponent(chooseSection(activeSection));
    }, [activeSection])

    const chooseSection = (sectionName) => {
        if (sectionName == 'Заказы') {
            return <Orders/>;
        } else if (sectionName == 'Купоны') {
            return <Coupons/>;
        } else if (sectionName == 'Подписка') {
            return <Subscription/>;
        } else {
            return <Profile activeSection={activeSection} setActiveSection={setActiveSection}/>;
        }
    }

    return (
        <>
            <section className="container">
                <div className="row inner-block-1 p-1">
                    <div className="inner-block-3 me-3 ms-3 mt-1 mb-1">
                        <span>LOL</span>
                    </div>
                </div>
            </section>

            {sectionComponent}
        </>
    );
};

export default Account;
