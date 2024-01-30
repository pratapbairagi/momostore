import Button from "../components/button";
import Heading1 from "../components/heading1";


const Contact = ({ clss = "", title = "", background = "" }) => {
    return (
        <div className="container contact_container" style={{backgroundColor:`${background}`}}>
            <Heading1 title="Contact" clss="heading1 heading" background={background}/>
        
            <div className="grid">
                <div className="section1">
                    <img src="/image/contact-removebg-preview.png" alt="contact-removebg-preview" />
                    <h6>Contact Info</h6>
                    <div className="flex">
                        <div className="row">
                            <span>Email : </span>
                            <span>pratapbairagi4cgshop@gmail.com</span>
                        </div>
                        <div className="row">
                        <span>Phone No. </span>
                            <span>+91 8287889123</span>
                        </div>
                        <div className="row">
                            <span>Whatsapp : </span>
                            <span>+91 8287889123</span>
                        </div>
                        <div className="row">
                            <span>Address : </span>
                            <span>Tughlakabad, Kalkaji, South Delhi</span>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <img src="/image/message-removebg-preview.png" alt="message-removebg-preview" />
                    <h6>Message Us</h6>
                    <div className="flex">
                        <fieldset>
                            <label>Name</label>
                            <input type="text" name="" id="" />
                        </fieldset>

                        <fieldset>
                            <label>Subject</label>
                            <input type="text" name="" id="" />
                        </fieldset>

                        <fieldset>
                            <label>Number</label>
                            <input type="text" name="" id="" />
                        </fieldset>

                        <fieldset>
                            <label>Email</label>
                            <input type="text" name="" id="" />
                        </fieldset>

                        <fieldset>
                            <label>Message</label>
                            <input type="text" name="" id="" />
                        </fieldset>

                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;