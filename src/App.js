import "./App.css";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebaseconfig";

function App() {
  const app = initializeApp(firebaseConfig);

  console.log(app);

  return (
    <>
      <h1>Home Is Here</h1>
    </>
  );
}

export default App;
