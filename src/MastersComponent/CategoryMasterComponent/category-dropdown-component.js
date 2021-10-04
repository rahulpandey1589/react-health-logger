import DropdownComponent from "../../SharedComponent/dropdown-component";
import { useEffect, useState } from "react";
import axios from "../../Services/axios";

const CategoryDropdownComponent = (props) => {
  const { onChange } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchDropdown();
  }, []);

  const fetchDropdown = () => {
    axios
    .get("/masters/category")
    .then((response) => {
      const categories = [];
      for (let index = 0; index < response.data.data.length; index++) {
        const element = response.data.data[index];
        categories.push({
          text: element.category_name,
          value: element._id,
        }); 
      }
      setItems(categories);
    });
  };

  const selectItemHandler = (data) => {
    onChange(data);
  };

  return (
    <>
      {items.length > 0 && (
        <DropdownComponent
          items={items}
          className="form-select"
          defaultText="Please select category"
          onChange={selectItemHandler}
        ></DropdownComponent>
      )}
    </>
  );
};

export default CategoryDropdownComponent;
