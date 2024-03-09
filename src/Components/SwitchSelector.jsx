'use client'
import SwitchSelector from "react-switch-selector";
import '../Styles/SwitchSelector/SwitchSelector.scss';

export default function ToggleSwitch() {
    const options = [
        {
            label: "Pay as you go",
            value: {
                foo: true
            },
            selectedBackgroundColor: "#FE3399",
        },
        {
            label: "Subscription",
            value: "Subscription",
            selectedBackgroundColor: "#FE3399"
        }
    ];

    const onChange = (newValue) => {
        console.log(newValue);
    };

    const initialSelectedIndex = options.findIndex(({value}) => value === "Pay as you go");

    return (
        <div className="switch-container"> 
            <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={"#FFF2FB"}
                fontColor={"#FE3399"}
                selectedFontColor={"#fff"}
                className="custom-switch-selector"
            />
            </div>
    );
  }

