

const Card3 = ({details, buyBtnName, cartBtn, index=0}) => {
    return (
        <div className="card card2 card3" style={{borderBottomLeftRadius:`${index % 2 == 0 ? "400px": "0"}`, borderBottomRightRadius:`${index % 2 == 0 ? "0": "400px"}`}}>
                    <div className="card_section1" style={{order:`${index % 2 == 0 ? "1": "2"}`, transform:`${index % 2 == 0 ? "translateX(-3%)" : "translateX(3%)"}`}}>
                        <img src="/image/momos2.png" alt="chicken1" /> 
                    </div>
                    <div className="card_section2" style={{order:`${index % 2 != 0 ? "1": "2"}`}}>
                        <h5 className="title">{details?.title}</h5>
                            <div className="price"> <span>{details?.price}</span> </div>
                        <ul className="list">
                           {details?.list.map((v,i)=>{
                              return  <li key={i}>{v}</li>
                           })  }
                           
                        </ul>
                        <div className="buttons_section">
                            <button>{buyBtnName}</button>
                            <button> {cartBtn} </button>
                        </div>
                        {/* <img src="/image/momos1-removebg-preview.png" alt="/image/momos1-removebg-preview.png" /> */}
                    </div>
        </div>
    )
};

export default Card3;