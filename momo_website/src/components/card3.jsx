

const Card3 = ({ details, buyBtnName, cartBtn }) => {
    return (
        <div className="flex" style={{flexDirection:"column", padding:"0"}}>
        <div className="flex" style={{flexDirection:"column"}}>
            <div className="scroll_dots flex" style={{ padding:"0 1rem", gap:"1rem"}}>
                <span style={{width:"1rem", height:"1rem", backgroundColor:"#C82880", border:"2px solid white", boxShadow:" 0 0 0 1px #C82880"}}></span>
                <span style={{width:"1rem", height:"1rem", backgroundColor:"#C82880"}}></span>
            </div>

        <div className="flex" style={{ flexDirection: "row", overflowX: "auto", gap: "20%", padding:"1rem 0.3rem" }}>
            {details.map((v, i) => {
                return <div key={i} className="card card2 card3" style={{ minWidth: "100%", borderRadius:"90px", borderTopLeftRadius:"0", borderBottomRightRadius:"0" }}>
                    <div className="card_section1" style={{}}>
                        <img src="/image/momos2.png" alt="chicken1" />
                    </div>
                    <div className="card_section2" style={{}}>
                        <h5 className="title">{v?.type}</h5>
                        <div className="price"> <span>{v?.price}</span> </div>
                        <ul className="list">
                            {v?.list?.map((val, ind) => {
                                return <li key={ind}>{val}</li>
                            })}

                        </ul>
                        <div className="buttons_section">
                            <button>{buyBtnName}</button>
                            <button> {cartBtn} </button>
                        </div>
                        {/* <img src="/image/momos1-removebg-preview.png" alt="/image/momos1-removebg-preview.png" /> */}
                    </div>
                </div>
            })}
        </div>
            <div className="scroll_btns">
                <button><i class="ri-arrow-left-s-line"></i></button>
                <button><i class="ri-arrow-right-s-line"></i></button>
            </div>
        </div>

        <div className="flex" style={{flexDirection:"column"}}>
            <div className="scroll_dots flex" style={{ padding:"0 1rem", gap:"1rem"}}>
                <span style={{width:"1rem", height:"1rem", backgroundColor:"#C82880", border:"2px solid white", boxShadow:" 0 0 0 1px #C82880"}}></span>
                <span style={{width:"1rem", height:"1rem", backgroundColor:"#C82880"}}></span>
            </div>

        <div className="flex" style={{ flexDirection: "row", overflowX: "auto", gap: "20%", padding:"1rem 0.3rem" }}>
            {details.map((v, i) => {
                // return <div key={i} className="card card2 card3" style={{ minWidth: "100%" }}>
                return <div key={i} className="card card2 card3" style={{ minWidth: "100%", borderRadius:"90px", borderTopLeftRadius:"0", borderBottomRightRadius:"0" }}>
                   
                   <div className="card_section1" style={{}}>
                        <img src="/image/momos2.png" alt="chicken1" />
                    </div>
                    <div className="card_section2" style={{}}>
                        <h5 className="title">{v?.type}</h5>
                        <div className="price"> <span>{v?.price}</span> </div>
                        <ul className="list">
                            {v?.list?.map((val, ind) => {
                                return <li key={ind}>{val}</li>
                            })}

                        </ul>
                        <div className="buttons_section">
                            <button>{buyBtnName}</button>
                            <button> {cartBtn} </button>
                        </div>
                        {/* <img src="/image/momos1-removebg-preview.png" alt="/image/momos1-removebg-preview.png" /> */}
                    </div>
                </div>
            })}
        </div>
            <div className="scroll_btns">
                <button><i class="ri-arrow-left-s-line"></i></button>
                <button><i class="ri-arrow-right-s-line"></i></button>
            </div>
        </div>

        </div>
    )
};

export default Card3;