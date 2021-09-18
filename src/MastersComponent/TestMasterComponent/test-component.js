import AddNewTestComponent from "./add-test-component";
import ListExistingTestComponent from "./list-test-component";
import { Accordion } from "react-bootstrap";

const TestComponent = () => {
  return (
    <>
      <div className="container-center">
        <AddNewTestComponent />
        <div className="row">
          <div className="col-md-8 offset-2">
          <hr />
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
      </div>
    </>
  );
};

export default TestComponent;
