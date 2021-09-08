import DropdownComponent from "../../SharedComponent/dropdown-component";
import firebase from "../../firebase";
import { useEffect, useState } from "react";

const CategoryDropdownComponent = (props) => {
  const { onChange } = props;
  const categoryMasterDbRef = firebase.ref("Category");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchDropdown();
  }, []);

  const fetchDropdown = () => {
    categoryMasterDbRef.on("value", (snapshot) => {
      const response = snapshot.val();
      const categories = [];

      for (let id in response) {
        categories.push({
          text: response[id].CategoryName,
          value: response[id].CategoryName,
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
