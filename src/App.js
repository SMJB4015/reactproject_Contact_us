import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Contact_form from './Components/Contact_Form';
import Contact from './Components/Contact';
import ContactFilter from './Components/ContactFilter';
function App() {
  const contactss = [
    {
      id: "e1",
      name: "Rachouen Nagara",
      type: "Technical",
      message: "Software Engnieer",
    },
    {  id: "e2",
    name: "Othmen Fayela",
    type: "Technical",
    message: "Mechanical Engnieer", },
    {
      id: "e2",
      name: "Sirine Ben Ahmed",
      type: "Commercial",
      message: "Electrical Engnieer",
    },
  ];
  const [contacts, setContacts]= useState(contactss);
  const [selectedType, setselectedType]= useState("")


  const addContact = (newContact)=>{
    setContacts([...contacts, newContact])
  }
  const saveContactHandler = (enteredContact) =>{
    const contactData = {
        ...enteredContact,
        id: Math.random().toString()
    }
    console.log(contactData)
    addContact(contactData)
}
  const filterContact = (selectedContact)=>{
    console.log(selectedContact)
  }
  var filterList = contacts
  if (selectedType != ""){
    filterList = filterList.filter((item) => {
      return item.type == selectedType
    });
  }
  const contactsList = filterList.map((contact) => (
    <Contact contact={contact}></Contact>
  ));
  return (
    <div className="App">
     <Contact_form saveContactHandler={saveContactHandler}></Contact_form>
     <div className="card contacts">
      <ContactFilter onChangeFilter={filterContact}></ContactFilter>
        {contactsList}
      </div>

    </div>
  );
}

export default App;
