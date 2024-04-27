import AqiInfo from "@/components/AqiInfo";
import NoLocation from "@/components/NoLocation";
import { getResolvedLatLon } from "@/lib/location-info";

export default async function WeatherPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolvedLocation = await getResolvedLatLon(
    location,
    latitude,
    longitude
  );
  if (resolvedLocation?.lat && resolvedLocation?.lon) {
    return <AqiInfo lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />;
  } else {
    return <NoLocation />;
  }
}
