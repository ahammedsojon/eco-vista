import { getTemperatureData } from "@/lib/weather-info";
import Image from "next/image";

const TempeatureInfo = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTemperatureData(lat, lon);
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Current Temperature</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icon_tempareture.png"
            alt="rain icon"
            height={70}
            width={70}
          />
          <h3 className="feature-title">{temp}°C</h3>

          <span className="feature-name">Feels Like {feels_like}°C</span>
        </div>
      </div>
    </div>
  );
};

export default TempeatureInfo;
