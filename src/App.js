import HomeContainer from "./container/HomeContainer";
import HomePage from "./pages/HomePage";

function App() {
  return <HomePage children={<HomeContainer />} />;
}

export default App;
