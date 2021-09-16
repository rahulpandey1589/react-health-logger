import { useState } from "react";

const InputComponent = (props) => {

  const [value,setValue] = useState("");

  const { className,placeholder,getInputValue } = props;

  const onChangeHandler = ($event) => {
      setValue($event.target.value)
      getInputValue(value);
  };

  return (
    <>
      <input
        className={className}
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default InputComponent;
