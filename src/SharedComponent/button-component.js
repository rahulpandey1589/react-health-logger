const ButtonComponent = (props) => {
  const { className, label, isDisabled, id, onButtonClick } = props;

  const handleButtonClick = ($event) => {
    $event.preventDefault();
    let newData ={id}
    onButtonClick(newData);
  };

  return (
    <button
      onClick={handleButtonClick}
      disabled={isDisabled !== undefined ? isDisabled : false}
      className={className}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
