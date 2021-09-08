const DropdownComponent = (props) => {
  const { defaultText,className,items} = props;
  debugger;
  return (
    <select className={className} aria-label="Default select example">
      <option>{defaultText}</option>
      {items !== undefined &&
        items.map((item) => <option value={item.value}>{item.text}</option>)}
    </select>
  );
};

export default DropdownComponent;
