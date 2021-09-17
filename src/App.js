import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {});

  const addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.some((contact) => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    return setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleFilter = (text) => {
    setFilter(text);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm onSubmit={addContact} />

      <SecondaryTitle>Contacts</SecondaryTitle>

      <Filter onChange={handleFilter} value={filter} />
      <ContactList contacts={visibleContacts()} deleteId={deleteContact} />
    </>
  );
}

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const storageContacts = localStorage.getItem("contacts");
//     const storageContactsParced = JSON.parse(storageContacts);
//     if (storageContactsParced) {
//       this.setState({ contacts: storageContactsParced });
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   handleFilter = (text) => {
//     this.setState({ filter: text });
//   };

//   visibleContacts = () => {
//     const { filter, contacts } = this.state;

//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   addContact = (name, number) => {
//     const { contacts } = this.state;
//     const newContact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//     contacts.some((contact) => contact.name === newContact.name)
//       ? alert(`${newContact.name} is already in contacts`)
//       : this.setState({
//           contacts: [newContact, ...contacts],
//         });
//   };

//   deleteContact = (id) => {
//     const { contacts } = this.state;
//     this.setState({
//       contacts: contacts.filter((contact) => contact.id !== id),
//     });
//   };

//   render() {
//     const { addContact, handleFilter, visibleContacts, state, deleteContact } =
//       this;
//     return (
//       <>
//         <PrimaryTitle>Phonebook</PrimaryTitle>
//         <ContactForm onSubmit={addContact} />

//         <SecondaryTitle>Contacts</SecondaryTitle>

//         <Filter onChange={handleFilter} value={state.filter} />
//         <ContactList contacts={visibleContacts()} deleteId={deleteContact} />
//       </>
//     );
//   }
// }

export default App;
