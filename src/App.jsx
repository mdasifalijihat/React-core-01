import { Suspense } from "react";
import "./App.css";
import { BatsMn } from "./BatsMn";
import Users from "./Users";
import Friends from "./Friends";
import Poat from "./Poat";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); return res.json(); 
}

const fetchPost = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json(); 
}

function App() {

  const friendPromise = fetchFriends();

  const postsPromise = fetchPost(); 

  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("click 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h2>Hello World</h2>

      {/* <Suspense fallback={<h2>Loading..... </h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<p> Friden com  </p>}> 
      <Friends friendPromise={friendPromise}></Friends>
      </Suspense> */}

      <Suspense fallback={<h3>Post Are comming </h3>}>
      <Poat postsPromise={postsPromise}>

      </Poat>

      </Suspense>

      <BatsMn />

      <h1>Vite + React</h1>

      <button onClick={handleClick}> Click me </button> 

      <button onClick={() => alert("click 2")}> Click me 2 </button>

      <button onClick={handleClick3}> Click me 3 </button>

       <button onClick={() => handleAdd5(10)}> Click add 5 </button>
    </>
  );
}

export default App;
