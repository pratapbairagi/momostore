

const Button = ({clss="", sty="", fun=null, btnName="", type="", id_=""}) => {
    return (
        <button className={clss} style={sty} onClick={fun} type={type} id={id_}>{btnName}</button>
    )
};

export default Button;