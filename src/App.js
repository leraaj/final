import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Loading from "./pages/others/Loading";
import InternalLayout from "./components/shared/layouts/Internal/InternalLayout";
import Gdrive from "./pages/external/gdrive/Gdrive";

// Internal - Admin
const Accounts = lazy(() => import("./pages/internal/accounts/Index"));
const Applicants = lazy(() => import("./pages/internal/applicants/Index"));
const Clients = lazy(() => import("./pages/internal/clients/Index"));
const Jobs = lazy(() => import("./pages/internal/jobs/Index"));
const Posts = lazy(() => import("./pages/internal/posts/Index"));
// Internal - Applicant, Client
const Profile = lazy(() => import("./pages/internal/profile/Index"));
const Order = lazy(() => import("./pages/internal/order/Index"));
const MediaFiles = lazy(() => import("./pages/internal/mediaFiles/Index"));
// External
const Landing = lazy(() => import("./pages/external/landing/Index"));
const Login = lazy(() => import("./pages/external/login/Index"));
const Register = lazy(() => import("./pages/external/register/Index"));
// Others
const NotFound = lazy(() => import("./pages/others/NotFound"));
function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      {/* Landing Route */}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Landing />
            </Suspense>
          }
        />
        {/* Login Route */}
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        {/* Register Route */}
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <InternalLayout />
            </Suspense>
          }>
          {/* Accounts Route */}
          <Route path="/accounts" element={<Accounts />} />
          {/* Applicants Route */}
          <Route path="/applicants" element={<Applicants />} />
          {/* Clients Route */}
          <Route path="/clients" element={<Clients />} />
          {/* Jobs Route */}
          <Route path="/jobs" element={<Jobs />} />
          {/* Posts Route */}
          <Route path="/posts" element={<Posts />} />
          {/* Profile Route */}
          <Route path="/profile" element={<Profile />} />
          {/* Order Route */}
          <Route path="/order" element={<Order />} />
          {/* MediaFiles Route */}
          <Route path="/mediaFiles" element={<MediaFiles />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Route
          path="/gdrive"
          element={
            <Suspense fallback={<Loading />}>
              <Gdrive />
            </Suspense>
          }
        /> */
}
