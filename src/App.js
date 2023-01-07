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
      message: "Probleme coupure d'internet",
    },
    {  id: "e2",
    name: "Othmen Fayela",
    type: "Technical",
    message: "Debit d'internt est tres faible", },
    {
      id: "e2",
      name: "Sirine Ben Ahmed",
      type: "Commercial",
      message: "j'ai pas recu ma facture",
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
  const filterContact = (selectedT)=>{
    setselectedType(selectedT.target.value)
  }
  var filterList = contacts
  if (selectedType != ""){
    filterList = filterList.filter((item) => {
      console.log(item.type)
      console.log(selectedType)
      return item.type == selectedType
    });
  }
  const removeContact = (id)=>{
     //const filterList = filterList.filter((contact)=>{
      //return contact.id != id ;
    //})
  }
  const contactsList = filterList.map((contact) => (
    <Contact contact={contact} delete={removeContact}></Contact>
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
