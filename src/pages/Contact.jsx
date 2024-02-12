import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Contact = () => {

  return (
    <div>
      <div >
        <h1>Contact Us!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Interested In Booking Your Stay?</h2>
        <li className='no-bullets margin-auto'>Email: <a href="mailto:Info@BlueMesaPoint.com">Info@BlueMesaPoint.com</a></li>
        <ul className='no-bullets margin-auto'>Phone Numbers
            <li>Campground: 970-641-3086</li>
            <li>
                Boating Supplies: 970-641-3076
            </li>
        </ul>

      </div>
      
    </div>
  );
};

export default Contact;
