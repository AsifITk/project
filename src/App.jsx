import "./App.css";
import { useRef, useState } from "react";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./conponents/firebase-config";
import { useEffect } from "react";
import { async } from "@firebase/util";
// import { doc, setDoc } from "firebase/firestore";

function App() {
  let name = useRef();
  let email = useRef();
  let [users, setUsers] = useState([]);

  // !set contacts
  let setContacts = async (name, email) => {
    let newUser = {
      name: name,
      email: email,
    };
    let data = await addDoc(collection(db, "contacts"), newUser);
    getContacts();
  };

  // !getContacts
  let getContacts = async () => {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    let info = [];
    querySnapshot.forEach((doc) => {
      let contact = doc.data();
      contact.id = doc.id;
      info.push(contact);
    });
    setUsers(info);
  };

  // !delete contacts
  let deleteContacts = async (id) => {
    await deleteDoc(collection(db, "cities", id));
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="App">
      {/* ! */}
      {/*  */}
      <div className="head">
        <div className="input">
          <input type="text" ref={name} />
          <input type="email" ref={email} />
          <button
            className="top-btn"
            onClick={(e) => {
              setContacts(name.current.value, email.current.value);
            }}
          >
            New Contact
          </button>
        </div>
      </div>
      {/*  */}

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        deleteContacts(`${user.id}`);
                        console.log("running");
                      }}
                    >
                      {" "}
                      <img className="dlt-icon" src="./bin.png" alt="" />
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
