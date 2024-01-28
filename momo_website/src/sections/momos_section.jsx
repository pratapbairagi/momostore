import Card1 from "../components/card1";
import Heading2 from "../components/heading2";



const Momos_section = ({title, card, background, heading=""}) => {
    const cards1 = [
        {plate:"half", price:"40", type:"steam"},
        {plate:"full", price:"70", type:"fried"}
    ]

    return (
        <div className="container momos_container" style={{backgroundColor:`${background}`, padding:"3rem 0"}}>
            {/* <Heading2 title={title} background={background} /> */}
            {heading}
            <div className="grid">
                {/* {cards1.map((v,i)=>{
                   return <Card1 key={i} index={i} buyBtnName="buy" cartBtn={<i class="ri-shopping-cart-line"></i>} details={{title:v.title, list:["11 pices momos", "3 types of chatney", "meyonis"], price:v.price, plate:v.plate}}/>
                })} */}
                {card}
            </div>
        </div>
    )
}

export default Momos_section;