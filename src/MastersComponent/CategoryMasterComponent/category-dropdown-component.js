import DropdownComponent from "../../SharedComponent/dropdown-component";
import firebase from "../../firebase";
import { useEffect, useState } from "react";

const CategoryDropdownComponent = () => {
  const categoryMasterDbRef = firebase.ref("Category");
  const [items,setItems] = useState([]);
  const categories = [];

  useEffect(() => {
    fetchDropdown();
  }, []);

  const fetchDropdown = () => {
    categoryMasterDbRef.on("value", (snapshot) => {
      debugger;
      const response = snapshot.val();
      for (let id in response) {
        categories.push({
          text: response[id].CategoryName,
          value: response[id].CategoryName,
        });
      }
      setItems(categories);
    });
  };

  return (
    <>
      {items.length > 0 && (
        <DropdownComponent
          items={items}
          className="form-select"
          defaultText="Please select category"
        ></DropdownComponent>
      )}
    </>
  );
};

export default CategoryDropdownComponent;
