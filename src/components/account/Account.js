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
        console.log(sectionName);
        if (sectionName == 'Заказы') {
            // TODO
            return <Orders/>;
        } else if (sectionName == 'Купоны') {
            // TODO
            return <Coupons setActiveSection={setActiveSection} />;
        } else if (sectionName == 'Подписка') {
            // TODO
            // return <Subscription/>;
        } else {
            return <Profile setActiveSection={setActiveSection} />;
        }
    }

    return (
        <>
            <section className="container">
                <div className="row inner-block-1 p-1">
                    <div className="inner-block-3 me-3 ms-3 mt-1 mb-1 text-start">
                        <span className="ms-3 text-danger">LOL</span>
                    </div>
                </div>
            </section>

            {sectionComponent}
        </>
    );
};

export default Account;
