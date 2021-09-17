import { useState, useEffect } from "react";
import firebase from "../../firebase";
import ButtonComponent from "../../SharedComponent/button-component";
import { useHistory } from "react-router-dom";

const CategoryListComponent = () => {
  const categoryMasterDbRef = firebase.ref("Category");
  const [categoryMaster, setCategoryMaster] = useState([]);
  const history = useHistory();

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

  const editClickHandler = ($event) => {
    const { id } = $event;
    history.push(`/masters/edit-category/${id}`);
  };

  const deleteClickHandler = ($event) => {
    categoryMasterDbRef.child($event.id).remove();
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
              <tr key={item.id}>
                <td>{item.CategoryName}</td>
                <td>{item.Description}</td>
                <td>
                  <input
                    className="form-check-input"
                    disabled={JSON.parse(true)}
                    checked={JSON.parse(item.IsActive)}
                    type="checkbox"
                  ></input>
                </td>
                <td>
                  <ButtonComponent
                    className="btn btn-success"
                    label="Edit"
                    id={item.id}
                    onButtonClick={editClickHandler}
                  ></ButtonComponent>
                </td>
                <td>
                  <ButtonComponent
                    className="btn btn-danger"
                    label="Delete"
                    id={item.id}
                    onButtonClick={deleteClickHandler}
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
