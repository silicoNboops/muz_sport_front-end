import React, { useRef } from 'react';


const SectionButton = ({ sectionName, sectionIcon, ref, key_, setActiveSection }) => {

    // const buttonRef = useRef(sectionName);

    return (
        // TODO РЕФЫ И ФОКУС
        <button className="btn btn-muz btn-muz-section text-start"
                key={key_}
                type="button"
                // ref={buttonRef}
                // ref={ref}
                value={sectionName}
                onClick={e => setActiveSection(e.target.value)}>

            <img src={"assets/icons/" + sectionIcon} width="28px" alt={sectionName}
                 className='me-3'
            />
            {sectionName}
        </button>
    );
};

export default SectionButton;
