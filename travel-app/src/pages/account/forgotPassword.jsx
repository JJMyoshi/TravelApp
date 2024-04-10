import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";
import whereLogo from '../../assets/WhereLogoGreen.png';

export default function forgotPassword() {

    return <div> 
            <div className = "forgotPassword-container">


                {/* Overlay */}
                <div className="overlay"></div>
                <div className="forgotPassword-field-text">
                    <h4>Forgot Password? </h4>
                </div>

                <div className="enterEmail-text">
                <p>
                    Enter the email address
                    <br />
                    associated with your account.
                </p>
                </div>

                <div className="emailLink-text">
                    <p>
                        We will email you a link to reset
                        <br />
                        your password.
                    </p>
                </div>
                <div className="forgotPassword-field-email">
                    <input type="text" className="forgotPassword-box-email" placeholder="Email" />
                </div>
    
                <div className="forgotPassword-field-button">
                    <button>
                    RESET PASSWORD
                    </button>
                </div>

            </div>
        </div>
    }