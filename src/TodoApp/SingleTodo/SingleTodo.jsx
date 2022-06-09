import { useState } from 'react';
import Icon from '../UI/Icon';

function SingleTodo({ id, title, isDone: isDoneProp, onDelete, onToggle, onEdit }) {
  const [isEditOn, setIsEditOn] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  function singleTodoEdit() {
    // jei isEditOn === false
    if (isEditOn === false) {
      // nustatom isEditOn => true
      setIsEditOn(true);
      return;
    }

    // jei isEditOn === true
    if (isEditOn === true) {
      // nustatom isEditOn => false
      setIsEditOn(false);
      onEdit(id, editedTitle);
    }
  }

  return (
    <li className={isDoneProp === true ? 'item line-through' : 'item'}>
      <Icon
        onClick={() => onToggle(id)}
        icon={isDoneProp === true ? 'fa-check-circle' : 'fa-circle-thin'}
      />
      {/* rodom jei isEditOn yra false && */}
      {!isEditOn && <span className='text'>{title}</span>}
      {/* rodom jei isEditOn yra true */}
      {isEditOn && (
        <input
          type='text'
          onChange={(event) => setEditedTitle(event.target.value)}
          value={editedTitle}
        />
      )}

      <Icon onClick={singleTodoEdit} icon='fa-pencil' />
      <Icon onClick={() => onDelete(id)} icon='fa-trash' />
    </li>
  );
}

export default SingleTodo;
