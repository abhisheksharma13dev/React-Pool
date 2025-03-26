import React, { useState } from 'react'
import  styles from "./Sorting.module.css" ;

function SortingData() {

    const InitialUsers = [
        {id: 1, name: "Martin", age: 25},
        {id: 2, name: "Luther", age: 27},
        {id: 3, name: "Alice", age: 25},
        {id: 4, name: "Maxwell", age: 30},
        {id: 5, name: "Starck", age: 35},
        {id: 6, name: "Triston Stubs", age: 20},
        {id: 7, name: "Shryensh", age: 13},

    ];
    const [users, setUsers] = useState(InitialUsers);
    const [sortBy, setSortBy] = useState("name") //default sort by name

    // function to handle sorting

    const handleSort = (key) => {
        const sortedUsers = [...users].sort((a, b)=>{
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return  1
            return 0;
        })

        setUsers(sortedUsers)
        setSortBy(key)
    }
  return (
  <div className={styles.container}>
     <h1  className={styles.header}> User List (Sorted By: {sortBy})</h1>

     <div className={styles.buttonGroup}>
     <button  className={styles.button} onClick={() => handleSort(" name")}>Sort by Name</button>
     <button className={styles.button} onClick={() => handleSort ("age")}>Sort by Age</button>
  </div>

    

     <ul className={styles.list}>  
        {users.map((user)=>(
            <li key={user.id} className={styles.listItem}>
                {user.name} - Age: {user.age}
                </li>
        ))}
     </ul>

  </div> 

 
    )
};

export default SortingData