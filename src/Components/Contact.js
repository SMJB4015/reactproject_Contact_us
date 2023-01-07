
import "./Contact.css";


function Contact(props) {
  return (
    <div className="contact-item">
      {/* Contact Description */}
      <div className="contact-item__description">
        {/* Contact Name */}
        <h2>{props.contact.name}</h2>
        <h3>{props.contact.message}</h3>
        <button class="app-form-button" onClick={props.delete(props.contact.id)}>Del</button>
        {/* Contact Type */}
        <div className="contact-item__type"> {props.contact.type}</div>
      </div>
    </div>
  );
}

export default Contact;
