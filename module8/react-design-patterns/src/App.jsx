import UserContainer from "./containers/UserContainer";
import useWindowSize from "./Hooks/UseWindowSize";
import { Routes , Route } from "react-router-dom";

function App(){
  const { width, height } = useWindowSize();
  return (
    <>
      <h1>Container Presentational Pattern</h1>
      <UserContainer/>
      <div>
           Window Size : {width} x {height}
      </div>
      <hr></hr>

      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/" element={<div>HOC Component and Welcome to login Page</div>} />
      </Routes>
    </>
  );
}

export default App;