
export default function App() {
  return (
    <Router>
      <div class="container">
        <header class=".header">
          <div class="header__col">
            <i class="fas fa-bars" onclick="navToggle(); "></i>
            <a href="./index.html">
              <span class="brand-logo-1">
                Inven<span class="tory">Tory.</span>
              </span>
            </a>
          </div>

          <div class="nav-right">
            <i class="bx bx-search-alt-2"></i>

            <i class="far fa-bell"></i>

            <div class="user-wrapper">
              <img
                src={avatar}
                width="40px"
                height="40px"
                class="avatar"
                alt=""
              />

              <div class="nav__dropdown">
                <div class="admin-details">
                  <span class="admin-name">John Doe</span>
                  <span class="admin-pos">Admin</span>
                </div>
                <div class="dropwdown-list">
                  <i class="far fa-user-circle nav-icon"></i>
                  <a href="./profile.html" class="drop-link">
                    Update Profile
                  </a>
                </div>
                <div class="dropwdown-list">
                  <i class="far fa-user-circle nav-icon"></i>
                  <a class="drop-link">View Profile</a>
                </div>
                <div class="dropwdown-list">
                  <i class="fas fa-key nav-icon"></i>
                  <a class="drop-link"> Change Password</a>
                </div>
                <div class="dropwdown-list">
                  <i class="fas fa-power-off nav-icon"></i>
                  <a class="drop-link"> Log Out</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Sidebar */}

        <div class="sidebar">
          <div class="sidebar-wrap">
            <ul class="sidebar-menu">
              <li class="sidebar__list">
                <a href="./index.html" class="sidebar__link">
                  <i class="fas fa-chart-line sidebar-icon"></i>
                  <Link to="/dashboard" class="sidebar__link">
                    Dashboard
                  </Link>
                </a>
              </li>

              <li class="sidebar__list">
                <a href="#" class="sidebar__link">
                  <i class="fas fa-user-circle sidebar-icon"></i>
                  <Link to="/profile" class="sidebar__link">
                    Profile
                  </Link>
                </a>
              </li>
              <li class="sidebar__list">
                <i class="far fa-clipboard sidebar-icon"></i>
                <Link to="/login" class="sidebar__link">
                  Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

