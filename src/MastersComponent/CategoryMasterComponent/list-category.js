import { useState, useEffect } from "react";
import ButtonComponent from "../../SharedComponent/button-component";
import { useHistory } from "react-router-dom";
import axios from '../../Services/axios';
import openSocket from 'socket.io-client';
import customAxios from "../../Services/axios";


const CategoryListComponent = () => {
  const [categoryMaster, setCategoryMaster] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadCategory();
    console.log('I am loaded');
    const socket = openSocket('http://localhost:7000');
    socket.on('category',response =>{
      if(response.action === "addCategory"){
        //alert(`Category added with data ${response.data.description}`)
      }
    })
  }, []);

  const bindCategoryToGrid =(categoryReponse) =>{
    const { success, message, data: Categories } = categoryReponse.data;
    if (success) {
      const masterList = [];
      for (let index = 0; index < Categories.length; index++) {
        const element = Categories[index];
        masterList.push(element);
      }
      setCategoryMaster(masterList);
    }
  }

  const loadCategory = () => {
    debugger;
    axios
      .get('/masters/category')
      .then((response) => {
        bindCategoryToGrid(response);
      });
  };

  const editClickHandler = ($event) => {
    const { id } = $event;
    history.push(`/masters/edit-category/${id}`);
  };

  const deleteClickHandler = ($event) => {
    const {id} = $event
     if(id !== undefined){
      customAxios
       .delete(`/masters/category/${id}`)
       .then((data) =>{
           alert('Record Deleted!!!');
           loadCategory();
       });
    }
    
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
