import React from "react";
import "./Sidebar.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import accountCircle from "../../Assets/account_circle.png";
import accountTree from "../../Assets/account_tree.png";
import automation from "../../Assets/automation.png";
import manufacturing from "../../Assets/manufacturing.png";
import history from "../../Assets/history.png";
import search from "../../Assets/content_paste_search.png";
import topic from "../../Assets/topic.png";
import pager from "../../Assets/two_pager.png";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="TopBox">
        <DoubleArrowIcon className="doubleArrowIcon" />
      </div>
      <div className="BottomBox">
        <div className="icons">
          {" "}
          <div className="imageHolder">
            <img src={automation} alt="profilePic" />
          </div>
          <div className="imageHolder">
            <img src={search} alt="profilePic" />
          </div>
          <div className="imageHolder">
            <img src={accountTree} alt="profilePic" />
          </div>
          <div className="imageHolder">
            <img src={topic} alt="profilePic" />
          </div>
          <div className="imageHolder">
            <img src={history} alt="profilePic" />
          </div>
          <div className="imageHolder">
            <img src={pager} alt="profilePic" />
          </div>
        </div>
        <div className="accountAndProfileIcon">
          <div className="imageHolder">
            <img src={manufacturing} alt="profilePic" />
          </div>
          <div className="imageHolder">
            <img src={accountCircle} alt="profilePic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
