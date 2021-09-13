const AlertComponent = (props) => {
  const { className, displayText } = props;

  return (
    <div className={className} role="alert">
      {displayText}
    </div>
  );
};

export default AlertComponent;
