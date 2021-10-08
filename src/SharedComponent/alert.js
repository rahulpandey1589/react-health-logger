import { Alert } from "react-bootstrap";

const AlertComponent = (props) => {
  let variant = "danger";
  return (
    <>
      <Alert key={1} variant={variant}>
        This is a {variant} alert—check it out!
      </Alert>
    </>
  );
};

export default AlertComponent;
