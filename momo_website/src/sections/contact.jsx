import Heading1 from "../components/heading1";



const Contact = ({ clss = "", title = "", background = "" }) => {
    return(
        <div className="container about_container" style={{backgroundColor:`${background}`}}>
            <Heading1 title="About Us" clss="heading1 heading" background={background}/>
        
            <h3 className="title">About Our Services</h3>
            <p className="description">We are new in market but the chef we have for momos is more than 10 years experience in resturants and hotels. We make sure that no momos lover will face any health issue due to unhygin issue or unhelathy products because on time of making momos we kwwp in mind our momo lover’s halth.</p>
            <span>Healty Life</span>

            <div className="grid">
                <div className="card">
                    <div className="flex">
                        <h5 className="subtitle">Momos Variety</h5>
                        <img src="/image/different-colored-momos-big-circle-plate-removebg-preview.png" alt="" />
                    </div>
                </div>

                <div className="card">
                    <div className="flex">
                        <h5 className="subtitle">Chatneys Variety</h5>
                        <img src="/image/chatney4.png" alt="" />
                    </div>
                </div>

                <div className="card">
                    <div className="flex">
                        <h5 className="subtitle">Price Benefit</h5>
                        <img src="/image/rupees.png" alt="" />
                    </div>
                </div>

                <div className="card">
                    <div className="flex">
                        <h5 className="subtitle">Healthy Cooking</h5>
                        <img src="/image/cook.png" alt="" />
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Contact;