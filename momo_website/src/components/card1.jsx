

const Card1 = ({details, buyBtnName, cartBtn, index=0}) => {
    return(
        <div className="card card1">
                    <div className="card_section1" style={{order:`${index % 2 == 0 ? "1": "2"}`}}>
                        <img src="/image/chicken1.png" alt="chicken1" />
                        <div className="buttons_section">
                            <button>{buyBtnName}</button>
                            <button> {cartBtn} </button>
                        </div>
                    </div>
                    <div className="card_section2" style={{order:`${index % 2 != 0 ? "1": "2"}`}}>
                        <h5 className="title">{details?.title}</h5>
                        <ul className="list">
                           {details?.list.map((v,i)=>{
                              return  <li key={i}>{v}</li>
                           })  }
                           
                        </ul>
                        <div className="price"> <span>{details?.price}</span> </div>
                        <img src="/image/momos1-removebg-preview.png" alt="/image/momos1-removebg-preview.png" />
                    </div>
                </div>
    )
};

export default Card1;