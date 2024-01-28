


const Heading2 = ({styl, title, css, background=""}) => {
    return (
        <h2 className="heading2 heading" style={{ backgroundColor: `${background == "#F5F7F9" ? "hsl(0, 0%, 100%)" : "#F5F7F9"}`, marginTop: "0" }}>
            <span style={{backgroundColor:`${background == "#F5F7F9" ? "hsl(0, 0%, 100%)" : "#F5F7F9"}`}}></span> <span>{title}</span> <span style={{backgroundColor:`${background == "#F5F7F9" ? "hsl(0, 0%, 100%)" : "#F5F7F9"}`}}></span>
        </h2>
    )
}

export default Heading2;