import UserContainer from "./containers/UserContainer";
import useWindowSize from "./Hooks/UseWindowSize";

function App(){
  const { width, height } = useWindowSize();
  return (
    <>
      <h1>Container Presentational Pattern</h1>
      <UserContainer/>
      <div>
           Window Size : {width} x {height}
      </div>
    </>
  );
}

export default App;