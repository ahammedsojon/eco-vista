import LocationInfo from "@/components/LocationInfo";
import NoLocation from "@/components/NoLocation";
import { getResolvedLatLon } from "@/lib/location-info";

export default async function LocationPage({
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
      <LocationInfo lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />
    );
  } else {
    return <NoLocation />;
  }
}
