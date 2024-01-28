

const Heading1 = ({clss="", title="", background=""}) => {
    return (
        <h2 className={clss} >
            <span style={{backgroundColor:`${background == "#F5F7F9" ? "hsl(0, 0%, 100%)" : "#F5F7F9"}`}}></span> 
            <span>{title}</span> 
            <span style={{backgroundColor:`${background == "#F5F7F9" ? "hsl(0, 0%, 100%)" : "#F5F7F9"}`}}></span>
        </h2>
    )
}

export default Heading1;