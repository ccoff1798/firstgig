import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import FooterImage from '../assets/images/footerImage2.jpg';
import BlueMesaRes1 from '../assets/images/BlueMesaRes1.jpg';

const Home = () => {

  return (
    <div className="card bg-white card-rounded">
      <div className="card-header bg-dark text-center text-light">
        <h1>Welcome to Blue Mesa Point</h1>
      </div>
      <div className="card-body m-5">
        <h2>Blue Mesa Point overlooks the largest body of water in Colorado, the Blue Mesa Reservoir</h2>
        <img src={FooterImage} alt="footer"className="img-fluid" />
        <h3>Blue Mesa Reservoir and The Black Canyon Of The Gunnison are right in the middle of paradise for hunting, fishing, boating, four wheeling, snowmobiling, skiing and every other type of outdoor activity. Blue Mesa Point is a great place for family fun and to get reacquainted with yourself and nature. You can have your boat in the water in 5 minutes at Lake Fork Marina or be on an ATV ride though thousands of miles of the most amazing country you have ever seen.</h3>
        <img src={BlueMesaRes1} alt="ResPhoto" className="img-fluid" />
      </div>
    </div>
  );
};

export default Home;
