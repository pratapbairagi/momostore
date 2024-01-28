import Heading1 from "../components/heading1";


const Special = ({heading}) => {
    return (
        <div className="container special_container">
            {/* <Heading1 title={headingTitle} clss={clss}/>             */}
            {heading}
            <div className="grid">
                <div className="content">
                    <div className="card">
                        <div className="box"></div>
                        <img src="/image/taste.png" alt="/image/taste.png" />
                    </div>
                    <div className="detail">
                        <p className="description">Oue delivery facility makes every momo lover happy</p>
                        <img src="/image/big_star-removebg-preview.png" alt="/image/big_star-removebg-preview.png" />
                    </div>
                </div>

                <div className="content">
                    <h4>Healty Sauces</h4>
                    <img src="/image/sauce_material.png" alt="" />
                </div>

                <div className="content">
                    <div className="card">
                        <div className="box"></div>
                        <img src="/image/delivery2.png" alt="" />
                    </div>
                    <div className="detail" >
                        <p className="description">Oue delivery facility makes every momo lover happy</p>
                        <img src="/image/delivery-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Special;