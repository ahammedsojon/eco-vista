"use client";
import { getLocationData } from "@/lib/location-info";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  console.log(locations);
  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getLocationData();
      setLocations(locations);
    };
    fetchLocations();
  }, []);
  return (
    <div className="relative">
      <button onClick={() => setShowLocationList(!showLocationList)}>
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          height={20}
          width={20}
        />
      </button>
      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations &&
              locations.length > 0 &&
              locations.map((each) => (
                <li key={each.location}>
                  <Link
                    href={`/${each.location}?latitude=${each.latitude}&longitude=${each.longitude}`}
                    className="block"
                  >
                    {each.location}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
