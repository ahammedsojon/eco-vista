import { getWindData } from "@/lib/weather-info";
import Image from "next/image";

const WindInfo = async ({ lat, lon }) => {
  const { speed, deg } = await getWindData(lat, lon);
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Wind</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icon_wind.png"
            alt="rain icon"
            height={70}
            width={70}
          />
          <h3 className="feature-title">{speed} meter/sec</h3>
          <span className="feature-name">{deg} degrees</span>
        </div>
      </div>
    </div>
  );
};

export default WindInfo;
