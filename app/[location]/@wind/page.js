import NoLocation from "@/components/NoLocation";
import WindInfo from "@/components/WindInfo";
import { getResolvedLatLon } from "@/lib/location-info";

export default async function WindPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolvedLocation = await getResolvedLatLon(
    location,
    latitude,
    longitude
  );
  if (resolvedLocation?.lat && resolvedLocation?.lon) {
    return <WindInfo lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />;
  } else {
    return <NoLocation />;
  }
}
