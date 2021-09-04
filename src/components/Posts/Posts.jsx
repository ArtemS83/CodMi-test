import PostItem from '../PostItem';
import style from './Posts.module.scss';

const Posts = ({ posts, onDelete, onUpdate }) => {
  return (
    <ul className={style.list}>
      {posts.map(({ id, title, body }) => (
        <PostItem
          key={id}
          id={id}
          title={title}
          body={body}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default Posts;
