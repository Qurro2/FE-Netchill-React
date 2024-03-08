import React from "react";
import NavbarWithlogin from "../navigation/NavbarWithlogin";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover filter brightness-75"
          src="/src/assets/bg.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black"></div>
      </div>
      <div className="absolute inset-x-0 top-0 z-10">
        <NavbarWithlogin />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-0">
        <div className="text-center px-4">
          <h1 className="font-bold text-4xl md:text-5xl">
            Nonton Film Atau Series ? <br />
            Di <span style={{ color: "red" }}>NETCHILL</span> Tempatnya
          </h1>
          <p className="mt-3 md:mt-5 text-lg font-semibold">
            Harga mulai dari Rp.5000. Batalkan Kapanpun H-1 Kiamat
          </p>
          <p className="mt-3 md:mt-5">
            Siapkan cemilan dan minuman , Lalu jadilah anggota NetChill
          </p>
          <button className="btn mt-6 md:mt-10 md:w-96 md:h-14 w-72 sm:w-2/3 bg-red-600 text-white hover:bg-red-500">
            Daftar
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-red-600"></div>
    </div>
  );
};

export default Home;
