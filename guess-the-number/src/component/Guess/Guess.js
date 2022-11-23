import RandomFunc  from "../RandomFunc";
import {useState} from 'react'

let randomVal = RandomFunc();
const Guess = ()=> {
    
    const [typed, setTyped] = useState(undefined);

    let captureInput = (e)=> {
        console.log(e.target.value);
        setTyped(e.target.value);
    }
    let checkValue = () => {
        console.log(randomVal);
        console.log(randomVal==typed);
    }
    let result = '';
    if(typed == undefined) {

    } else {
        result = (randomVal==typed?'You guessed it!':randomVal<typed?'You guessed high':'You guessed low');
    }
    return (
        <div>
            <p>
            <input placeholder="Guess the number" value={typed} onChange={(e)=> captureInput(e)}/>
            </p>
            {result}
            
            

        </div>
    );
};

export default Guess;