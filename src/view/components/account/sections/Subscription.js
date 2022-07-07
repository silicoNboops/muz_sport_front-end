import React, {useEffect, useState} from 'react';
import SectionList from "./parts/SectionList";
import SectionData from "./parts/SectionData";
import API from "../../../../api/API";


const Subscription = ({setActiveSection}) => {
    // email
    const [subscription, setSubscription] = useState(false);
    const [subscriptionEmail, setSubscriptionEmail] = useState('');

    // при первой загрузке страницы получаем инфу о подписке чтоб выбрать варик отрисовки
    useEffect(() => {
        API.accountSubscriptionInfo()
            .then((res) => {
                // TODO с бека получать джсон вот с такой переменной
                setSubscription(res.data.subscription);

                if (res.data.subscription) {
                    setSubscriptionEmail(res.data.subscriptionEmail);
                }
            })
            .catch((error) => {
                console.log('subs info error');
            });
    }, [])

    const initData = () => {
        // TODO получать эти данные с бека
        setSubscription(false);
        setSubscriptionEmail('');
    }

    const subscribe = (e) => {
        e.preventDefault();

        API.accountSubscriptionOn()
            .then((res) => {
                // TODO с бека получать джсон вот с такой переменной
                setSubscription(true);

                if (res.data.subscription) {
                    setSubscriptionEmail(res.data.subscriptionEmail);
                }
            })
            .catch((error) => {
                console.log('subs info error');
            });

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

    const unsubscribe = (e) => {
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
        'icon': 'check.png'
    }

    const dataBlocks = [
        {
            'value': subscriptionEmail,
            'valueChanger': setSubscriptionEmail(),
            'type': 'text',
            'placeholder': 'Эл. почта для подписки',
        }
    ]
    console.log(dataBlocks);

    return (
        <>
            {/* TODO увеличить высоту по умолчанию */}
            <section className="container mt-3">
                <div className="row inner-block-1">
                    <aside className="col-md-3">
                        {/* TODO activeSec */}
                        <SectionList activeSection='Профиль' setActiveSection={setActiveSection}/>
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
