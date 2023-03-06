import React, { useCallback, useEffect, useState } from "react";
import Typography from "../typography";

function pickFirstTwoWords(str: string) {
  const words = str.trim().split(" ");
  if (words.length >= 2) {
    return words[0].charAt(0) + " " + words[1].charAt(0);
  } else if (words.length == 1) {
    return str.charAt(0) + str.charAt(1);
  } else {
    return "N/A";
  }
}

const randomColors = ["primary", "dark", "success", "orange", "purple"];

type componentProps = {
  avatar_url: string;
  name: string;
};
export default function Avatar({ avatar_url, name }: componentProps) {
  const [useName, setUseName] = useState(false);
  const [colors, setColors] = useState("");

  const generateRandomColors = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    return "bg-" + randomColors[randomIndex];
  }, []);

  useEffect(() => {
    setColors(generateRandomColors());
  }, []);
  if (!avatar_url || useName) {
    return (
      <div
        className={`w-[40px] h-[40px] flex items-center justify-center  rounded-3xl ${colors}`}
      >
        <Typography color="text-white" label={pickFirstTwoWords(name)} />
      </div>
    );
  }
  return (
    <img
      onError={() => {
        setUseName(true);
      }}
      style={{ minWidth: "40px", height: "40px" }}
      className="rounded-full float-right object-cover"
      src={avatar_url}
      alt="Rounded avatar"
    />
  );
}
