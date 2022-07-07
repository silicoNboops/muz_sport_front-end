import React, {useState} from 'react';
import SectionList from "./parts/SectionList";
import SectionData from "./parts/SectionData";


const Coupons = ({setActiveSection}) => {
    // Купон, срок.действия, Статус
    const [coupons, setCoupons] = useState([]);

    const initData = () => {
        // TODO получать эти данные с бека
        setCoupons([]);
    }

    const dataBlocks = [
        {
            'value': '1sadad',
            // 'valueChanger': setName,
            'type': 'text',
            // 'placeholder': 'ФИО',
            'label': 'Купон',
            'isDisabled': true
        },
        {
            'value': '2',
            // 'valueChanger': setEmail,
            'type': 'date',
            // 'placeholder': 'Эл. почта',
            'label': 'Срок действия',
            'isDisabled': true
        },
        {
            'value': 'active',
            // 'valueChanger': setPhone,
            'type': 'text',
            // 'placeholder': 'Телефон',
            'label': 'Статус',
            'isDisabled': true
        }
    ]

    return (
        <>
            {/* TODO увеличить высоту по умолчанию */}
            <section className="container mt-3">
                <div className="row inner-block-1">
                    <aside className="col-md-3">
                        {/* TODO activeSec */}
                        <SectionList activeSection='Купоны' setActiveSection={setActiveSection}/>
                    </aside>

                    <div className="inner-block-2 col-md-8 m-2">
                        <SectionData
                            dataBlocks={dataBlocks}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Coupons;
