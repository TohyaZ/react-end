import React, {useState , useEffect} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../componets/layouts/navbar/Navbar";
import Footer from "../../componets/layouts/footer/Footer";
import './searchpage.styles.css'
import { BookData } from "../../util/BookData";
import SearchResultCard from "../../componets/cards/search-result-card/SearchResultCard";

const SearchPage = () => {
    const location = useLocation();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
        let searchValue = [];

        searchValue = BookData.filter((data)=>data.book_name.toLowerCase().includes(location.state.toLowerCase()))

        setSearchResult(searchValue)
    },[])

    return(
        <section>
            <Navbar darkTheme={true}/>

            <div className="search-result-container">
                <div className="container">
                    <h2 className="search-title">Your Search Result</h2>

                    {searchResult.map((result)=>(
                        <SearchResultCard key={result.id} bookData={result}/>
                    ))}
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default SearchPage;
