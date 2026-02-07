import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Service from "./pages/Service";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Hook from "./hooks/Hook";
import UseEffect from "./hooks/UseEffect";
import UseState from "./hooks/UseState";
import UseEffectApi from "./hooks/UseEffectApi";
import UseRef from "./hooks/UseRef";
import UseReducer from "./hooks/UseReducer";
import UseMemo from "./hooks/UseMemo";
import UseCallback from "./hooks/UseCallback";
import Todo from "./component/Todo";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home name="Rishi" />} />
        <Route path="/about" element={<About name="paru" age={20} dept="DS"/>} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo/>}/>

        {/* Nested Routes */}
        <Route path="/hook" element={<Hook />}>
          <Route index element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useState" element={<UseState />} />
          <Route path="useEffectApi" element={<UseEffectApi />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="useCallback" element={<UseCallback />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
