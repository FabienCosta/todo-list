import "./Form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const CreateTodo = () => {
  return (
    <>
      <form className="form">
        <button className="form-btn" type="submit">
          <FontAwesomeIcon icon={faCircle} />
        </button>
        <input
          className="form-input"
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
    </>
  );
};

export default CreateTodo;
