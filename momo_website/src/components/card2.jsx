

const Card2 = ({ details, buyBtnName, cartBtn, index = 0 }) => {
    return (
        <div className="flex dualLine_card_container" style={{ flexDirection: "column", padding: "0" }}>
            <div className="flex card_container" style={{ flexDirection: "column" }}>
                {/* <div className="scroll_dots flex" style={{ padding: "0 1rem", gap: "1rem" }}>
                    <span style={{ width: "1rem", height: "1rem", backgroundColor: "#C82880", border: "2px solid white", boxShadow: " 0 0 0 1px #C82880" }}></span>
                    <span style={{ width: "1rem", height: "1rem", backgroundColor: "#C82880" }}></span>
                </div> */}

                <div className="flex row">
                    {details.map((v, i) => {
                        return <div key={i} className="card card2">
                            <div className="card_section1" style={{ order: `${index % 2 == 0 ? "1" : "2"}` }}>
                                <img src="/image/momos2.png" alt="chicken1" />

                            </div>
                            <div className="card_section2" style={{ order: `${index % 2 != 0 ? "1" : "2"}` }}>
                                <h5 className="title">{v?.type}</h5>
                                <div className="price"> <span>{v?.price}</span> </div>
                                <ul className="list">
                                    {v?.list.map((val, ind) => {
                                        return <li key={ind}>{val}</li>
                                    })}

                                </ul>
                                <div className="buttons_section">
                                    <button>{buyBtnName}</button>
                                    <button> {cartBtn} </button>
                                </div>
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

            <div className="flex card_container" style={{ flexDirection: "column" }}>
                {/* <div className="scroll_dots flex" style={{ padding: "0 1rem", gap: "1rem" }}>
                    <span style={{ width: "1rem", height: "1rem", backgroundColor: "#C82880", border: "2px solid white", boxShadow: " 0 0 0 1px #C82880" }}></span>
                    <span style={{ width: "1rem", height: "1rem", backgroundColor: "#C82880" }}></span>
                </div> */}

                <div className="flex row">
                    {details.map((v, i) => {
                        return <div key={i} className="card card2">
                            <div className="card_section1" style={{ order: `${index % 2 == 0 ? "1" : "2"}` }}>
                                <img src="/image/momos2.png" alt="chicken1" />

                            </div>
                            <div className="card_section2" style={{ order: `${index % 2 != 0 ? "1" : "2"}` }}>
                                <h5 className="title">{v?.type}</h5>
                                <div className="price"> <span>{v?.price}</span> </div>
                                <ul className="list">
                                    {v?.list.map((val, ind) => {
                                        return <li key={ind}>{val}</li>
                                    })}

                                </ul>
                                <div className="buttons_section">
                                    <button>{buyBtnName}</button>
                                    <button> {cartBtn} </button>
                                </div>
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

        </div>
    )
};

export default Card2;