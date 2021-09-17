import AddNewTestComponent from "./add-test-component";
import ListExistingTestComponent from "./list-test-component";
import { Accordion } from "react-bootstrap";

const TestComponent = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-md-8 offset-2">
          <AddNewTestComponent />
          <hr></hr>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>List Test</Accordion.Header>
              <Accordion.Body>
                <ListExistingTestComponent></ListExistingTestComponent>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default TestComponent;
