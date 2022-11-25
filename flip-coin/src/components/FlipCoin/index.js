import {useState} from 'react'
import headImg  from './images/head.png';
import tailImg from './images/tail.png';
import './style.css'

const FlipCoin = () => {
    const [side, setSide] = useState(0)
    const flipCoin = () => {
        setSide(Math.floor(Math.random()*10)%2);
    }
return (
    <div>
        <h1>Flip the coin</h1>
        {side==0?<img src={headImg}></img>:<img src={tailImg}></img>}
        
        <br></br>
        <button onClick={flipCoin}>Flip</button>
    </div>
)
}

export default FlipCoin;