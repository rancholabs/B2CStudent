// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import ViewBatches from "layouts/viewBatches";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Class from "layouts/class/Class.js";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: "",
    route: "/dashboard",
    sidebar: "yes",

    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Enroll Courses",
    key: "viewBatches",
    icon: "",
    route: "/viewBatches",
    sidebar: "yes",

    component: <ViewBatches />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: "",
    route: "/tables",
    sidebar: "yes",

    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: "",
    route: "/billing",
    sidebar: "yes",

    component: <Billing />,
  },

  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: "",
    route: "/notifications",
    sidebar: "yes",

    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: "",
    route: "/profile",
    sidebar: "yes",

    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: "",
    route: "/authentication/sign-in",
    sidebar: "yes",

    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: "",
    route: "/authentication/sign-up",
    sidebar: "yes",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "View Class",
    key: "view-class",
    icon: "",
    route: "/view-class",
    sidebar: "no",
    component: <Class />,
  },
];

export default routes;
