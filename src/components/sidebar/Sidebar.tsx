import './sidebar.scss';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>CATS APP</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>Cats</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <AirplaneTicketOutlinedIcon className='icon' />
              <span>Cat List</span>
            </li>
          </Link>
          <p className='title'>All Breeds</p>
          <Link to='/breeds' style={{ textDecoration: 'none' }}>
            <li>
              <AirplaneTicketOutlinedIcon className='icon' />
              <span>All Breeds</span>
            </li>
          </Link>
          <p className='title'>My Favorites</p>
          <Link to='/favorites' style={{ textDecoration: 'none' }}>
            <li>
              <AirplaneTicketOutlinedIcon className='icon' />
              <span>My Favorite</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
