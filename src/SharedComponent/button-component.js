const ButtonComponent = (props) => {
 
    const className = props.className; 
    const textToDisplay= props.displayText;  

    console.log(textToDisplay);
    return <>
      <input type="button" className={className}>{textToDisplay}</input>
    </>
};


export default ButtonComponent;