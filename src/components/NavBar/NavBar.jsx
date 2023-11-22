import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'

const NavBar = ({ user, setUser }) => {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null)
  }
  return (
    <nav>
      <Link to="/notes">My Notes</Link>
      &nbsp; | &nbsp;
      <Link to="/notes/new">New Note</Link>
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
};




export default NavBar;
