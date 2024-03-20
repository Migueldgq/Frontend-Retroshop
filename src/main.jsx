/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer.jsx";
import { NavbarSearchedProducts } from "./components/NavbarSearchedProducts.jsx";
import SearchProductsPage from "./pages/SearchProductsPage.jsx";
import { MainPage } from "./pages/MainPage.jsx";
import ConfirmacionPassword from "./pages/ConfirmacionPassword.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { VerificationPage } from "./pages/VerificationPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { ReservationsPage } from "./pages/ReservationsPage.jsx";
import { PutUserPage } from "./pages/PutUserPage.jsx";
import { PutProductsPages } from "./pages/PutProductsPages.jsx";
import { ProductsUserPage } from "./pages/ProductsUserPage.jsx";
import CreateReview from "./pages/CreateReview.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import Error404 from "./pages/Error404.jsx";
import { DetailedProductPage } from "./pages/DetailedProductPage.jsx";
import { ReservationsSeller } from "./pages/ReservationSeller.jsx";
import SellerProductDetail from "./components/sellerProducts/SellerProductDetail.jsx";
import { DetailedProductSellerPage } from "./pages/DetailedProductSellerPage.jsx";
import { YourProductsPage } from "./pages/YourProductsPage.jsx";
import { FavoritesProductsPage } from "./pages/Favorites/FavoritesProductsPage.jsx";
import { FooterWeb } from "./components/FooterWeb.jsx";
import { Cookies } from "./pages/Cookies.jsx";
import { Policies } from "./pages/Policies.jsx";
// import {
//   SearchProductsPage,
//   CreateProduct,
//   LoginPage,
//   MainPage,
//   ProductsUserPage,
//   ProfilePage,
//   PutProductsPages,
//   RegisterPage,
//   ReservationsPage,
//   VerificationPage,
//   StatusReservation,
//   ConfirmacionPassword,
//   CreateReview,
//   PutUserPage,
//   Error404,
// } from "/pages";

const Layout = ({ children, showFooter = true }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    function resize() {
      setIsLargeScreen(window.innerWidth >= 1024);
    }

    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="">
      {children}
      <Outlet />
      {isLargeScreen ? showFooter && <FooterWeb /> : showFooter && <Footer />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Navbar />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <MainPage />,
      },

      {
        path: "/confirmacion/:reservationId/:email/:ruta",
        element: <ConfirmacionPassword />,
      },
      {
        path: "/review/:productId",
        element: <CreateReview />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Layout showFooter={false} />,
    children: [
      // {
      //   path: "/profile",
      //   element: <ProfilePage/>,
      // },

      {
        path: "/profile/login",
        element: <LoginPage />,
      },

      {
        path: "/profile/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile/validation/:verificationCode/:email",
        element: <VerificationPage />,
      },
      {
        path: "/profile/menu",
        element: <ProfilePage />,
      },

      {
        path: "/profile/modify/:productId",
        element: <PutProductsPages />,
      },

      {
        path: "/profile/products/user",
        element: <ProductsUserPage />,
      },

      {
        path: "/profile/cookies",
        element: <Cookies />,
      },
      {
        path: "/profile/policies",
        element: <Policies />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Layout showFooter={false} />,
    children: [
      {
        path: "/profile/seller",
        element: <ReservationsSeller />,
      },
      {
        path: "/profile/yourproducts",
        element: <YourProductsPage />,
      },
      {
        path: "/profile/reservations",
        element: <ReservationsPage />,
      },
      {
        path: "/profile/perfil",
        element: <PutUserPage />,
      },
      {
        path: "/profile/favorites",
        element: <FavoritesProductsPage />,
      },
      {
        path: "/profile/product/create",
        element: <CreateProduct />,
      },
    ],
  },
  {
    path: "/products",
    element: (
      <Layout>
        <Navbar />
      </Layout>
    ),
    children: [
      {
        path: "/products",
        element: <SearchProductsPage />,
      },
    ],
  },
  {
    path: "/products",
    element: (
      <Layout>
        <Navbar />
      </Layout>
    ),
    children: [
      {
        path: "/products/product",
        element: <DetailedProductPage />,
      },
      {
        path: "/products/productSeller",
        element: <DetailedProductSellerPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
