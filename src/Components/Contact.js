
import "./Contact.css";


function Contact(props) {
  return (
    <div className="expense-item">
      {/* Contact Description */}
      <div className="expense-item__description">
        {/* Contact Name */}
        <h2>{props.contact.name}</h2>
        <h3>{props.contact.message}</h3>
        {/* Contact Type */}
        <div className="expense-item__price">$ {props.contact.type}</div>
      </div>
    </div>
  );
}

export default Contact;
