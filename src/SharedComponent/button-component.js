import { PureComponent } from "react";

class ButtonComponent extends PureComponent {
  render() {
    const { className, label, isDisabled, id, onButtonClick } = this.props;

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
      >
        {label}
      </button>
    );
  }
}

export default ButtonComponent;
