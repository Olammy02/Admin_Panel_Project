import "./sidebar.css";
import {
  MdLineStyle,
  MdTimeline,
  MdTrendingUp,
  MdPerson,
  MdProductionQuantityLimits,
  MdOutlineAttachMoney,
  MdStackedBarChart,
} from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdLineStyle className="sidebarIcons" />
              Home
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className="sidebarIcons" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdPerson className="sidebarIcons" />
              Users
            </li>
            <li className="sidebarListItem">
              <MdProductionQuantityLimits className="sidebarIcons" />
              Products
            </li>
            <li className="sidebarListItem">
              <MdOutlineAttachMoney className="sidebarIcons" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <MdStackedBarChart className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdLineStyle className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcons" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className="sidebarIcons" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdLineStyle className="sidebarIcons" />
              Home
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className="sidebarIcons" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
