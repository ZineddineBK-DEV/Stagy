import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ApplicationList from "../pages/applications/ApplicationList";
import InternshipsPage from "../pages/internships/InternshipsPage";
import OffersPageLayout from "../pages/offers/OffersPageLayout";
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import OffersListPage from "../pages/offers/OffersListPage";
import SavedOffersPage from "../pages/offers/SavedOffersPage";
import ProfilePageLayout from "../pages/profile/ProfilePageLayout";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditProfilePage from "../pages/profile/EditProfilePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import PostJob from "../pages/home/PostJob";

const appRoutes: RouteType[] = [

  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/login",
    element: <LoginPage />,
    state: "login",
   },
   {
    path: "/register",
    element: <RegisterPage />,
    state: "register",
    },
  
  {
    path: "/home",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeIcon />
    }
  },
  {
    path: "/myRequests",
    element: <InternshipsPage />,
    state: "myRequests",
    sidebarProps: {
      displayText: "My internship request list",
      icon: <FormatListBulletedIcon />
    }
  },
  {
    path: "/applications/list",
    element: <ApplicationList />,
    state: "applications",
    sidebarProps: {
      displayText: "Manage applications",
      icon: <DashboardOutlinedIcon />
    },
  },
  
    {
      path: "/offers",
      element: <OffersPageLayout />,
      state: "offers",
      sidebarProps: {
        displayText: "Manage offers",
        icon: <WorkIcon />
      },
      child: [
        {
          path: "/offers/list",
          element: <OffersListPage />,
          state: "offers.list",
          sidebarProps: {
            displayText: "Browse offers"
          },
        },
        {
          path: "/offers/saved",
          element: <SavedOffersPage />,
          state: "offers.saved",
          sidebarProps: {
            displayText: "Saved offers"
          },
        },
      ]
    },
      {
        path: "/profile",
        element: <ProfilePageLayout />,
        state: "profile",
        sidebarProps: {
          displayText: "Profile",
          icon: <AccountCircleIcon />
        },
        child: [
          {
            path: "/profile/edit/:id",
            element: <EditProfilePage />,
            state: "profile.edit",
            sidebarProps: {
              displayText: "Edit profile"
            },
            
          },
        ]
    
   },
   {
    path: "/postJob",
    element: <PostJob />,
    state: "post.Job",
   }
];

export default appRoutes;