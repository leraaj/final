import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Loading from "./pages/others/Loading";
import InternalLayout from "./components/shared/layouts/Internal/InternalLayout";
import Gdrive from "./pages/external/gdrive/Gdrive";
// Internal
const Accounts = lazy(() => import("./pages/internal/accounts/Accounts"));
const Applicants = lazy(() => import("./pages/internal/applicants/Applicants"));
const Clients = lazy(() => import("./pages/internal/clients/Clients"));
const Jobs = lazy(() => import("./pages/internal/jobs/Jobs"));
const Posts = lazy(() => import("./pages/internal/posts/Posts"));
// External
const Landing = lazy(() => import("./pages/external/landing/Index"));
const Login = lazy(() => import("./pages/external/login/Login"));
const Register = lazy(() => import("./pages/external/register/Register"));
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
          path="/gdrive"
          element={
            <Suspense fallback={<Loading />}>
              <Gdrive />
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
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </>
  );
}

export default App;
