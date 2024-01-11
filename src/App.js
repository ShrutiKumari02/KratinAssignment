import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import {
  Home,
  ActivityTracker,
  Journal,
  MedicationReminder,
  SocialHub,
  HealthTips,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>Error: go back</div>,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <div>Error: while fetching home page</div>,
        },
        {
          path: "/activity-tracker",
          element: <ActivityTracker />,
          errorElement: <div>Error: while fetching activity page</div>,
        },
        { path: "/journal", element: <Journal /> },
        { path: "/medication", element: <MedicationReminder /> },
        { path: "/social", element: <SocialHub /> },
        { path: "/health-tips", element: <HealthTips /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/" exact component={ActivityTracker} />
    //       <Route path="/journal" component={Journal} />
    //       <Route path="/medication" component={MedicationReminder} />
    //       <Route path="/social" component={SocialHub} />
    //       <Route path="/health-tips" component={HealthTips} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
