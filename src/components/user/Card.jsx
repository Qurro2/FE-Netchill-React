import React from "react";

const Card = () => {
  return (
    <div className="container mx-auto mt-14 p-5 ">
      <p className="text-xl md:text-3xl text-white mb-5 font-bold">
        Alasan anda untuk bergabung dengan{" "}
        <span style={{ color: "red" }}>NETCHILL</span>
      </p>
      <hr className="w-full border-t-2 border-red-600 mb-8 md:hidden" />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="card">
            <div className="card-body bg-gradient-to-br from-slate-700 from-52% via-pink-900 via-60% to-slate-800  to-90% rounded-2xl sm:h-auto sm:w-auto">
              <p className="text-white font-bold text-3xl">
                Kisah yang dibuat sesuai dengan seleramu
              </p>
              <div className="flex justify-end items-end mt-10">
                <img src="/assets/creative.svg" alt="creative" width={100} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body bg-gradient-to-br from-slate-700 from-52% via-pink-900 via-60% to-slate-800  to-90% rounded-2xl sm:h-auto">
              <p className="text-white font-bold text-3xl">
                Berhenti atau ganti paket kapanpun anda mau
              </p>
              <div className="flex justify-end items-end mt-10">
                <img src="/assets/pay.svg" alt="pay" width={100} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body bg-gradient-to-br from-slate-700 from-52% via-pink-900 via-60% to-slate-800  to-90% rounded-2xl sm:h-auto">
              <p className="text-white font-bold text-3xl">
                Fitur khusus anak tanpa takut dengan film 18+
              </p>
              <div className="flex justify-end items-end mt-10">
                <img src="/assets/child.svg" alt="child" width={100} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body bg-gradient-to-br from-slate-700 from-52% via-pink-900 via-60% to-slate-800  to-90% rounded-2xl sm:h-auto">
              <p className="text-white font-bold text-3xl">
                Kapanpun dan dimanapun untuk menonton
              </p>
              <div className="flex justify-end items-end mt-10">
                <img src="/assets/every.svg" alt="every" width={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
