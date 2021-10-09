import {useContext} from  'react'
import AuthContext from "../Store/auth-context";


const DashboardComponent = () => {
  const authContext = useContext(AuthContext);
  
  const displayName = authContext.displayName;
  return (
    <div>
      <h1>Welcome {displayName}</h1>
    </div>
  );
};

export default DashboardComponent;
