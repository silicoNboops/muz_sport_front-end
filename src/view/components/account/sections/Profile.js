import React, {useEffect, useState} from 'react';
import SectionList from "./parts/SectionList";
import SectionData from "./parts/SectionData";


const Profile = ({setActiveSection}) => {
    // ФИО, Эл. почта, Телефон, Предпочтительный вид спорта
    // TODO получать эти данные с бека
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [preferredSport, setPreferredSport] = useState(undefined);

    const resetForm = () => {
        initData();
    }

    const initData = () => {
        setName('');
        setEmail('');
        setPhone('');
        setPreferredSport(undefined);
    }

    const saveProfileData = (e) => {
        e.preventDefault();
        const profileData = {name, email, phone, preferredSport};

        // TODO переписать под axios API.post...
        fetch(process.env.REACT_APP_NKS_API + 'user/profile/save/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileData)
        })
            .then(res => res.json())
            .then((result) => {
                    initData();
                    // notifyOrderSuccess(result);
                },
                (error) => {
                    // notifyOrderError();
                })
    };

    const submitButton = {
        'text': 'Сохранить',
        'handler': saveProfileData,
        'icon': ''
    }

    const dataBlocks = [
        {
            'value': name,
            'valueChanger': setName,
            'type': 'text',
            'placeholder': 'ФИО',
            'label': 'ФИО'
        }
    ]
    console.log(dataBlocks);

    return (
        <>
            {/* TODO увеличить высоту по умолчанию */}
            <section className="container mt-3">
                <div className="row inner-block-1">
                    <aside className="col-md-3">
                        <SectionList activeSection="Профиль" setActiveSection={setActiveSection}/>
                    </aside>

                    <div className="inner-block-2 col-md-8 m-2">
                        <SectionData
                            dataBlocks={dataBlocks}
                            submitButton={submitButton}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
