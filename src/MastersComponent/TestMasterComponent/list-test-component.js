import { useEffect, useState } from "react";
import firebase from "../../firebase";
import ButtonComponent from "../../SharedComponent/button-component";

const testMasterDbRef = firebase.ref("TestMaster");

const ListExistingTestComponent = () => {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    loadAllTest();
  }, []);

  const deleteHandler = (event) => {
    let idToBeDeleted = event.id;
    alert("Do you really want to delete this record ?");
    if (idToBeDeleted !== undefined) {
      testMasterDbRef.child(event.id).remove();
    }
  };

  const detailHandler = (event) => {
    alert(
      `Detail click handler called in parent component!!! ${event.target.value}`
    );
  };

  const loadAllTest = () => {
    testMasterDbRef.on("value", (snapshot) => {
      const response = snapshot.val();
      const masterList = [];
      for (let id in response) {
        masterList.push({ id, ...response[id] });
      }
      setMasters(masterList);
    });
  };

  return (
    <>
      <div className="container">
        <div className="col-md-4 offset-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          ></input>
        </div>
        <br />
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
                  <tr key={item.id}>
                    <td>{item.Title}</td>
                    <td>{item.Description}</td>
                    <td>{item.Price}</td>
                    <td>
                      <ButtonComponent
                        className="btn btn-success"
                        label="Details"
                        id={item.id}
                        onButtonClick={detailHandler}
                      />
                    </td>
                    <td>
                      <ButtonComponent
                        className="btn btn-danger"
                        label="Delete"
                        id={item.id}
                        onButtonClick={deleteHandler}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        }
      </div>
    </>
  );
};

export default ListExistingTestComponent;
