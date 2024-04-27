import NoLocation from "@/components/NoLocation";
import TempeatureInfo from "@/components/TempeatureInfo";
import { getResolvedLatLon } from "@/lib/location-info";

export default async function TemperaturePage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolvedLocation = await getResolvedLatLon(
    location,
    latitude,
    longitude
  );
  if (resolvedLocation?.lat && resolvedLocation?.lon) {
    return (
      <TempeatureInfo lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />
    );
  } else {
    return <NoLocation />;
  }
}

