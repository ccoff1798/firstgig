import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Home = () => {

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center text-light">
        <h1>Welcome to Blue Mesa Point</h1>
      </div>
      <div className="card-body m-5">
        <h2>Home Page</h2>
      </div>
    </div>
  );
};

export default Home;
