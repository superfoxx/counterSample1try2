import React, {useState} from 'react';
import ListItem from './ListItem'

function App() {

    let [count, setCount] = useState([0, 0, 0, 1])

    const minus = () => {
        let newArr = [...count];
        newArr.pop(0);
        setCount(newArr);
        console.log('minus', count)
    }

    const plus = () => {
        let newArr = [...count];
        newArr.push(0);
        setCount(newArr);
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
        const newArr = count.map((el, ind) =>{
            if (index === ind){
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
