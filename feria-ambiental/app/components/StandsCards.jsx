"use client"
import React, { useState, useEffect } from "react";
import '@/styles/stands.css'; // Asegúrate de ajustar la ruta según la ubicación de tu archivo CSS

const StandsCards = () => {
  const [standsData, setStandsData] = useState([]);

  useEffect(() => {
    // Simulación de la carga de datos desde standsdata.json
    fetch("/data/standsdata.json")
      .then(response => response.json())
      .then(data => setStandsData(data))
      .catch(error => console.error("Error fetching stands data:", error));
  }, []);

  const toggleDetails = (standIndex) => {
    setStandsData((prevData) => {
      const updatedData = [...prevData];
      updatedData[standIndex] = {
        ...updatedData[standIndex],
        showFullText: !updatedData[standIndex].showFullText,
      };
      return updatedData;
    });
  };

  return (
    <div className="flex justify-center items-center flex-wrap p-4">
      {standsData.map((stand, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-2xl m-4">
          <img className="w-full" src={stand.image} alt={stand.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{stand.name}</div>
            <p className="text-gray-700 text-base">
              {stand.showFullText
                ? `${stand.initialText} ${stand.fullText}`
                : stand.initialText}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => toggleDetails(index)}
            >
              {stand.showFullText ? "Mostrar menos" : "Learn More"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StandsCards;