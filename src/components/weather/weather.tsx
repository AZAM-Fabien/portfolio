import React, { useState, useEffect } from 'react';
import * as S from './weather_style';

const Weather: React.FC = () => {
  const [weatherTemp, setWeatherTemp] = useState<string>('Obtention des informations météorologiques...');
  const [weather, setWeather] = useState<string>('Obtention des informations météorologiques...');
  const [city, setCity] = useState<string>('Obtention du nom de la ville...');

  const apiKey = '83770f05d6403271940300c3b850da1e'; // Remplacez par votre clé API

  const fetchWeather = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      setWeather(`${description}`);
      setWeatherTemp(`${temperature}°C`);
    } catch (error) {
      setWeather('Impossible d\'obtenir les informations météorologiques.');
      console.error('Erreur:', error);
    }
  };

  const fetchCity = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const cityName = data[0].name;
      setCity(`${cityName}`);
    } catch (error) {
      setCity('Impossible d\'obtenir le nom de la ville.');
      console.error('Erreur:', error);
    }
  };

  const firstLine = `${city} (${weatherTemp})`;
  const secondLine = `${weather}`;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeather(lat, lon);
          fetchCity(lat, lon);
        },
        (error) => {
          setWeather('Impossible d\'obtenir votre localisation.');
          setCity('Impossible d\'obtenir votre localisation.');
          console.error('Erreur:', error);
        }
      );
    } else {
      setWeather('La géolocalisation n\'est pas supportée par votre navigateur.');
      setCity('La géolocalisation n\'est pas supportée par votre navigateur.');
    }
  }, []);

  return (
    <S.WeatherContainer>
      <S.Text>{firstLine}</S.Text>
      <S.Text>{secondLine}</S.Text>
    </S.WeatherContainer>
  );
};

export default Weather;
