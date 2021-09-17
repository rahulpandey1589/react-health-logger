import { useState } from "react";

const InputComponent = (props) => {
  const [value, setValue] = useState("");
  const { className, placeholder, getInputValue, name,id } = props;

  const onChangeHandler = ($event) => {
      debugger;

    setValue($event.target.value);
    const changeObj = {
      key: name,
      value: $event.target.value,
    };
    getInputValue(changeObj);
  };

  return (
    <>
      <input
        id={id}
        className={className}
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder === undefined ? `Please enter ${name}` : placeholder}
      ></input>
    </>
  );
};

export default InputComponent;
