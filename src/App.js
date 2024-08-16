import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import GroupJoin from "./page/group/Join";
import GroupMe from "./page/group/Me";
import GroupSearch from "./page/group/Search";

const returnRouter = () => {
    return (
        <Router>
            <Routes>
                <Route Component={Main} path="/" />
                <Route Component={GroupJoin} path="/group/join" />
                <Route Component={GroupMe} path="/group/me" />
                <Route Component={GroupSearch} path="/group/search" />
                <Route />
            </Routes>
        </Router>
    );
};

function App() {
    return <div className="main-div">{returnRouter()}</div>;
}

export default App;
