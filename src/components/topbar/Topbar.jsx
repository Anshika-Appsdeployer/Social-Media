import "./topbar.css";
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'

const Topbar = () => {
  return (
  <>
  <div className="topbarContainer">
    <div className="topbarLeft">
        <span className="logo">
           WassUp 
        </span>
    </div>
    <div className="topbarCenter">
        <div className="searchbar">
            <AiOutlineSearch className="searchIcon" />
            <input placeholder="Search for Accounts" className="searchInput" />
        </div>
    </div>
    <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">Home Page</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <BsFillPersonFill />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <BsFillChatDotsFill />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <MdNotificationsNone />
                <span className="topbarIconBadge">1</span>
            </div>
            <img src="/assets/people/1.jpg" alt="" className="topbarImg" />
        </div>
    </div>
    </div>
  </>
  );
};

export default Topbar;
