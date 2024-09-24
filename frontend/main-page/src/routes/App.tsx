import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Login from './login';
import Main from './mainpage';
import LandingPage from "./landingpage";
import UploadProduct from "./uploadProduct";

function App(){
    return(
        <Fragment>
            <Router>
                <Routes>
                    <Route path="" element={<LandingPage></LandingPage>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/main" element={<Main></Main>}></Route>
                    <Route path="/upload" element={<UploadProduct></UploadProduct>}></Route>
                </Routes>
            </Router>
        </Fragment>
    )
}

export default App;