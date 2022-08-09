import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import './App.css';
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
