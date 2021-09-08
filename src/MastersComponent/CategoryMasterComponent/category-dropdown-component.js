import DropdownComponent from "../../SharedComponent/dropdown-component";
import firebase from "../../firebase";
import { useEffect, useState } from "react";

const CategoryDropdownComponent = () => {
  const categoryMasterDbRef = firebase.ref("Category");
  const [items, setItems] = useState("");
  const categories = [];

  useEffect(() => {
    fetchDropdown();
  }, []);

  const fetchDropdown = () => {
    categoryMasterDbRef.on("value", (snapshot) => {
      const response = snapshot.val();
      for (let id in response) {
        categories.push({
          text: response[id].CategoryName,
          value: response[id].CategoryName,
        });
        setItems('Rahul Pandey')
      }
    });
  };

  return (
    <DropdownComponent
      items={categories}
      className="form-select"
      defaultText="Please select"
    ></DropdownComponent>
  );
};

export default CategoryDropdownComponent;
