import TestMasterDataService from "../Services/test-master-service";
import AddTestControl from "./add-test-control";

const AddNewTestComponent = () => {
  
  const addNewTestHandler = () => {
    const testObj = {
      Category: "Pathological",
      Title: "Blood Sugar and Fasting",
      Description:
        "Blood Sugar Analysis Fasting and PP. Advised patient to give fasting sample after atleast 8 hours of fasting",
      Price: 120,
      // },
      // {
      //   Category: "Pathological",
      //   Title: "Lipid Profile - Complete",
      //   Description:
      //     "This test is conducted to analyze chroestrol level in body. Advised patient to give this sample after fasting of 8 hours",
      //   Price: 120,
      // },
    };

    TestMasterDataService.create(testObj);
    alert("Results Saved!!!");
  };

  return (
    <>
      <div className="container-fluid">
        <AddTestControl />
      </div>
    </>
  );
};

export default AddNewTestComponent;
