import { useState } from "react";
import Header from "../components/UI/Header";
import Sidebar from "../components/UI/Sidebar";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const DefaultLayout = () => {
  return (
    <div className=" h-full w-[100vw] scroll-smooth bg-[#000000] text-white backdrop-blur-sm md:w-full">
      <header className="sticky left-0 top-0 z-50 bg-[#000000] bg-opacity-75 backdrop-blur-sm backdrop-filter">
        <Navbar />
      </header>
      <main className="relative isolate z-10 mx-auto mb-10 w-[100vw] md:w-full">
        <ScrollToTop />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
