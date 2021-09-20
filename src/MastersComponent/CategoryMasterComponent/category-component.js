import firebase from "../../firebase";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../SharedComponent/button-component";
import InputComponent from "../../SharedComponent/input-component";

const categoryDbRef = firebase.ref("Category");

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
    debugger;
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

    categoryDbRef.child(categoryId).once("value", function (data) {
      const { CategoryName, Description, IsActive } = data.val();
      document.getElementById("txtCategory").value = CategoryName;
      document.getElementById("txtCategoryDesc").value = Description;
    });
  };

  const addCategory = () => {
    debugger;
    let categoryData = {
      CategoryName: cName,
      Description: cDescription,
      IsActive: true,
    };
    categoryDbRef.push(categoryData);
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
    // setCategory("");
    // setDescription("");
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
      <div className="container-fluid">
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
              <label htmlFor="category">Category Description</label>
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
      </div>
    </>
  );
};

export default CategoryComponent;
