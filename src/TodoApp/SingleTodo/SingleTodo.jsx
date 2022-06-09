import { useState } from 'react';
import Icon from '../UI/Icon';

function SingleTodo({ id, title, isDone: isDoneProp, onDelete, onToggle, onEdit }) {
  const [isEditOn, setIsEditOn] = useState(false);

  function singleTodoEdit() {
    setIsEditOn((prevIsEditOn) => !prevIsEditOn);

    // onEdit()
  }

  return (
    <li className={isDoneProp === true ? 'item line-through' : 'item'}>
      <Icon
        onClick={() => onToggle(id)}
        icon={isDoneProp === true ? 'fa-check-circle' : 'fa-circle-thin'}
      />
      {/* rodom jei isEditOn yra false */}
      <span className='text'>{title}</span>
      {/* rodom jei isEditOn yra true */}
      <input type='text' />
      <Icon onClick={singleTodoEdit} icon='fa-pencil' />
      <Icon onClick={() => onDelete(id)} icon='fa-trash' />
    </li>
  );
}

export default SingleTodo;
