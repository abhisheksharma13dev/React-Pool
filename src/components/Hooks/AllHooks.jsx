import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

let ThemeContext = React.createContext("light")

function ExampleHooks() {
let [count, setCount] = useState(0)
let [text, setText] = useState('')

useEffect ( ()=> {
    document.title = `Count: {count}`;
console.log(`Count changed: {count}`);

return () =>{
    console.log('Component unmounted or effect about to re-run');  
}; }, [count] )


let inputRef = useRef (null);
const previousCountRef = useRef(count)

useEffect ( ()=>{
    previousCountRef.current = count
})

const focusInput = () =>{
    inputRef.current.focus ();
};

const theme = useContext(ThemeContext);


let factorial  = useMemo ( ()=>{
    console.log('Calculating factorial....!');
    if (count < 0) return 0;
    if (count === 0) return 1;
    let result = 1;
    for  (let i  = 1; i<= count; i++) {
        result *=1;
    }
    return result
    
}, [count])  //recalculate only when count changes

const increment = useCallback ( ()=>{
    setCount (prevCount => prevCount + 1);
}, [])






  return (
    <div  style={{background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000', padding: '20px' }}>
        <h2>React Hooks Example</h2>
        <p>Count: {count}</p>
        <p>Previous Count : {previousCountRef.current}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
        <p>Factorial : {factorial}</p>

        <input ref={inputRef} type='text'   value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={focusInput}>Focus Input</button>

        <p>Theme: {theme}</p>
    </div>
    
  )
};

function AllHooks() {
    let [currentTheme, setCurrentTheme] = useState('light');

    const toggleTheme = () => {
        setCurrentTheme(prevTheme => prevTheme === 'light' ? 'dark ' : 'light');
    }

    return (
        <ThemeContext.Provider value={currentTheme}>
            <ExampleHooks />
            <button onClick={toggleTheme}>Toggle Theme</button>
        </ThemeContext.Provider>
    )
}

export default AllHooks