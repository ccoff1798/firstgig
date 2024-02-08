import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import NavTabs from './components/NavTabs.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Footer from './components/Footer.jsx';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <NavTabs />
      

      <Outlet />

      <Footer/>


    </ApolloProvider>
  );
}

export default App;
