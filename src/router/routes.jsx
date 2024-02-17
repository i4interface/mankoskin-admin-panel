import { lazy } from "react"
const Index = lazy(() => import("../pages/Index"))
const Analytics = lazy(() => import("../pages/Analytics"))
const Todolist = lazy(() => import("../pages/Apps/Todolist"))
const Mailbox = lazy(() => import("../pages/Apps/Mailbox"))
const Chat = lazy(() => import("../pages/Apps/Chat"))
const Calendar = lazy(() => import("../pages/Apps/Calendar"))
const List = lazy(() => import("../pages/Apps/Invoice/List"))
const Preview = lazy(() => import("../pages/Apps/Invoice/Preview"))
const Add = lazy(() => import("../pages/Apps/Invoice/Add"))
const Edit = lazy(() => import("../pages/Apps/Invoice/Edit"))
const ProductReviews = lazy(()=>import("../pages/Apps/Invoice/ProductReviews"))
const Profile = lazy(() => import("../pages/Users/Profile"))
const AccountSetting = lazy(() => import("../pages/Users/AccountSetting"))
const LoginBoxed = lazy(() => import("../pages/Authentication/LoginBoxed"))
const RegisterBoxed = lazy(() =>import("../pages/Authentication/RegisterBoxed"))
const About = lazy(() => import("../pages/About"))
const Error = lazy(() => import("../components/Error"))
const Attributevalues = lazy(()=>import("../pages/Apps/Invoice/Attributevalues"))

const routes = [
  // dashboard
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/apps/todolist",
    element: <Todolist />
  },
  {
    path: "/apps/mailbox",
    element: <Mailbox />
  },
  {
    path: "/apps/invoice/list",
    element: <List />
  },
  // Apps page
  {
    path: "/apps/chat",
    element: <Chat />
  },

  {
    path: "/apps/calendar",
    element: <Calendar />
  },
  // preview page
  {
    path: "/apps/invoice/preview",
    element: <Preview />
  },
  {
    path: "/apps/invoice/add",
    element: <Add />
  },
  {
    path: "/apps/invoice/attributevalues",
    element: <Attributevalues/>

  },
  {
    path: "/apps/invoice/edit",
    element: <Edit />
  },
  {
    path:"/apps/invoice/productreviews",
    element:<ProductReviews/>
  },

  // Users page
  {
    path: "/users/profile",
    element: <Profile />
  },
  {
    path: "/users/user-account-settings",
    element: <AccountSetting />
  },
  //Authentication
  {
    path: "/auth/boxed-signin",
    element: <LoginBoxed />,
    layout: "blank"
  },
  {
    path: "/auth/boxed-signup",
    element: <RegisterBoxed />,
    layout: "blank"
  },
  //forms page
  {
    path: "/about",
    element: <About />,
    layout: "blank"
  },
  {
    path: "*",
    element: <Error />,
    layout: "blank"
  }
]

export { routes }
