const HomeComponent = () => {
  return (
    <div className="container">
      <h1>Home Component Loaded</h1>
      <div className="row">
         <h3>  Welcome {localStorage.getItem('email')} </h3>
      </div>
    </div>
  );
};

export default HomeComponent;
