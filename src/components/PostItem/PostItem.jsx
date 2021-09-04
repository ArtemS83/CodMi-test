import style from './PostItem.module.scss';

const PostItem = ({ title, body, id, onDelete }) => {
  return (
    <li className={style.item}>
      <div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{body}</p>
      </div>
      <button
        className={style.button}
        id={id}
        onClick={() => onDelete(id)}
        type="button"
      >
        X
      </button>
    </li>
  );
};

export default PostItem;
