import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import GroupCreate from "./page/group/Create";
import GroupMe from "./page/group/Me";
import GroupList from "./page/group/List";

const returnRouter = () => {
    return (
        <Router>
            <Routes>
                <Route Component={Main} path="/" />
                <Route Component={GroupCreate} path="/group/create" />
                <Route Component={GroupMe} path="/group/me" />
                <Route Component={GroupList} path="/group/list" />
                <Route />
            </Routes>
        </Router>
    );
};

function App() {
    return <div className="main-div">{returnRouter()}</div>;
}

export default App;
