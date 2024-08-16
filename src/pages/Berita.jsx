import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useDate from "../hooks/useDate";
import Loading from "../components/Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Berita = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dayName, date, monthName, years } = useDate();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [countBerita, setCountBerita] = useState(6);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const loadBerita = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setCountBerita((prev) => prev + 6);
      setLoadingBtn(false);
    }, 2000);
  };

  const getBerita = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://berita-indo-api-next.vercel.app/api/cnn-news/${id}`
      );

      setBerita(response.data.data);
    } catch (error) {
      if (error.response.status === 400) {
        navigate("/not-found");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBerita();
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className="p-5 md:p-10">
          <Slider {...settings}>
            {berita.slice(0, 5).map((news, index) => (
              <div key={index}>
                <img
                  src={news.image.small}
                  alt={news.title}
                  className="w-full rounded-lg"
                />
                <div className="p-2 mt-3">
                  <h2 className="font-bold text-xl">{news.title}</h2>
                </div>
              </div>
            ))}
          </Slider>

          <h2 className="mt-10 text-center text-3xl font-bold text-gray-800 mb-10">
            Berita {location.pathname.substring(1)} - {dayName}, {date}{" "}
            {monthName} {years}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {berita.slice(0, countBerita).map((news, index) => (
              <Card key={index} news={news} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            {loadingBtn ? (
              <h2 className="text-xl text-gray-700">Loading...</h2>
            ) : (
              <button
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
                onClick={loadBerita}
              >
                Lihat Berita Lainnya
              </button>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default Berita;
