import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <div className={css.contactCard}>
      <ul className={css.contactList}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button>Delete</button>
    </div>
  );
}
