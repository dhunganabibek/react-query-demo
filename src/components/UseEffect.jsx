import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await response.json();
        setTodos(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>using UseEffect and UseState</h1>
      {todos?.map(item => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}
