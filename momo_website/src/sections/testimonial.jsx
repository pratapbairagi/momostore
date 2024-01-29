import Heading1 from "../components/heading1";



const Testimonial_section = ({ clss = "", title = "", background = "" }) => {

    let ratingsOnPlates = [
        { image: "/image/paneer_momos-removebg-preview.png",
        type : "paneer", 
        ratings: [
            {info: "Our delivery facility makes every momo lover happy", user: "Rahul", rating: "4"},
            {info: "Our delivery facility makes every momo lover happy", user: "Rohan", rating: "3"},
            {info: "Our delivery facility makes every momo lover happy", user: "Rohit", rating: "5"},
        ] 
    },

        { image: "/image/veg_momos-removebg-preview.png", rating: "4", 
        type : "veg", 
        ratings : [
        {info: "Our delivery facility makes every momo lover happy", user: "Rohan", rating: "3"},
        {info: "Our delivery facility makes every momo lover happy", user: "Rohit", rating: "5"},
    ] 
},
        { image: "/image/chicken_momos-removebg-preview.png", 
        type : "chicken", 
        ratings : [
            {info: "Our delivery facility makes every momo lover happy", user: "Rohan", rating: "3"},
            {info: "Our delivery facility makes every momo lover happy", user: "Rohit", rating: "5"},
        ]  }
    ]

    return (
        <div className="container testimonial_container" style={{ backgroundColor: `${background}` }}>
            <Heading1 title="Customers" clss="heading1 heading" background={background} />

            {ratingsOnPlates.map((v, i) => {

                return <div key={i} className="card">
                    <div className="section1" style={{ order: `${i % 2 == 0 ? "1" : "2"}` }}>
                        <img src={v.image} alt={v.image} />
                        <h4 className="title">{v.type}</h4>
                        <div className="flex">
                       
                       {v.ratings.map((val,ind)=>{
                        return <div key={ind} className="box">
                            <p>
                                <i class="ri-double-quotes-l"></i>
                                {val.info}
                                <i class="ri-double-quotes-r"></i>
                            </p>
                            <span style={{ display: "flex" }}>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                            </span>
                            <span>{val.user}</span>
                        </div>
                    })}
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