import Button from "../components/button";
import Heading1 from "../components/heading1";


const Contact = ({ clss = "", title = "", background = "" }) => {
    return (
        <div className="container contact_container" style={{backgroundColor:`${background}`}}>
            <Heading1 title="Contact" clss="heading1 heading" background={background}/>
        
            <div className="grid">
                <div className="section1">
                    <h6>Contact Info</h6>
                    <table>
                       <tbody>
                        <tr>
                            <td>Email : </td>
                            <td>pratapbairagi4cgshop@gmail.com</td>
                        </tr>
                        <tr>
                        <td>Phone No. </td>
                            <td>+91 8287889123</td>
                        </tr>
                        <tr>
                            <td>Whatsapp : </td>
                            <td>+91 8287889123</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>Tughlakabad, Kalkaji, South Delhi</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section2">
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