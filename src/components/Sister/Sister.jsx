import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";

const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>Sister</h3>
            <p>Grandpa Money: {money}</p>
        </div>
    );
};

export default Sister;