import './shared.css'
import { BiCommentDetail } from 'react-icons/bi'
import { AiFillLike } from 'react-icons/ai'
import { AiFillDislike } from 'react-icons/ai'
import { BsFillBookmarkFill } from 'react-icons/bs'

const Shared = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/people/1.jpg" alt="" className="shareProfileImg" />
                <input placeholder="What's going aroung?!" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <BiCommentDetail className="shareIcon" />
                        <span className="shareOptionText">
                            Comment
                        </span>
                    </div>
                    <div className="shareOption">
                        <AiFillLike className="shareIcon" />
                        <span className="shareOptionText">
                            Like
                        </span>
                    </div>
                    <div className="shareOption">
                        <AiFillDislike className="shareIcon" />
                        <span className="shareOptionText">
                            Dislike
                        </span>
                    </div>
                    <div className="shareOption">
                        <BsFillBookmarkFill className="shareIcon" />
                        <span className="shareOptionText">
                            Save
                        </span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Shared