import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";

const WeattherInfo = async ({ lat, lon }) => {
  const weather = await getWeatherData(lat, lon);
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Current Weather</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="rain icon"
            height={70}
            width={70}
          />
          <h3 className="feature-title">{weather.main}</h3>
          <span className="feature-name">{weather.description}</span>
        </div>
      </div>
    </div>
  );
};

export default WeattherInfo;
