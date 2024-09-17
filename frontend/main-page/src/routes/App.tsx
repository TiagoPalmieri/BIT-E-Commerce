import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Login from '../routes/login';
import Main from '../routes/mainpage';
import LandingPage from "../routes/landingpage";

function App(){
    return(
        <Fragment>
            <Router>
                <Routes>
                    <Route path="" element={<LandingPage></LandingPage>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/main" element={<Main></Main>}></Route>
                </Routes>
            </Router>
        </Fragment>
    )
}

export default App;