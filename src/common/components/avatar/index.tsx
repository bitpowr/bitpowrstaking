import React, { useState } from "react";

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

type componentProps = {
  avatar_url: string;
  name: string;
};
export default function Avatar({ avatar_url, name }: componentProps) {
  const [useName, setUseName] = useState(false);
  if (!avatar_url || useName) {
    <div className="w-[40px] h-[40px] round-xl bg-dark">
      {pickFirstTwoWords(name)}
    </div>;
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
