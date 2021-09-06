import { useEffect, useState } from "react";

const ListExistingTestComponent = () => {
  const [tests,setTests] = useState([]);
  
  useEffect(() => {
    loadAllTest();
  }, []);

  const loadAllTest = () => {
    
  };

  return (
    <div>
      <h1>Test Master Loaded!!!</h1>
    </div>
  );
};

export default ListExistingTestComponent;
