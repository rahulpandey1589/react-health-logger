import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../SharedComponent/button-component";
import InputComponent from "../../SharedComponent/input-component";
import customAxios from "../../Services/axios";

const CategoryComponent = (props) => {
  const { actionName, categoryId } = props;
  const history = useHistory();

  let cName, cDescription;

  useEffect(() => {
    if (categoryId !== undefined) {
      console.log("Fetch Category Loaded!!!!");
      fetchCategoryById();
    }
  }, [categoryId]);

  const handlerChange = ($value) => {
    const { key, value } = $value;
    switch (key) {
      case "name":
        cName = value;
        break;
      case "description":
        cDescription = value;
        break;
      default:
        break;
    }
  };

  const fetchCategoryById = () => {
    if (categoryId === undefined) {
      console.error("Invalid Category Id found");
      return;
    }
    customAxios.get(`masters/category/${categoryId}`).then((response) => {
      const { category_name, description } = response.data.data;
      document.getElementById("txtCategory").value = category_name;
      document.getElementById("txtCategoryDesc").value = description;
    });
  };

  const addCategory = () => {
    let categoryData = {
      category_name: cName,
      description: cDescription,
      isactive: true,
    };
    customAxios.post("masters/category", categoryData).then((response) => {
      alert('Category Created!!!');
    });
    clear();
  };

  const updateCategory = () => {
    // firebase.ref("Category").update({
    //   CategoryName: cName,
    //   Description: cDescription,
    //   IsActive: true,
    // });
    history.goBack();
  };

  const clear = () => {
    document.getElementById("txtCategory").value = '';
    document.getElementById("txtCategoryDesc").value = '';

  };

  const onClickHandler = () => {
    if (actionName === "Add Category") {
      addCategory();
    } else {
      updateCategory();
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <label htmlFor="category">Category Name</label>
          <InputComponent
            className="form-control"
            id="txtCategory"
            name="name"
            getInputValue={handlerChange}
          ></InputComponent>
        </div>
        <div className="col-4">
          <label htmlFor="category">Description</label>
          <InputComponent
            id="txtCategoryDesc"
            className="form-control"
            name="description"
            getInputValue={handlerChange}
          ></InputComponent>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <ButtonComponent
            label={actionName}
            className="btn btn-success"
            onButtonClick={onClickHandler}
          ></ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default CategoryComponent;
