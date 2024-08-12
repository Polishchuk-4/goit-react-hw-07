import { useSelector } from "react-redux";

import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { FaUser } from "react-icons/fa";
import { selectContacts } from "../../redux/selectors";

// const getFilterContacts = (contacts, nameFilter) => {
//   return contacts.filter((contact) => {
//     return contact.username.toLowerCase().includes(nameFilter.toLowerCase());
//   });
// };
export default function ContactList() {
  const visibleContacts = useSelector(selectContacts);
  return (
    <ul className={style.contacts}>
      {visibleContacts.map((contact) => (
        <li className={style.contactsItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
