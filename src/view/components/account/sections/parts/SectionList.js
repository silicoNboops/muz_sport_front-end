import React from 'react';


const SectionList = ({activeSection, setActiveSection}) => {
    const resetForm = () => {

    }

    return (
             // TODO активный из activeSection чтоб выделить текущий (мб # поюзать)
            <div className="btn-group-vertical float-start m-3">
                <div className="col-auto m-1">
                    <button className="btn btn-muz"
                            type="button"
                            value='Заказы'
                            onClick={setActiveSection}>
                        Профиль
                    </button>
                </div>
                <div className="col-auto m-1">
                    {/* TODO refactor onCLick*/}
                    <button className="btn btn-muz"
                            type="button"
                            onClick={setActiveSection}>
                        Заказы
                    </button>
                </div>
                <div className="col-auto m-1">
                    <button className="btn btn-muz"
                            type="button"
                            onClick={setActiveSection}>
                        Купоны
                    </button>
                </div>
                <div className="col-auto m-1">
                    <button className="btn btn-muz"
                            type="button"
                            onClick={setActiveSection}>
                        Подписка
                    </button>
                </div>
            </div>
    );
};

export default SectionList;
