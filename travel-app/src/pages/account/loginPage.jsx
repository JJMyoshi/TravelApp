import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";
import whereLogo from '../../assets/WhereLogoGreen.png';


export default function loginPage() {
    return <div>
        <div className = "login-container">

        <div className="login-field-logo">
            <img src={whereLogo} alt="whereLogo" className="whereLogo"
            style={{ width: '100px', height: 'auto' }}
            />
        </div>


        <div className="login-field-email">
            <input type="text" className="emailField" placeholder="Email" />
        </div>

        <div className="login-field-password">
            <input type="password" className="passwordField" placeholder="Password" />
        </div>

        <div className="login-field-forgotPassword">
            <a href="/forgot-password" className="forgot-password-link">
                Forgot Password?
            </a>
        </div>

        <div className="login-field-loginbutton">
            <button className= "login-button">
            LOGIN
            </button>
        </div>

        <div className="login-field-signUp">
           <div className = "sign-up-text">
                Don't have an account?
           </div>
            <a href="/sign-up" className="sign-up-link">
                Sign Up
            </a>
        </div>

    </div>

</div>
}