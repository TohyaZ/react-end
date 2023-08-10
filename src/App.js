import React from "react";
import { Routes , Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import BookPage from "./pages/bookpage/BookPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails";


const App = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/books" element={<BookPage />} />
                <Route path="/books-details/:id" element={<BookDetailsPage />} />
            </Routes>
        </div>
    )
}

export default App