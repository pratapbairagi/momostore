import Heading1 from "../components/heading1";


const ChatneyTypes = ({ clss = "", title = "", background = "" }) => {
    let chatney = [
        { image: "/image/chatney1.png", info: "Our delivery facility makes every momo lover happy" },
        { image: "/image/chatney2.png", info: "Our delivery facility makes every momo lover happy" },
        { image: "/image/chateny3.png", info: "Oue delivery facility makes every momo lover happy" }
    ]
    return (
        <div className="container chatneyTypes_container" style={{ backgroundColor: `${background}` }}>
            <img src="/image/chatneys-removebg-preview.png" alt="chatneys-removebg-preview.png" />
            <img src="/image/chatneys-removebg-preview.png" alt="chatneys-removebg-preview.png" />
            <Heading1 title="Chatneys" clss="heading1 heading" background="hsl(0, 0%, 100%)" />

            {chatney.map((v, i) => {

                return <div key={i} className="grid">
                    <div className="section1" style={{ order: `${i % 2 == 0 ? "1" : "2"}` }}>
                        <div className="box">
                            <img src={v.image} alt={v.image} style={{ transform: `${i % 2 == 0 ? "translate(18%, -3%) rotateZ(-25deg)" : "translate(-18%, 3%) rotateZ(25deg)"}` }} />
                        </div>
                    </div>
                    <div className="section2" style={{ order: `${i % 2 == 0 ? "2" : "1"}` }}>
                        <p>{v.info}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ChatneyTypes;