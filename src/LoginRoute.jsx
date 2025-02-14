import {useState} from "react";
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import UserHome from "./pages/user/UserHome";


function LoginRoute() {
    const [user, setUser] = useState(null);


    return(
        <Router>
            <Routes>
                <Route path="/" element={<UserHome /> } />
            </Routes>
        </Router>
    )
}

export default LoginRoute;