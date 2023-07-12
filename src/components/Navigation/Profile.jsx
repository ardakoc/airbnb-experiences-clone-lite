import { useState } from "react";
import onClickOutside from "react-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

function Profile() {
  const [isClicked, setIsClicked] = useState(false)
  
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  Profile.handleClickOutside = () => {
    setIsClicked(false)
  }

  return (
    <>
      <div className="nav-profile">
        <div className={`nav-profile-main ${isClicked ? "nav-profile-active" : ""}`} onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#515151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <FontAwesomeIcon icon={faCircleUser} style={{color: "#717171", height: "28px" }} />
        </div>
        {isClicked ? <div className="nav-profile-menu">
          <ProfileMenu />
        </div> : null}
      </div>
    </>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Profile.handleClickOutside,
};

export default onClickOutside(Profile, clickOutsideConfig)