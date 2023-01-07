import React from "react"
import { useState } from "react";
import './Contact_Form.css'
function Contact_form(props){
  const[contact, setContact]= useState({
    name: "",
    type: "",
    message:""
})
const [name, setName] = useState("");
const namehandler = (event) => {
    setContact({...contact, name: event.target.value})
};
const [type, setType] = useState("");
const typehandler = (event) => {
    setContact({...contact, type: event.target.value})
};
const [message, setMessage] = useState("");
const messagehandler = (event) => {
    setContact({...contact, message: event.target.value})
};

const addHandler = (event) =>{
    event.preventDefault()
    setName("")
    setType("")
    setMessage("")
    console.log(contact)
    props.saveContactHandler(contact)
    setContact({
        name:"",
        type:"",
        message:""
    })
}
    return(
        <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : +216 20559357</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input type="text" class="app-form-control" placeholder="NAME" onChange={namehandler} value={contact.name}/>
                  </div>
                  <div class="app-form-group">
                  <div className="app-form-control">
                    <label>Type</label>
                    <select onChange={typehandler} value={contact.type}>
                    <option value="Technical">Technical</option>
                    <option value="Commercial">Commercial</option>
                    </select>
                </div>
                </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" placeholder="MESSAGE" onChange={messagehandler} value={contact.message}/>
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button" onClick={addHandler}>Add Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );

}
export default Contact_form ;