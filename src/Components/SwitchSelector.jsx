import React, { useState } from 'react';
import '../Styles/SwitchSelector/SwitchSelector.scss';

export default function SwitchSelector({ onChange }) {
    const [selectedOption, setSelectedOption] = useState("payAsYouGo");

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        if (onChange) {
            onChange(option);
        }
    };

    return (
        <div className="switch-selector">
            <button
                className={selectedOption === "payAsYouGo" ? "active" : ""}
                onClick={() => handleOptionChange("payAsYouGo")}
            >
                Pay As You Go
            </button>
            <button
                className={selectedOption === "subscription" ? "active" : ""}
                onClick={() => handleOptionChange("subscription")}
            >
                Subscription
            </button>
        </div>
    );
}
