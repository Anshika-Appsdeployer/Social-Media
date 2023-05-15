import { useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import "./post.css";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    // const [love, setLove] = useState(post.love);
    // const [isLoved, setIsLoved] = useState(false);

    // const loveHandler = () => {
    //     setLove(isLoved ? love - 1 : love + 1)
    //     setIsLoved(!isLoved)
    // }

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
                alt=""
              />
              <span className="postUsername">
                {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <BiDotsVerticalRounded />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
              
              <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
              <span className="postLikeCounter">
                {like} people like this!
              </span>
              {/* <span className="postLikeCounter">
                {like} people love this!
              </span>
              <img className="likeIcon" src="assets/dislike.png" onClick={likeHandler} alt="" /> */}
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} Comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
