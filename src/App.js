import { useState, useEffect } from "react";
import Panel from "./components/Panel/Panel";
import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container/Container";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter";

import "./index.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addNewContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    if (contacts.some((item) => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    setContacts((state) => [contact, ...state]);
  };

  const onFilterChange = (event) => {
    setFilter(event.currentTarget.value);
  };
  const getResultOfContacts = () => {
    if (filter === "") {
      return contacts;
    } else {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  const deleteContact = (contId) => {
    setContacts((state) => state.filter((contact) => contact.id !== contId));
  };

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <header>
        <Container>
          <Panel title="Phonebook">
            <ContactForm onSubmit={addNewContact} />
          </Panel>
        </Container>
      </header>

      <section>
        <Container>
          <Filter onFilterChange={onFilterChange} />

          {contacts.length === 0 ? (
            <p className="notifications">There are not any contacts...</p>
          ) : (
            <ContactsList
              contacts={getResultOfContacts()}
              deleteContact={deleteContact}
            />
          )}
        </Container>
      </section>
    </>
  );
}

// class App extends React.Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {
//       localStorage.setItem("contacts", JSON.stringify(nextContacts));
//     }
//   }

//   addNewContact = (name, number) => {
//     const { contacts } = this.state;
//     const contact = {
//       id: uuidv4(),
//       name,
//       number,
//     };
//     if (contacts.some((item) => item.name === contact.name)) {
//       alert(`${contact.name} is already in contacts!`);
//       return;
//     }

//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };

//   deleteContact = (contId) => {
// this.setState((prevState) => ({
//   contacts: prevState.contacts.filter((contact) => contact.id !== contId),
// }));
//   };
//   onFilterChange = (e) => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };
//   getResultOfContacts = () => {
//     const { contacts, filter } = this.state;
//     if (filter === "") {
//       return contacts;
//     } else {
//       return contacts.filter((contact) =>
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//       );
//     }
//   };

//   render() {
// return (
//   <>
//     <header>
//       <Container>
//         <Panel title="Phonebook">
//           <ContactForm onSubmit={this.addNewContact} />
//         </Panel>
//       </Container>
//     </header>

//     <section>
//       <Container>
//         <Filter onFilterChange={this.onFilterChange} />

//         {this.state.contacts.length === 0 ? (
//           <p className="notifications">There are not any contacts...</p>
//         ) : (
//           <ContactsList
//             contacts={this.getResultOfContacts()}
//             deleteContact={this.deleteContact}
//           />
//         )}
//       </Container>
//     </section>
//   </>
// );
//   }
// }

export default App;
