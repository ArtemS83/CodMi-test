import PostItem from '../PostItem';
import style from './Posts.module.scss';

const Posts = ({ posts, onDelete }) => {
  return (
    <ul className={style.list}>
      {posts.map(({ id, title, body }) => (
        <PostItem
          key={id}
          id={id}
          title={title}
          body={body}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default Posts;
