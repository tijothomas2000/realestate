import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import './Home.scss';
import { useContext } from 'react';

export default function Home() {

    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);

    return (
        <div className='home'>
            <div className="textcontainer">
                <div className="wrapper">
                    <h1 className='title'>Find real estate & get your dream place.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Atque asperiores accusamus impedit
                        enim quasi voluptas animi laborum facere autem assumenda a quisquam,
                        quos cum doloremque non nostrum consequuntur inventore quam ratione. Qui
                        ipsam neque accusantium sequi expedita corrupti, architecto quod alias esse nesciunt l
                        aborum nihil tempora suscipit? Aspernatur sed rem officia dolorem accusantium necessitatibus
                        corporis magni enim, cum ?
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgcontainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}
