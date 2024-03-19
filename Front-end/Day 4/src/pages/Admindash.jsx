import { useEffect } from 'react';
import '../assets/css/admindash.css'; // Make sure to import the CSS file correctly

const Dashboard = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    const modeToggle = body.querySelector('.mode-toggle');
    const sidebar = body.querySelector('nav');
    const sidebarToggle = body.querySelector('.sidebar-toggle');

    let getMode = localStorage.getItem('mode');
    if (getMode && getMode === 'dark') {
      body.classList.toggle('dark');
    }

    let getStatus = localStorage.getItem('status');
    if (getStatus && getStatus === 'close') {
      sidebar.classList.toggle('close');
    }

    modeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark');
      } else {
        localStorage.setItem('mode', 'light');
      }
    });

    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('close');
      if (sidebar.classList.contains('close')) {
        localStorage.setItem('status', 'close');
      } else {
        localStorage.setItem('status', 'open');
      }
    });
  }, []);

  return (
    <div>
      <nav>
        <div className="logo-name">
          <div className="logo-image">
            <img src="images/logo.png" alt="Logo" />
          </div>
          <span className="logo_name">TVK</span>
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
                <span className="link-name">Dashboard</span>
              </a>
            </li>
            {/* Add more list items for navigation */}
            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
                <span className="link-name">Orders</span>
              </a>

              <a href="#">
                <i className="uil uil-estate"></i>
                <span className="link-name">Users</span>
              </a>
            </li>
          </ul>

          <ul className="logout-mode">
            <li>
              <a href="#">
                <i className="uil uil-signout"></i>
                <span className="link-name">Logout</span>
              </a>
            </li>
            <li className="mode">
              <a href="#">
                <span className="link-name">Dark Mode</span>
                <i className="uil uil-moon"></i>
              </a>
              <div className="mode-toggle">
                <span className="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <section className="dashboard">
        <div className="top">
          {/* Sidebar toggle and search box */}
          <div className="sidebar-toggle">⫸</div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="uil uil-search"></i>
          </div>
        </div>

        <div className="dash-content">
          {/* Overview section */}
          <div className="overview">
            <div className="title">
              {/* Dashboard icon and text */}
              <i className="uil uil-dashboard"></i>
              <span className="text">Dashboard</span>
            </div>

            <div className="boxes">
              {/* Boxes for data */}
              <div className="box">
                <i className="uil uil-shopping-cart"></i>
                <span className="text">Sales</span>
                <span className="number">1000</span>
              </div>
              {/* Add more boxes */}
              <div className="box">
                <i className="uil uil-shopping-cart"></i>
                <span className="text">Orders</span>
                <span className="number">990</span>
              </div>

              <div className="box">
                <i className="uil uil-shopping-cart"></i>
                <span className="text">Users</span>
                <span className="number">777</span>
              </div>
            </div>
          </div>

          {/* Activity section */}
          <div className="activity">
            <div className="title">
              {/* Recent activity icon and text */}
              <i className="uil uil-activity"></i>
              <span className="text">Recent Activity</span>
            </div>

            <div className="activity-data">
              {/* Activity data */}
              <div className="data">
                <span className="data-title">Total Orders</span>
                <span className="data-list">500</span>
              </div>
              {/* Add more activity data */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
