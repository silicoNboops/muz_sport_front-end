import React from "react";
import SectionButton from "./SectionButton";


const SectionList = ({ activeSection, setActiveSection }) => {
    const sectionButtons = [
        {
            'name': 'Профиль',
            'icon': 'account2.png'
        },
        {
            'name': 'Заказы',
            'icon': 'cart.png'
        },
        {
            'name': 'Купоны',
            'icon': 'coupon.png'
        },
        {
            'name': 'Подписка',
            'icon': 'subscribe.png'
        }
    ]
    // const sectionList = ['Профиль', 'Заказы', 'Купоны', 'Подписка'];

    // TODO РАЗОБРАТЬСЯ С РЕФАМИ И ФОКУСОМ
    // const buttonRef = useRef(null);
    // const handleFocus = () => {
    //     console.log(buttonRef.current);
    //     buttonRef.current.focus();
    // }

    // TODO сбросить все данные формы
    const resetForm = () => {

    }

    return (
             // TODO активный из activeSection чтоб выделить текущий (мб # поюзать)
            // TODO сделать одну ширину кнопок
            <div className="btn-group-vertical float-start m-3">
                {sectionButtons.map((sectionButton, index) =>
                    <div className="col-auto m-1">
                        <SectionButton
                            key={sectionButton.name + '_' + index}
                            // ref={buttonRef}
                            sectionName={sectionButton.name}
                            sectionIcon={sectionButton.icon}
                            setActiveSection={setActiveSection}
                        />
                    </div>
                )}
                    {/*<button className="btn btn-muz pe-5"*/}
                    {/*        type="button"*/}
                    {/*        value='Профиль'*/}
                    {/*        onClick={e => {*/}
                    {/*            setActiveSection(e.target.value);*/}
                    {/*            handleFocus();*/}
                    {/*        }}>*/}

                    {/*    <img src="assets/icons/account2.png" width="30px" alt="Профиль"*/}
                    {/*         className='me-4'*/}
                    {/*    />*/}
                    {/*    Профиль*/}
                    {/*</button>*/}
            </div>
    );
};

export default SectionList;
