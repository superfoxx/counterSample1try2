import React, {useState} from 'react';
import ListItem from './ListItem'

function App() {

    let [count, setCount] = useState([0, 0, 0, 1])

    const minus = () => {
        count.pop([count.length-1]);
        setCount(count);
        console.log('minus', count)
    }
    const plus = () => {
        count.push(1);
        setCount(count);
        console.log('minus', count)
    }
    const counterPlus = (lol) => {
        const newArr = count.map((el, i) => {
            if (lol === i){
                return el + 1
            }
            return el
        })
        console.log('COUNTER PLUS')
        setCount(newArr)
    }

    const counterMinus = (index) => {
        const newArr = count.map((el, i) =>{
            if (index === i){
                return el - 1
            }
            return el
        })
        console.log('COUNTER MINUS')
        setCount(newArr)
    }


  return (
    <div>
        {count.map((el, ind) => <ListItem counterPlus={counterPlus} counterMinus={counterMinus} ind={ind} el={el} key={Math.random()}/>)}

      <button onClick={minus}>minus counter</button>
        {count}
      <button onClick={plus}>Add counter</button>

    </div>
  );
}

export default App;
