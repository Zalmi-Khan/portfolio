import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/layouts";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default MainLayout;
