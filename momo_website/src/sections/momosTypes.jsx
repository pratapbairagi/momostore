import Heading1 from "../components/heading1";



const MomosTypes = ({clss="", title="", background=""}) => {
    let momos = [
        {image:"/image/veg.png", info :"Fresh vegitarian momos"},
        {image:"/image/paneer.png", info :"Our delivery facility makes every momo lover happy"},
        {image:"/image/chicken2.png", info :"Fresh chicken momos"}
    ]
    return(
        <div className="container momosTypes_container" style={{backgroundColor:`${background}`}}>
            <img src="/image/momos1-removebg-preview.png" alt="" />
            
            <Heading1 title="Momos" clss="heading1 heading" background="#F5F7F9" />

            {momos.map((v,i)=>{

           return <div key={i} className="grid">
                    <div className="section1" style={{order:`${i % 2 == 0 ? "1" : "2"}`}}>
                        <div className="box">
                            <img src={v.image} alt={v.image} style={{transform:`${i % 2 == 0 ? "translate(18%, -3%) rotateZ(-25deg)" : "translate(-18%, 3%) rotateZ(25deg)"}`}} />
                        </div>
                    </div>
                    <div className="section2" style={{order:`${i % 2 == 0 ? "2" : "1"}`}}>
                        <p>{v.info}</p>
                    </div>
            </div>
            })}
        </div>
    )
}

export default MomosTypes;