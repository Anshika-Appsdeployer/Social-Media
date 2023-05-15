import './rightbar.css'
import { Users } from '../../dummyData'
import Online from "../online/Online"

const Rightbar = () => {
  return (
    <>
    <div className="rightbar">
    <div className="rightbarWrapper">
      <div className="birthdayContainer">
        <img src="/assets/birthday.png" alt="" className="birthdayImg" />
        <span className="birthdayText">Post something for <b>3 friend's Birthday</b> today!</span>
      </div>
      <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map(u => (
          <Online key={u.id} user={u}/>
        ))}
      </ul>
      </div>
    </div>
    </>
  )
}

export default Rightbar