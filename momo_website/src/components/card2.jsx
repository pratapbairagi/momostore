

const Card2 = ({details, buyBtnName, cartBtn, index=0}) => {
    return (
        <div className="card card1 card2">
                    <div className="card_section1" style={{order:`${index % 2 == 0 ? "1": "2"}`}}>
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
                        <img src="/image/momos1-removebg-preview.png" alt="/image/momos1-removebg-preview.png" />
                    </div>
        </div>
    )
};

export default Card2;