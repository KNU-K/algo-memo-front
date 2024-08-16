import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./page/Main";

const returnRouter = () => {
    return (
        <Router>
            <Routes>
                <Route Component={Main} path="/" />
                <Route />
                <Route />
            </Routes>
        </Router>
    );
};

function App() {
    return <div className="main-div">{returnRouter()}</div>;
}

export default App;
