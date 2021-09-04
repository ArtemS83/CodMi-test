import { useState } from 'react';
import style from './PostItem.module.scss';
import Modal from 'components/Modal';
import FormUpdatePost from 'components/FormUpdatePost';

const PostItem = ({ title, body, id, onDelete, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  //  key={id}
  return (
    <>
      <li className={style.item}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.div}>
          <p className={style.text}>{body}</p>
          <button className={style.button} onClick={toggleModal} type="button">
            Update
          </button>
          <button
            className={style.button}
            onClick={() => onDelete(id)}
            type="button"
          >
            X
          </button>
        </div>
      </li>
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <FormUpdatePost
            id={id}
            titleForUpdate={title}
            textForUpdate={body}
            onCloseModal={toggleModal}
            onUpdate={onUpdate}
          />
        </Modal>
      )}
    </>
  );
};

export default PostItem;
