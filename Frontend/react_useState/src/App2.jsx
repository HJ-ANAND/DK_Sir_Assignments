// import { useState, useEffect } from "react";

// function App2() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (query === "") return;

//     fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
//       .then((res) => res.json())
//       .then((data) => setResults(data));
//   }, [query]);

//   return (
//     <div>
//       <h2>User Search</h2>
//       <label htmlFor="searchInput">Search by Name: </label>
//       <input
//         id="searchInput"
//         type="search"
//         placeholder="Type a name..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <hr />
//       <h3>Results:</h3>
//       <ul>
//         {results.map((r) => (
//           <li key={r.id}>
//             {r.name} ({r.email})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App2;

// LESSON 1 - Basic Props
// Props = Parent se Child ko data dena

// CHILD component
// function StudentCard(props) {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// // PARENT component
// function App2() {
//   return (
//     <div>
//       <h2>Lesson 1 - Basic Props</h2>

//       <StudentCard name="Rahul" age={20} />
//       <StudentCard name="Priya" age={22} />
//       <StudentCard name="Arjun" age={21} />
//     </div>
//   );
// }

// export default App2;

// *FOR BATCH 2 ONLY*

// LESSON 2 - Props Destructuring
// props.name likhne ki jagah seedha { name } likh sakte ho
// Dono same kaam karte hain - sirf shortcut hai

// Bina destructuring
// function Card1(props) {
//   return <p>{props.name} - {props.city}</p>;
// }

// // Destructuring ke saath - zyada clean
// function Card2({ name, city }) {
//   return <p>{name} - {city}</p>;
// }

// function Lesson2() {
//   return (
//     <div>
//       <h2>Lesson 2 - Destructuring</h2>

//       <h4>Bina destructuring:</h4>
//       <Card1 name="Rahul" city="Delhi" />

//       <h4>Destructuring ke saath:</h4>
//       <Card2 name="Priya" city="Mumbai" />
//     </div>
//   );
// }

// export default Lesson2;

// LESSON 3 - Function As Prop
// Parent apna function Child ko de sakta hai
// Child us function ko call karta hai
// Isliye event upar Parent tak pahunchta hai

// import { useState } from "react";

// // CHILD - isko pata nahi kya hoga click ke baad
// // sirf call karega
// function MyButton({ onButtonClick }) {
//   return <button onClick={onButtonClick}>Click Me</button>;
// }

// // PARENT - yeh decide karega kya hoga
// function Lesson3() {
//   const [message, setMessage] = useState("Kuch nahi hua abhi");

//   function handleClick() {
//     setMessage("Button daba diya!");
//   }

//   return (
//     <div>
//       <h2>Lesson 3 - Function As Prop</h2>

//       <p>{message}</p>

//       {/* handleClick function prop mein diya */}
//       <MyButton onButtonClick={handleClick} />
//     </div>
//   );
// }

// export default Lesson3;

// LESSON 4 - Function Prop Ke Saath Data Bhejna
// Child sirf call nahi karta - data bhi bhejta hai
// Yeh Todo App mein use hoga (onDelete wala pattern)

// import { useState } from "react";

// // CHILD - apna name parent ko bhej raha hai
// function NameButton({ name, onSelect }) {
//   return (
//     <button onClick={() => onSelect(name)}>
//       {name}
//     </button>
//   );
// }

// // PARENT
// function Lesson4() {
//   const [selected, setSelected] = useState("Koi nahi chuna");

//   function handleSelect(name) {
//     setSelected(name);
//   }

//   return (
//     <div>
//       <h2>Lesson 4 - Data Ke Saath Function Call</h2>

//       <p>Chuna gaya: {selected}</p>

//       {/* Har button apna naam bhejta hai */}
//       <NameButton name="Rahul" onSelect={handleSelect} />
//       <NameButton name="Priya" onSelect={handleSelect} />
//       <NameButton name="Arjun" onSelect={handleSelect} />

//       {/*
//         onClick={() => onSelect(name)}
//         Arrow function isliye - taaki name ke saath call ho
//         Bina arrow ke onClick={onSelect} likhte toh
//         name nahi milta parent ko
//       */}
//     </div>
//   );
// }

// export default Lesson4;

// LESSON 5 - Array As Prop
// Parent ek array deta hai
// Child us array ko map() se render karta hai
// Yeh exactly Todo App mein hoga

// CHILD - ek array receive karta hai aur dikhata hai
function NameList({ names }) {
  return (
    <ul>
      {names.map(function(name, index) {
        return <li key={index}>{index} : {name}</li>;
      })}
    </ul>
  );
}

// PARENT
function Lesson5() {
  const students = ["Rahul", "Priya", "Arjun", "Sneha"];

  return (
    <div>
      <h2>Lesson 5 - Array As Prop</h2>

      <NameList names={students} />

      {/*
        key={index} kyun?
        React ko efficiently update karne ke liye chahiye
        Har item ka ek unique pehchaan honi chahiye
      */}
    </div>
  );
}

export default Lesson5;
