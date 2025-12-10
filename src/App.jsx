import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/Searchpage";
import MovieDetails from "./pages/MovieDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Favorites from "./pages/Favorite";
import Layout from "./component/Layout";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/favorite"
        element={
          <PrivateRoute>
            <Layout>
              <Favorites />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/Searchpage"
        element={
          <PrivateRoute>
            <Layout>
              <SearchPage />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/movie/:id"
        element={
          <PrivateRoute>
            <Layout>
              <MovieDetails />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
