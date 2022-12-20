import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Wrapper, Message } from './App.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFormSubmit = info => {
    const isContactRepeat = this.state.contacts.find(
      el => el.name === info.name
    );
    if (isContactRepeat) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      ...info,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onInputChange = filter => {
    this.setState({
      filter,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteToDo = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.onFormSubmit} />
        {this.state.contacts.length > 0 ? (
          <>
            <h2>Contacts</h2>
            <Filter onInputChange={this.onInputChange} />
            <ContactList list={filteredContacts} deleteToDo={this.deleteToDo} />
          </>
        ) : (
          <Message>Contacts list is empty yet</Message>
        )}
      </Wrapper>
    );
  }
}
