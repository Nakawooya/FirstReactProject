// { items: [], heading: string }
//import { MouseEvent } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // let selectedIndex = 0;  -1 means no item is selected , 0 the first item is selected
  // event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  //hook ;it helps to tap in build features of react
  const [selectedIndex, setSelectedindex] = useState(-1); // This returns an array

  // it shows that the variable will have data that changes over time
  //React.createElement('h1',List)
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item Found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedindex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
