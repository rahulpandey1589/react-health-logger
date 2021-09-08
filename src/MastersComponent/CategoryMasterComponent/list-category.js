import { useState, useEffect } from "react";
import firebase from "../../firebase";

const CategoryListComponent = () => {
  const categoryMasterDbRef = firebase.ref("Category");
  const [categoryMaster, setCategoryMaster] = useState([]);

  useEffect(() => {
    loadCategory();
  });

  const loadCategory = () => {
    categoryMasterDbRef.on("value", (snapshot) => {
      const response = snapshot.val();
      const masterList = [];
      for (let id in response) {
        masterList.push({ id, ...response[id] });
      }
      setCategoryMaster(masterList);
    });
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>IsActive</th>
          </tr>
        </thead>
        <tbody>
          {categoryMaster !== undefined &&
            categoryMaster.map((item) => <tr>
                <td>{item.CategoryName}</td>
                <td>{item.Description}</td>
                <td>{item.IsActive === true ? "True" : "False"}</td>
            </tr>)}
        </tbody>
      </table>
    </>
  );
};

export default CategoryListComponent;
