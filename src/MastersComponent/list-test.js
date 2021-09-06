import { useEffect, useState } from "react";
import firebase from "../firebase";

const ListExistingTestComponent = () => {
  const [masters, setMasters] = useState();

  useEffect(() => {
    loadAllTest();
    console.log('I am loaded');
    console.log(masters);
  }, []);

  const loadAllTest = () => {
    const testMasterDbRef = firebase.ref("TestMaster");
    testMasterDbRef.on("value", (snapshot) => {
      const response = snapshot.val();
      const masterList = [];
      for (let id in response) {
        masterList.push(response[id]);
      }
      setMasters(masterList);
    });
  };

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {masters != undefined &&
              masters.map((item) => (
                <tr>
                  <td>{item.Title}</td>
                  <td>{item.Description}</td>
                  <td>{item.Price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListExistingTestComponent;
