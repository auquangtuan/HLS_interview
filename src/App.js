import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouter } from "./routes";
function App() {
  return (
    <Router>
      <Routes>
        {publicRouter.map((routes) => {
          return routes.map((route, index) => {
            return route.children
              ? route.children.map(({ path, Component }, index) => {
                  return (
                    <Route path={path} element={<Component />} key={index} />
                  );
                })
              : null;
          });
        })}
      </Routes>
    </Router>
  );
}

export default App;
