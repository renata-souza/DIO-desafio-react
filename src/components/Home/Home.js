import { Link } from 'react-router-dom'
import cat from '../../assets/img/cat.png';
import LinkButton from '../Button/Button'
import './Home.css'

function Home() {
    return(
        <div className="home_container">
            <div>
                <div className="text_container">
                    <h1>Wise</h1>
                    <p>Cat</p>
                </div>
                <Link to="/cat"> 
                    <LinkButton text='Give me a cat' /> 
                </Link>
            </div>
            <img src={cat} alt="cat" />
        </div>
    )
}

export default Home
