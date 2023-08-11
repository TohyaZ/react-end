import React, {useState , useEffect , createContext} from "react";
import { Routes , Route } from "react-router-dom";
import app from "./firebase/Firebase";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import HomePage from "./pages/home/HomePage";
import BookPage from "./pages/bookpage/BookPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails";
import SignUp from "./pages/signuppage/Signup";
import Login from "./pages/loginpage/Login";
import CartPage from "./pages/cartpage/Cartpage";

export const UserContext = createContext({});

const App = () =>{
    const auth = getAuth(app);

    const [authenticatedUser , setAuthenticatedUser] = useState(null);

    useEffect(()=> {
        onAuthStateChanged (auth , (user) =>{
            if (user) {
                setAuthenticatedUser(user);
            }else {
                setAuthenticatedUser(null)
            }
        })
    },[])

    return(
        <UserContext.Provider value={authenticatedUser}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BookPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/books-details/:id" element={<BookDetailsPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </UserContext.Provider>
    )
}

export default App