import PostsCard from './PostsCard';
import styles from '../../../styles/posts.module.css'

const Posts = props => (
  <div className={styles.postMainDiv}>
    {props.posts.map(button => (
      <PostsCard
        key={button.path}
        path={button.path}
        postAuthor={button.postAuthor}
        profileImg={button.profileImg}
        postText={button.postText}
        postContent={button.postContent}
        reactionsTotal={button.reactionsTotal}
        isliked={button.isliked}
        commentCount={button.commentCount}
        shareCount={button.shareCount}
        sharable={button.sharable}
      />
    ))}
  </div>
)

export default Posts;