import { useState, useEffect } from "react";
import { ajax } from "rxjs/ajax";
import ButtonComponent from "../../SharedComponent/button-component";
import { useHistory } from "react-router-dom";

const CategoryListComponent = () => {
  const [categoryMaster, setCategoryMaster] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = () => {
    debugger;
    const ajaxRequest$ = ajax({
      url: `${process.env.REACT_APP_BASE_API_URL}/masters/category`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    });

    ajaxRequest$.subscribe({
      next: (apiResponse) => {
        const { success, message, data: Categories } = apiResponse.response;
        if (success) {
          const masterList = [];
          for (let index = 0; index < Categories.length; index++) {
            const element = Categories[index];
            masterList.push(element);            
          }

          setCategoryMaster(masterList);
        }
      },
      error: (error) => {
        debugger;
      },
    });
  };

  const editClickHandler = ($event) => {
     const { id } = $event;
     history.push(`/masters/edit-category/${id}`);
  };

  const deleteClickHandler = ($event) => {
    
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
              <tr key={item._id}>
                <td>{item.category_name}</td>
                <td>{item.description}</td>
                <td>
                  <input
                    className="form-check-input"
                    disabled={JSON.parse(true)}
                    checked={JSON.parse(item.isactive)}
                    type="checkbox"
                  ></input>
                </td>
                <td>
                  <ButtonComponent
                    className="btn btn-success"
                    label="Edit"
                    id={item._id}
                    onButtonClick={editClickHandler}
                  ></ButtonComponent>
                </td>
                <td>
                  <ButtonComponent
                    className="btn btn-danger"
                    label="Delete"
                    id={item._id}
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
