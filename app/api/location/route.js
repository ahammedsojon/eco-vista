import { getLocations } from "./location-util";

export async function GET() {
  const locationData = await getLocations();

  return Response.json(locationData);
}
