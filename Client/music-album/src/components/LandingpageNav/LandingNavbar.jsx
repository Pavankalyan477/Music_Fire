import  "./LandingNavbar.css"
import logo from "../logos/logo.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const LandingNavbar=()=>{


    return<>
        <header className="header">
            <div className="navbar">
                <div className="logo">
                    <img className="spotify_logo" src={logo} alt="logo" />
                </div>
                <div className="options">
                    <a href="#">Premium</a>
                    <a href="#">Support</a>
                    <a href="#">Download</a>
                    |
                    <div>
                       <a href="#">
                        {/* <i className="icon">{AccountCircleIcon}</i> */}
                        Profile
                        </a>
                    </div>
                </div>
            </div>
        </header>
    </>
}