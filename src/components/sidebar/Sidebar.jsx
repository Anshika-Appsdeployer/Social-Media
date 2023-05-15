import "./sidebar.css";
import { MdRssFeed } from 'react-icons/md'
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Feed
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Explore
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Chats
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Blogs
                    </span>
                </li>
    
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Explore
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Groups
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Memories
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Pages
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Saved
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Events
                    </span>
                </li>

            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                {Users.map(u => (
                    <CloseFriend key={u.id} user={u} />
                ))}
            </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
