import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home Page</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>Sayanara</h2>
      </footer>
    </div>
  );
};

export default Layout;
