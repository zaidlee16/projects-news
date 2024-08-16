import React from "react";
import ModalComponent from "./ModalComponent";

const Card = ({ news, index }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={news.image.small}
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-xs text-gray-500 block">
          {formatDate(news.isoDate)}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mt-2">
          {news.title}
        </h3>
        <p className="text-gray-600 mt-2">{news.contentSnippet}</p>
        <ModalComponent news={news} />
      </div>
    </div>
  );
};

export default Card;
