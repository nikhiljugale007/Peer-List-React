import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home, Feed, Login, SignUp } from "./pages";
import { Header, Footer, RequireAuth } from "./components";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/*"
            element={
              <RequireAuth from="/scroll">
                <Feed />
              </RequireAuth>
            }
          />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
