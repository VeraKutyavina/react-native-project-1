import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import {useState} from "react";

type TCity = {
  id: string;
  name: string;
  breadth: number;
  length: number;
}

class Weather {
  cities: TCity[] = [
    { id: '1', name: 'Kazan', breadth: 55.79, length: 49.12 },
    { id: '2', name: 'Moscow', breadth: 55.75, length: 37.62 },
    { id: '3', name: 'Istanbul', breadth: 41.01, length: 28.95 },
    { id: '4', name: 'Seoul', breadth: 37.57, length: 126.98 },
  ];

  constructor() {
    makeAutoObservable(this)
  }

  getCurrentWeather = async (city: TCity) => {
    return await axios
      .get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: city.length,
          longitude: city.breadth,
          timezone: 'Europe/Moscow',
          current_weather: true,
        }
      });
  }
}

export default new Weather();