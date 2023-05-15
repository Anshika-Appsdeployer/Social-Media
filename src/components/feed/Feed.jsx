import './feed.css'
import Shared from '../shared/Shared'
import Post from '../post/Post'
import { Posts } from '../../dummyData'

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Shared />
        {Posts.map(p => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Feed