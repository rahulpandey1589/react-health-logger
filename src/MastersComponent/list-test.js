import { useEffect, useState } from "react";
import firebase from "../firebase";
import ButtonComponent from "../SharedComponent/button-component";

const ListExistingTestComponent = () => {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    loadAllTest();
    console.log("I am loaded");
  }, []);

  const loadAllTest = () => {
    const testMasterDbRef = firebase.ref("TestMaster");
    testMasterDbRef.on("value", (snapshot) => {
      const response = snapshot.val();
      const masterList = [];
      for (let id in response) {
        debugger;
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
                      <ButtonComponent className="btn btn-primary" />
                    </td>
                    <td>
                      <ButtonComponent className="btn btn-success" />
                    </td>
                    <td>
                      <ButtonComponent className="btn btn-danger" />
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
