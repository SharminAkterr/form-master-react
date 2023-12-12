import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex-section">
            <Cousin name={'Rimi'} asset={asset}></Cousin>
            <Cousin name={'Simi'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;