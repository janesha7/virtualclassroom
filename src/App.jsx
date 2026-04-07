import React, { useState } from "react";

function App() {

const [page, setPage] = useState("login");
const [userName, setUserName] = useState("");
const [role, setRole] = useState("Student");
const [roomID, setRoomID] = useState("");
const [students, setStudents] = useState(["Teacher", "Student1"]);
const [messages, setMessages] = useState([
  { name: "Student1", text: "Hello" },
  { name: "Teacher", text: "Welcome to the class" }
]);
const [message, setMessage] = useState("");

const enterDashboard = () => {
  if (userName === "") {
    alert("Enter your name");
    return;
  }
  setPage("dashboard");
};

const createRoom = () => {
  const id = Math.floor(Math.random() * 9000) + 1000;
  setRoomID(id);

  setStudents(prev => [...prev, `${userName} (${role})`]);

  setPage("classroom");
};

const joinRoom = () => {
  if (roomID === "") {
    alert("Enter Room ID");
    return;
  }

  setStudents(prev => [...prev, `${userName} (${role})`]);

  setPage("classroom");
};

const sendMessage = () => {
  if (message === "") return;

  setMessages(prev => [...prev, { name: userName, text: message }]);

  setMessage("");
};

return (

<div style={styles.body}>

{/* LOGIN PAGE */}

{page === "login" && (

<div style={styles.container}>

<h2 style={styles.title}>Virtual Classroom Login</h2>

<input
placeholder="Enter Name"
value={userName}
onChange={(e) => setUserName(e.target.value)}
style={styles.input}
/>

<select
value={role}
onChange={(e) => setRole(e.target.value)}
style={styles.input}
>
<option>Student</option>
<option>Teacher</option>
</select>

<button onClick={enterDashboard} style={styles.button}>
Enter Classroom
</button>

</div>

)}

{/* DASHBOARD */}

{page === "dashboard" && (

<div style={styles.container}>

<h2 style={styles.title}>Virtual Classroom Dashboard</h2>

<button onClick={createRoom} style={styles.button}>
Create Classroom
</button>

<hr />

<input
placeholder="Enter Room ID"
value={roomID}
onChange={(e) => setRoomID(e.target.value)}
style={styles.input}
/>

<button onClick={joinRoom} style={styles.button}>
Join Classroom
</button>

</div>

)}

{/* CLASSROOM */}

{page === "classroom" && (

<div style={styles.container}>

<h3>Classroom ID: {roomID}</h3>

<div style={styles.video}>
📺 Video Section
</div>

<h4>Students</h4>

<div style={styles.studentList}>
{students.map((s, i) => (
<p key={i}>{s}</p>
))}
</div>

<h4>Assignments</h4>

<div style={styles.assignment}>
HTML Assignment - Submit by Friday
</div>

<div style={styles.assignment}>
CSS Layout Task - Submit by Monday
</div>

<h4>Class Chat</h4>

<div style={styles.chatBox}>
{messages.map((m, i) => (
<p key={i}>
<b>{m.name}:</b> {m.text}
</p>
))}
</div>

<input
placeholder="Type message"
value={message}
onChange={(e) => setMessage(e.target.value)}
style={styles.input}
/>

<button onClick={sendMessage} style={styles.button}>
Send
</button>

</div>

)}

</div>

);
}

const styles = {

body: {
fontFamily: "Arial",
background: "#f2f2f2",
display: "flex",
justifyContent: "center",
alignItems: "center",
minHeight: "100vh"
},

container: {
width: "420px",
maxWidth: "90%",
background: "white",
padding: "20px",
borderRadius: "8px",
boxShadow: "0 0 10px rgba(0,0,0,0.1)"
},

title: {
textAlign: "center"
},

input: {
width: "100%",
padding: "10px",
margin: "8px 0",
border: "1px solid #ccc",
borderRadius: "4px"
},

button: {
width: "100%",
padding: "10px",
background: "#2ea043",
color: "white",
border: "none",
borderRadius: "4px",
cursor: "pointer",
marginTop: "10px"
},

video: {
background: "#ddd",
height: "150px",
display: "flex",
alignItems: "center",
justifyContent: "center",
marginBottom: "10px",
borderRadius: "5px"
},

chatBox: {
border: "1px solid #ccc",
height: "120px",
overflowY: "auto",
padding: "10px",
marginBottom: "10px"
},

studentList: {
border: "1px solid #ccc",
padding: "10px",
marginBottom: "10px",
borderRadius: "5px"
},

assignment: {
border: "1px solid #ccc",
padding: "10px",
marginTop: "10px",
borderRadius: "5px",
background: "#fafafa"
}

};

export default App;