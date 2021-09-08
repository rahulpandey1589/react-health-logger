import DropdownComponent from "../../SharedComponent/dropdown-component";
import firebase from "../../firebase";
import { useEffect } from "react";

const categoryMasterDbRef = firebase.ref("Category");

const CategoryDropdownComponent = () => {
  let items = [];

  useEffect(() => {
    fetchDropdown();
  }, []);

  const fetchDropdown = () => {
    debugger;
    categoryMasterDbRef.on("value", (snapshot) => {
      const response = snapshot.val();
      for (let id in response) {
        items.push({
          text: response[id].CategoryName,
          value: response[id].CategoryName,
        });
      }
    });
  };

  return (
    <DropdownComponent
      items={items}
      className="form-select"
      defaultText="Please select"
    ></DropdownComponent>
  );
};

export default CategoryDropdownComponent;
