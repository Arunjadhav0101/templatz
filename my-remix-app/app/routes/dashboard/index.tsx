// app/routes/dashboard/index.jsx
import { Outlet, Link } from "@remix-run/react";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="settings">Settings</Link></li>
          <li><Link to="u">Users</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}