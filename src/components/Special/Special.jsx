import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h3>Special</h3>
            <p>{asset}</p>
            <p>{gift}</p>
        </div>
    );
};

export default Special;