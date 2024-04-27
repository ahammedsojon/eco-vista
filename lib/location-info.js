export const getLocationInfo = async (lat, lon) => {
  try {
    let response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );

    response = await response.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationData = async (location) => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
const getLocationLatLon = async (location) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${location}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getResolvedLatLon = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const response = await getLocationLatLon(location);

  if (response?.latitude && response?.longitude) {
    const lat = response.latitude;
    const lon = response.longitude;

    return {
      lat,
      lon,
    };
  }
};

export { getLocationLatLon, getResolvedLatLon };
