import { getDatabase, ref, onValue } from "firebase/database";

const TestMasterComponentList = () => {
  const db = getDatabase();

  const testMasterRef = ref(db, "laboratorytest/");

  return (
    <div>
      <h1>Test Master Loaded!!!</h1>
    </div>
  );
};

export default TestMasterComponentList;
