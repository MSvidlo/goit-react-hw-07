
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  ContactFrom from './components/ContactForm/ContactForm';
import ContacList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch()
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactFrom />
      <SearchBox />
      <ContacList />
    </div>
  );
};

export default App;
 
