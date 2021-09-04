import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import style from './FormAddPost.module.scss';

const FormAddPost = ({ onSubmitAddForm }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    name === 'title' ? setTitle(value) : setText(value);
  };

  const handleAddPost = e => {
    e.preventDefault();
    if (!title || !text) {
      alert(`Title or text not entered `);
      return;
    }

    const newPost = {
      id: uuid(),
      title,
      body: text,
    };
    onSubmitAddForm(newPost);
    setTitle('');
    setText('');
  };

  return (
    <form className={style.form} onSubmit={handleAddPost}>
      <label className={style.label}>
        Title
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter title"
          onChange={handleInputChange}
        />
      </label>
      <label className={style.label}>
        Text
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Enter text"
          onChange={handleInputChange}
        />
      </label>
      <button className={style.button} type="submit">
        Add Post
      </button>
    </form>
  );
};

export default FormAddPost;
