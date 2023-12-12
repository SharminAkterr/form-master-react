import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Friend = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h3>Friend</h3>
            <h5>{gift}</h5>
        </div>
    );
};

export default Friend;