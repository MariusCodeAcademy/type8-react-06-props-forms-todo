import Icon from '../UI/Icon';
// paduoti handleResetTodos i header
// pasiimti handleResetTodos ir reset mygtuko paspaudimu ivygdyti
// header.jsx ivygdyti handleResetTodos()
function Header(props) {
  // computed properties
  const totalTodos = props.todos.length;
  // const doneTodos = mainTodoArray.filter((tObj) => tObj.isDone === true).length;

  // level2
  const doneTodos = props.todos.filter(({ isDone }) => isDone).length;

  return (
    <header>
      <div className='clear'>
        <Icon onClick={props.onResetTodos} icon={'fa-refresh'} />
      </div>
      <h3 className='done-todo-count'>
        {doneTodos} / {totalTodos}
      </h3>
      <p id='date' className='date'>
        {new Date().toLocaleString()}
      </p>
      <img className='img-fluid cover-img' src='img/gold.jpg' alt='Cover' />
    </header>
  );
}

export default Header;
