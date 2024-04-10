import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";

export default function changePassword() {

    return <div> 
        <div className = "changePassword-container">

            <div className="change-password-header">
                <h4>
                    Change Password
                </h4>
            </div>

            <div className="change-password-instructions">
                <p>
                    To change your password, enter your current password
                    <br />
                    and your new password below.
                </p>
            </div>

            <div className="current-password-box-email">
                            <input type="password" className="current-password-box-password1" placeholder="Current Password" />
            </div>
            <div className="changePassword-box-email">
                <input type="password" className="changePassword-box-password1" placeholder="New Password" />
            </div>
  
            <div class="changePassword-field-password1">
                <input type="password" class="changePassword-box-password1" placeholder="Confirm Password" />
            </div>

            <div className="changePassword-field-sendLink">
                <button>
                CHANGE PASSWORD
                </button>
            </div>
        </div>
    </div>
    }