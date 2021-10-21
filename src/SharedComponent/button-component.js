import { PureComponent } from "react";

class ButtonComponent extends PureComponent {
  render() {
    const { className, label, isDisabled, id, onButtonClick,type } = this.props;

    const handleButtonClick = ($event) => {
      $event.preventDefault();
      let newData = { id };
      onButtonClick(newData);
    };

    return (
      <button
        onClick={handleButtonClick}
        disabled={isDisabled !== undefined ? isDisabled : false}
        className={className}
        type={type}
      >
        {label}
      </button>
    );
  }
}

export default ButtonComponent;
