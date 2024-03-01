// import { useMemo } from "react";
// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// function App() {
//   const socket = useMemo(() => io("http://localhost:3000"), []);

//   const [message, setMessage] = useState("");
//   const [receve, setReceve] = useState([]);
//   const [id, setId] = useState("");
//   const [room, setRoom] = useState("");
//   const [join, setJoin] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     socket.emit("message", { message, room });
//     setMessage("");
//   };

//   const handleJoin = (e) => {
//     e.preventDefault();
//     socket.emit("join", join);
//     setJoin("");
//   };

//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("Connected to server");
//       setId(socket.id);
//       console.log(socket.id); // This will log the socket ID once connecte
//     });

//     socket.on("rec-msg", (d) => {
//       console.log(`i am data ${d}`);
//       setReceve((prev) => [...prev, d]);
//     });
//   }, []);

//   return (
//     <>
//       <h1>i ma app socket.io</h1>
//       <p>{id}</p>
//       {receve && receve.length
//         ? receve.map((m, idx) => <p key={idx}>{m}</p>)
//         : null}

//       <form onSubmit={handleJoin}>
//         <input
//           type="text"
//           onChange={(e) => setJoin(e.target.value)}
//           value={join}
//         />
//         <button type="submit">join</button>
//       </form>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={(e) => setMessage(e.target.value)}
//           value={message}
//         />
//         <input
//           type="text"
//           onChange={(e) => setRoom(e.target.value)}
//           value={room}
//         />
//         <button type="submit">send</button>
//       </form>
//     </>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import { io } from "socket.io-client";

// const App = () => {
//   const Socket = io(`http://localhost:4000`);

//   // useEffect(() => {
//   //   Socket.on("connect", () => {
//   //     console.log(`your are connected to the chat app`);
//   //   });
//   //   console.log(`i am use `);
//   // }, []);

//   useEffect(() => {
//     console.log(`first`);
//   }, []);

//   return (
//     <div>
//       <select onChange={(e) => console.log(e.target.value)}>
//         <option>admin</option>
//         <option>Route</option>
//         <option>user</option>
//       </select>
//       App
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { io } from "socket.io-client";

const App = () => {
  const Socket = io(`http://localhost:4000`);
console.log(Socket);
  useEffect(() => {
    console.log("first");
  }, []);

  return (
    <div>
      <select onChange={(e) => console.log(e.target.value)}>
        <option>admin</option>
        <option>Route</option>
        <option>user</option>
      </select>
      App
    </div>
  );
};

export default App;
