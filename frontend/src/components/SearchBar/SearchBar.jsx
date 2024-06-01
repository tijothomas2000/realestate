import { useState } from 'react';
import './SearchBar.scss';

const types = ["Buy", "Rent"];

export default function SearchBar() {
    const [query, setQuery] = useState({
        type: "Buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    })
    function switchType(value) {
        setQuery(prev => ({ ...prev, type: value }));
    }
    return (
        <div className='searchbar'>
            <div className="type">
                {types.map((type) => (
                    <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : null}>
                        {type}
                    </button>
                ))}
            </div>
            <form action="">
                <input type="text" name='location' placeholder="City Location" />
                <input type="number" name='minPrice' min={0} max={10000000} placeholder="Min Price" />
                <input type="number" name='maxPrice' min={0} max={10000000} placeholder="Max Price" />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    )
}
