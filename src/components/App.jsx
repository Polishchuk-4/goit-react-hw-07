import Layout from "./Layout/Layout";
import Title from "./Title/Title";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import Loader from "./Loader/Loader";

import { fetchContacts } from "../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading } from "../redux/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Title />
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
    </Layout>
  );
}
