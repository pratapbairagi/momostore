import Heading1 from "../components/heading1";



const Testimonial_section = ({ clss = "", title = "", background = "" }) => {

    let chatney = [
        { image: "/image/paneer_momos-removebg-preview.png", info: "Our delivery facility makes every momo lover happy", user: "Rohan", rating: "4" },
        { image: "/image/veg_momos-removebg-preview.png", info: "Our delivery facility makes every momo lover happy", user: "Roshan", rating: "5" },
        { image: "/image/chicken_momos-removebg-preview.png", info: "Oue delivery facility makes every momo lover happy", user: "Rahul", rating: "3" }
    ]

    return (
        <div className="container testimonial_container" style={{ backgroundColor: `${background}` }}>
            <Heading1 title="Customers" clss="heading1 heading" background={background} />

            {chatney.map((v, i) => {

                return <div key={i} className="card">
                    <div className="section1" style={{ order: `${i % 2 == 0 ? "1" : "2"}` }}>
                        <img src={v.image} alt={v.image} />
                        <h4 className="title">Paneer</h4>
                        <div className="box">
                            <p>
                                <i class="ri-double-quotes-l"></i>
                                {v.info}
                                <i class="ri-double-quotes-r"></i>
                            </p>
                            <span style={{ display: "flex" }}>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                            </span>
                            <span>{v.user}</span>
                        </div>
                        <div className="scroll_btns">
                            <button><i class="ri-arrow-left-s-line"></i></button>

                            <button><i class="ri-arrow-right-s-line"></i></button>
                        </div>
                    </div>

                </div>
            })}

        </div>
    )
}

export default Testimonial_section;