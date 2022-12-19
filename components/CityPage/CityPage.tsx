import React, {useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite'
import { StyleSheet, Text, View } from 'react-native';
import WeatherStore from '../../store/weather'

export type TCityPage = {
  route: any;
}

export type TWeather = {
  temperature: number;
  weathercode: number;
}

const CityPage = ({ route }: TCityPage) => {
  const [weather, setWeather] = useState<TWeather | null>(null);
  const { itemId } = route.params;
  const city = WeatherStore.cities.find(({ id }) => id === itemId);

  useEffect(() => {
    // @ts-ignore
    WeatherStore.getCurrentWeather(city).then((response) => {
      setWeather(response.data.current_weather);
    })
  }, [])

  console.log(weather)

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {city?.name} </Text>
      {!weather && <Text> Загрузка информации... </Text>}
      {weather && (
        <View>
          <Text>
            Температура: {weather?.temperature}
          </Text>
          <Text>
            Скорость ветра: {weather?.weathercode}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    width: '100%',
    color: '#2287eb',
    textAlign: 'center',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
});

export default observer(CityPage);