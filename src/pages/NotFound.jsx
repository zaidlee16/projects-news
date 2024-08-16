import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className=" flex justify-center items-center flex-col h-screen ">
        <h2 className=" text-xl text-gray-700 ">Halaman Tidak Ditemukan</h2>

        <Link
          to={"/"}
          className=" mt-3 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition "
        >
          Kembali Ke Halaman Awal
        </Link>
      </div>
    </>
  );
};

export default NotFound;
