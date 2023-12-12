import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { AssetContext, MoneyContext } from "../GrandPa/GrandPa";

const Aunty = () => {
    const gift = useContext(AssetContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex-section">
                <Cousin name={'Sumaiya'}></Cousin>
                <Cousin name={'Rubaiya'} gift={gift}></Cousin>
            </section>
            <div>
                <p>Money: {money}</p>
                <button onClick={() => { setMoney(money + 1000) }}>Add 1000 Tk</button>
            </div>
        </div>
    );
};

export default Aunty;