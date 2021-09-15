import { useState, useEffect } from "react";
import firebase from "../../firebase";
import ButtonComponent from "../../SharedComponent/button-component";

const CategoryListComponent = () => {
  const categoryMasterDbRef = firebase.ref("Category");
  const [categoryMaster, setCategoryMaster] = useState([]);

  useEffect(() => {
    loadCategory();
  }, []);

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
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryMaster !== undefined &&
            categoryMaster.map((item) => (
              <tr key={item.CategoryName}>
                <td>{item.CategoryName}</td>
                <td>{item.Description}</td>
                <td>
                  <input
                    className="form-check-input"
                    disabled="true"
                    checked={item.IsActive}
                    type="checkbox"
                  ></input>
                </td>
                <td>
                  <ButtonComponent
                    className="btn btn-success"
                    label="Details"
                  ></ButtonComponent>
                </td>
                <td>
                  <ButtonComponent
                    className="btn btn-danger"
                    label="Delete"
                  ></ButtonComponent>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoryListComponent;
