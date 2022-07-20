// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import ViewBatches from "layouts/viewBatches";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: "",
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "View Batches",
    key: "viewBatches",
    icon: "",
    route: "/viewBatches",
    component: <ViewBatches />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: "",
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: "",
    route: "/billing",
    component: <Billing />,
  },

  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: "",
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: "",
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: "",
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: "",
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
