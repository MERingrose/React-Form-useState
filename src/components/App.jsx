import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateInput(event) {
    const newValue = event.target.value;
    const targetName = event.target.name;

    setContact((previousName) => {
      if (targetName === "fName") {
        return {
          fName: newValue,
          lName: previousName.lName,
          email: previousName.email
        };
      } else if (targetName === "lName") {
        return {
          fName: previousName.fName,
          lName: newValue,
          email: previousName.email
        };
      } else {
        return {
          fName: previousName.fName,
          lName: previousName.lName,
          email: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateInput}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={updateInput}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={updateInput}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
