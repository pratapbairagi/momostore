

const Card1 = ({ details, buyBtnName, cartBtn, index = 0 }) => {
    return (
        <div className="flex" style={{ flexDirection: "column", padding: "0" }}>
            <div className="flex" style={{ flexDirection: "column" }}>
                {/* <div className="scroll_dots flex" style={{ padding: "0 1rem", gap: "1rem" }}>
                    <span style={{ width: "2rem", height: "1rem", backgroundColor: "#C82880", border: "2px solid white", boxShadow: " 0 0 0 1px #C82880", fontSize:"8px", textAlign:"center", color:"var(--bright-color-2)" }}>
                        Half
                    </span>
                    <span style={{ width: "2rem", height: "1rem", lineHeight:"1rem", backgroundColor: "#C82880" , fontSize:"8px", textAlign:"center", color:"var(--bright-color-2)", fontWeight:"600" }}>Full</span>
                </div> */}

                <div className="flex row"  >
                    {details.map((v, i) => {
                        return <div className="card card1">
                            <div className="card_section1">
                                <img src="/image/chicken1.png" alt="chicken1" />
                                <div className="buttons_section">
                                    <button>{buyBtnName}</button>
                                    <button> {cartBtn} </button>
                                </div>
                            </div>
                            <div className="card_section2">
                                <h5 className="title">{v?.type}</h5>
                                <ul className="list">
                                    {v?.list.map((val, ind) => {
                                        return <li key={ind}>{val}</li>
                                    })}

                                </ul>
                                <div className="price"> <span>{v?.price}</span> </div>
                                <img src="/image/momos1-removebg-preview.png" alt="/image/momos1-removebg-preview.png" />
                            </div>
                        </div>
                    })}
                </div>
                <div className="scroll_btns" style={{ justifyContent:"center"}}>
                    <button><i class="ri-arrow-left-s-line"></i></button>
                    <div className="scroll_dots flex" style={{ padding: "0 1rem", gap: "1rem", alignItems:"center" }}>
                    <span style={{ width: "2rem", height: "1rem", alignItems:"center", display:"flex", justifyContent:"center", backgroundColor: "#C82880", border: "2px solid white", boxShadow: " 0 0 0 1px #C82880", fontSize:"8px", textAlign:"center", color:"var(--bright-color-2)", fontWeight:"600" }}>
                        Half
                    </span>
                    <span style={{ width: "2rem", height: "1rem", alignItems:"center", display:"flex", justifyContent:"center", backgroundColor: "#C82880" , fontSize:"8px", textAlign:"center", color:"var(--bright-color-2)", fontWeight:"600" }}>Full</span>
                </div>
                    <button><i class="ri-arrow-right-s-line"></i></button>
                </div>
            </div>


            <div className="flex" style={{ flexDirection: "column" }}>
                {/* <div className="scroll_dots flex" style={{ padding: "0 1rem", gap: "1rem" }}>
                    <span style={{ width: "1rem", height: "1rem", backgroundColor: "#C82880", border: "2px solid white", boxShadow: " 0 0 0 1px #C82880" }}></span>
                    <span style={{ width: "1rem", height: "1rem", backgroundColor: "#C82880" }}></span>
                </div> */}

                <div className="flex row" >
                    {details.map((v, i) => {
                        return <div className="card card1">
                            <div className="card_section1">
                                <img src="/image/chicken1.png" alt="chicken1" />
                                <div className="buttons_section">
                                    <button>{buyBtnName}</button>
                                    <button> {cartBtn} </button>
                                </div>
                            </div>
                            <div className="card_section2">
                                <h5 className="title">{v?.type}</h5>
                                <ul className="list">
                                    {v?.list.map((val, ind) => {
                                        return <li key={ind}>{val}</li>
                                    })}

                                </ul>
                                <div className="price"> <span>{v?.price}</span> </div>
                                <img src="/image/momos1-removebg-preview.png" alt="/image/momos1-removebg-preview.png" />
                            </div>
                        </div>
                    })}
                </div>
                <div className="scroll_btns" style={{ justifyContent:"center"}}>
                    <button><i class="ri-arrow-left-s-line"></i></button>
                    <div className="scroll_dots flex" style={{ padding: "0 1rem", gap: "1rem", alignItems:"center" }}>
                    <span style={{ width: "2rem", height: "1rem", alignItems:"center", display:"flex", justifyContent:"center", backgroundColor: "#C82880", border: "2px solid white", boxShadow: " 0 0 0 1px #C82880", fontSize:"8px", textAlign:"center", color:"var(--bright-color-2)", fontWeight:"600" }}>
                        Half
                    </span>
                    <span style={{ width: "2rem", height: "1rem", lineHeight:"1rem", backgroundColor: "#C82880" , fontSize:"8px", textAlign:"center", color:"var(--bright-color-2)", fontWeight:"600" }}>Full</span>
                </div>
                    <button><i class="ri-arrow-right-s-line"></i></button>
                </div>
            </div>


        </div>
    )
};

export default Card1;