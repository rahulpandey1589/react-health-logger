import { useEffect, useState } from "react";
import ButtonComponent from "../../SharedComponent/button-component";
import axios from "../../Services/axios";

const ListExistingTestComponent = () => {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    loadAllTest();
  }, []);

  const deleteHandler = (event) => {
    let idToBeDeleted = event._id;
    alert("Do you really want to delete this record ?");
  };

  const detailHandler = (event) => {
    alert(
      `Detail click handler called in parent component!!! ${event.target.value}`
    );
  };

  const loadAllTest = () => {
    axios.get("/masters/test").then((response) => {
      debugger;
      const masterList = [];
      for (let index = 0; index < response.data.response.length; index++) {
        const element = response.data.response[index];
        masterList.push(element);
      }
      setMasters(masterList);
    });
  };

  return (
    <>
      {
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {masters !== undefined &&
              masters.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <ButtonComponent
                      className="btn btn-success"
                      label="Details"
                      id={item._id}
                      onButtonClick={detailHandler}
                    />
                  </td>
                  <td>
                    <ButtonComponent
                      className="btn btn-danger"
                      label="Delete"
                      id={item._id}
                      onButtonClick={deleteHandler}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      }
    </>
  );
};

export default ListExistingTestComponent;
