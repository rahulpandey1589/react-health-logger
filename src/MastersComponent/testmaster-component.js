import { useEffect, useState } from "react";

const TestMasterComponentList = () => {
  const [tests,setTests] = useState([]);
  
  useEffect(() => {
    loadAllTest();
  }, []);

  const loadAllTest = () => {
    fetch(`${process.env.REACT_APP_ROUTE_URL}/laboratorytest.json`)
   //fetch('https://jsonplaceholder.typicode.com/users/')  
   .then((response) => {
     debugger;
        return response.json();
      })
      .then((result) => {
        setTests(result);
        console.log(tests);
      });
  };

  return (
    <div>
      <h1>Test Master Loaded!!!</h1>
    </div>
  );
};

export default TestMasterComponentList;
