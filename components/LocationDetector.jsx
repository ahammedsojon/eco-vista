"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          params.set("latitude", position.coords.latitude);
          params.set("longitude", position.coords.longitude);
          setLoading(false);
          router.push(`/current?${params.toString()}`);
        });
      }, 2000);
    }
  }, [pathName, searchParams]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-500 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            height={500}
            width={500}
            alt="loading"
            className="border rounded-md my-4"
          />
          <p className="text-4xl mt-2">Location Detecting....</p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
