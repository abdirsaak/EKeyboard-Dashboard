// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";

// Soft UI Dashboard React icons
import CustomerSupport from "examples/Icons/CustomerSupport";
import Document from "examples/Icons/Document";
import Office from "examples/Icons/Office";
import Shop from "examples/Icons/Shop";
import CompletedOrders from "layouts/completed-orders";
import Manage from "layouts/manage";
import Orders from "layouts/orders";
import PendingOrders from "layouts/pending-orders";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Manage product",
    key: "manage",
    route: "/manage",
    icon: <Office size="12px" />,
    component: <Manage />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    route: "/orders",
    icon: <Office size="12px" />,
    component: <Orders />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <Document size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },

  { type: "title", title: "Reports", key: "account-pages" },
  {
    type: "collapse",
    name: "Completed orders",
    key: "completed-orders",
    route: "/completed-orders",
    icon: <CustomerSupport size="12px" />,
    component: <CompletedOrders />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Pending orders",
    key: "pending-orders",
    route: "/pending-orders",
    icon: <Document size="12px" />,
    component: <PendingOrders />,
    noCollapse: true,
  },
];

export default routes;
