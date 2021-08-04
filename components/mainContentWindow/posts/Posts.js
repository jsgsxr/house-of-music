import PostsCard from './PostsCard';
import styles from '../../../styles/posts.module.css'

const Posts = props => (
  <div className={styles.postMainDiv}>
    {props.posts && props.posts.map(button => (
      <PostsCard
        ID={button.id}
        key={button.path}
        path={button.path}
        postAuthor={button.postAuthor}
        profileImg={button.profileImg}
        postText={button.postText}
        postContent={button.postContent}
        reactionsTotal={button.reactionsTotal}
        userLikes={button.userLikes}
        commentCount={button.commentCount}
        commentData={button.commentData}
        shareCount={button.shareCount}
        sharable={button.sharable}
        session={props.session}
      />
    ))}
  </div>
)

export default Posts;