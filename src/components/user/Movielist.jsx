import React, { useState, useEffect } from "react";
import axios from "axios";

const Movielist = () => {
  const [moviesTop, setMoviesTop] = useState([]);
  const [moviesTogether, setMoviesTogether] = useState([]);
  const [moviesContinue, setMoviesContinue] = useState([]);

  const getRandomTime = () => {
    const times = ["1 Minute ago", "3 days ago", "a week ago", "last month"];
    const randomIndex = Math.floor(Math.random() * times.length);
    return times[randomIndex];
  };

  const getBadge = () => {
    const date = ["Recently Added", "New", "Populer"];
    const randomDate = Math.floor(Math.random() * date.length);
    return date[randomDate];
  };

  const getRandomValue = () => {
    return Math.floor(Math.random() * 100); // Menghasilkan nilai acak antara 0 hingga 100
  };

  const getDataTop = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/trending/all/day`,
        {
          params: {
            api_key: `${import.meta.env.VITE_TMDB_KEY}`,
          },
        }
      );
      setMoviesTop(result.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataTogether = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/discover/tv`,
        {
          params: {
            api_key: `${import.meta.env.VITE_TMDB_KEY}`,
          },
        }
      );
      setMoviesTogether(result.data.results);
    } catch (error) {
      console.error("Gagal mendapatkan data", error);
    }
  };

  const getDataContinue = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/discover/movie`,
        {
          params: {
            api_key: `${import.meta.env.VITE_TMDB_KEY}`,
          },
        }
      );
      setMoviesContinue(response.data.results);
    } catch (error) {
      console.error("Gagal mendapatkan data", error);
    }
  };
  useEffect(() => {
    getDataTop();
    getDataTogether();
    getDataContinue();
  }, []);

  return (
    <>
      <div className="container mx-auto px-5">
        <div className="relative mt-5 text-white">
          <p className="text-xl md:text-2xl text-start">
            Top Picks for <span className="text-red-600">Nana Gajah</span>
          </p>
          <div className="carousel rounded-box gap-3 relative mt-3">
            {moviesTop &&
              moviesTop.length > 0 &&
              moviesTop.map((item, index) => (
                <div className="carousel-item relative" key={index}>
                  <a href="">
                    <div
                      className={`bg-red-500 rounded-xl z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white w-32 text-center
                    )}`}
                    >
                      <p>{getBadge()}</p>
                    </div>

                    <img
                      className="z-0"
                      src={`${import.meta.env.VITE_IMG_URL}/${
                        item.poster_path
                      }`}
                      alt={item.title}
                      width={220}
                    />
                  </a>
                </div>
              ))}
          </div>

          <div className="mt-5">
            <p className="text-xl md:text-2xl text-start">
              Family Watch Together
            </p>
            <div className="carousel rounded-box gap-3 relative mt-3">
              {moviesTogether &&
                moviesTogether.length > 0 &&
                moviesTogether.map((item, index) => (
                  <div className="carousel-item relative" key={index}>
                    <a href="">
                      <div className="bg-red-500 rounded-xl z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white w-32 text-center">
                        <p>{item.popularity}</p>
                      </div>
                      <img
                        className=" z-0 "
                        src={`${import.meta.env.VITE_IMG_URL}/${
                          item.poster_path
                        }`}
                        alt={item.title}
                        width={220}
                      />
                    </a>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xl md:text-2xl text-start ">
              Continue Watch for{" "}
              <span className="text-red-600">Nana Gajah</span>
            </p>
            <div className="carousel rounded-box gap-3 relative mt-3">
              {moviesContinue &&
                moviesContinue.length > 0 &&
                moviesContinue.map((item, index) => (
                  <div className="carousel-item relative" key={index}>
                    <a href="">
                      <div className="bg-red-500 rounded-xl z-10 absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white w-32 text-center text-sm">
                        <p>{getRandomTime()}</p>
                      </div>
                      <img
                        className="z-0"
                        src={`${import.meta.env.VITE_IMG_URL}/${
                          item.poster_path
                        }`}
                        alt={item.title}
                        width={220}
                      />
                      <progress
                        className="progress progress-error absolute bottom-0 left-0 w-full"
                        value={getRandomValue()}
                        max="100"
                      ></progress>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movielist;
