import Item from "../Item/Item";
import "./TodoItems.scss";

const Items = () => {
  return (
    <div className="items">
      <h1>Items</h1>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Items;
