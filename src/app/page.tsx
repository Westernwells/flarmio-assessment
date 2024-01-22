"use client";
import Image from "next/image";
import HouseCard from "./components/HouseCard";
import { useQuery } from "@tanstack/react-query";
import { HOUSES } from "./apis";
import { Grid } from "react-loader-spinner";
import { getColors } from "./utils/colorPicker";
import { THousesData } from "./types";

export default function Home() {
  // query for houses
  const { data, isLoading } = useQuery<THousesData[]>({
    queryKey: ["houses"],
    queryFn: () => HOUSES.fetchAll(),
  });

  if (isLoading)
    return (
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      </div>
    );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="space-y-[28px]">
        {data &&
          data.map(({ name, animal, founder, id, houseColours }) => (
            <HouseCard
              key={id}
              name={name}
              founder={founder}
              animal={animal}
              houseColours={getColors(houseColours)}
            />
          ))}
      </div>
    </main>
  );
}
