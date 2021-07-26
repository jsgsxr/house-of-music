import PostsCard from './PostsCard';
import styles from '../../../styles/posts.module.css'

const Posts = props => (
  <div className={styles.postDiv}>
    {props.posts.map(button => (
      <PostsCard
        key={button.path}
        path={button.path}
        label={button.label}
        profileImg={button.profileImg}
        postContent={button.postContent}
      />
    ))}
  </div>
)

export default Posts;