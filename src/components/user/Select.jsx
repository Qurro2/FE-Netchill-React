import React from "react";

const Select = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="h-screen flex flex-col justify-center items-center text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4 items-center justify-center">
            <a href="/browse">
              <div className="avatar flex flex-col ">
                <div className="w-24 rounded-xl">
                  <img src="/assets/pp.png" />
                </div>
                <p className="text-center">Nana Gajah</p>
              </div>
            </a>
            <a href="">
              <div className="avatar flex flex-col ">
                <div className="w-24 rounded-xl">
                  <img src="/assets/add.png" />
                </div>
                {/* <p className="text-center">ContohNama</p> */}
              </div>
            </a>
            <a href="">
              <div className="avatar flex flex-col ">
                <div className="w-24 rounded-xl">
                  <img src="/assets/add.png" />
                </div>
                {/* <p className="text-center">ContohNama</p> */}
              </div>
            </a>
            <a href="">
              <div className="avatar flex flex-col ">
                <div className="w-24 rounded-xl">
                  <img src="/assets/add.png" />
                </div>
                {/* <p className="text-center">ContohNama</p> */}
              </div>
            </a>
          </div>
          <div className="mt-4">
            <button className="btn btn-outline w-26">Manage Profiles</button>
          </div>
          <div className="mt-5">
            <p>Langsung klik Nana Gajah </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
