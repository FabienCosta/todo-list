import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import TodoItems from "../TodoItems/TodoItems";
import "./TodoList.scss";

const TodoList = () => {
  return (
    <div className="todo">
      <Header />
      <Form />
      <TodoItems />
      <Filter />
    </div>
  );
};

export default TodoList;
