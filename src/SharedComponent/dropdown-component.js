const DropdownComponent = (props) => {
  const { defaultText, className, items,onChange } = props;

  const onChangeHandler = ($event) => {
    onChange($event.target.value);
  };

  return (
    <select
      onChange={onChangeHandler}
      className={className}
      aria-label="Default select example"
    >
      <option>{defaultText}</option>
      {items !== undefined &&
        items.map((item) => <option key={item.value} value={item.value}>{item.text}</option>)}
    </select>
  );
};

export default DropdownComponent;
