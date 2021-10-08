import { Alert } from "react-bootstrap";

const AlertComponent = (props) => {
  const { variant, errors } = props;
  console.log(errors);
  return (
    <>
      <Alert key={1} variant={variant}>
        {errors.map((x) => (
          <li>{x}</li>
        ))}
      </Alert>
    </>
  );
};

export default AlertComponent;
