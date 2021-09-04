import { useState } from 'react';
import style from './FormUpdatePost.module.scss';

const FormUpdatePost = ({
  id,
  titleForUpdate,
  textForUpdate,
  onCloseModal,
  onUpdate,
}) => {
  const [title, setTitle] = useState(titleForUpdate);
  const [text, setText] = useState(textForUpdate);

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    name === 'title' ? setTitle(value) : setText(value);
  };

  const handleSubmitUpdatePost = e => {
    e.preventDefault();

    if (title === titleForUpdate && text === textForUpdate) {
      alert('Not update title or text');
      return;
    }

    const updatePost = {
      title,
      body: text,
    };

    onUpdate(id, updatePost);
    setTitle('');
    setText('');
    onCloseModal();
  };

  return (
    <form className={style.form} onSubmit={handleSubmitUpdatePost}>
      <label className={style.label}>
        Title
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
      </label>
      <label className={style.label}>
        Text
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleInputChange}
        />
      </label>
      <div className={style.divButton}>
        <button className={style.button} onClick={onCloseModal} type="button">
          Cancel
        </button>
        <button className={style.button} type="submit">
          Update
        </button>
      </div>
    </form>
  );
};

export default FormUpdatePost;
