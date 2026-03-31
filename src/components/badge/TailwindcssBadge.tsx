import Image from "next/image";

export default function TailwindcssBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
      alt="tailwindcss"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
