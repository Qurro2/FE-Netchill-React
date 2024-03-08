import React from "react";

const Question = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="text-white px-2">
          <p className="text-xl font-semibold p-2">Sering banget ditanya</p>
          <div className="collapse collapse-plus bg-base-200 mt-10 w-2/2 sm:w-auto md:w-1/2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Apa itu NETCHILL?
            </div>
            <div className="collapse-content">
              <p className="font-semibold text-xl">
                NetChill adalah layanan streaming yang menawarkan berbagai acara
                TV pemenang penghargaan, film, anime, dokumenter, dan banyak
                lagi di ribuan perangkat yang terhubung ke Internet. Kamu bisa
                menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun –
                semuanya dengan satu harga bulanan yang murah. Selalu ada
                tontonan baru dan acara TV serta film baru yang ditambahkan
                setiap minggu!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-3 w-2/2 sm:w-auto md:w-1/2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Berapa sih paket NETCHILL?
            </div>
            <div className="collapse-content">
              <p className="font-semibold text-xl">
                Tonton NetChill di smartphone, tablet, Smart TV, laptop, atau
                perangkat streaming-mu, semuanya dengan satu harga bulanan tetap
                Rentang harga mulai dari Rp.5000 hingga Rp 25.000 per bulan.
                Tanpa biaya ekstra, tanpa kontrak.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-3 w-2/2 sm:w-auto md:w-1/2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Bagaimana membatalkan nya ?
            </div>
            <div className="collapse-content">
              <p className="font-semibold text-xl">
                Netchill fleksibel. Tanpa kontrak menyebalkan dan tanpa
                komitmen. Kamu dapat dengan mudah membatalkan akunmu secara
                online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau
                hentikan akunmu kapan pun.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-3 w-2/2 sm:w-auto md:w-1/2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Apa yang bisa ditonton di Netchill?
            </div>
            <div className="collapse-content">
              <p className="font-semibold text-xl">
                Netchill memiliki pustaka lengkap yang berisi film panjang, film
                dokumenter, acara TV, anime, Netflix original pemenang
                penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun
                kamu mau.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-3 w-2/2 sm:w-auto md:w-1/2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Apakah Netchill layak untuk anak-anak ?
            </div>
            <div className="collapse-content">
              <p className="font-semibold text-xl">
                Pengalaman Netchill Anak disertakan dalam keanggotaan agar kamu
                punya kontrol orang tua saat anak-anak menikmati acara TV dan
                film untuk keluarga di rumah. Profil anak dilengkapi kontrol
                orang tua yang dilindungi PIN sehingga kamu bisa membatasi
                rating usia konten yang bisa ditonton anak dan memblokir judul
                tertentu yang tidak boleh ditonton anak-anak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
