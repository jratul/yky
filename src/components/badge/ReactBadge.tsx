import Image from "next/image";

export default function ReactBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
      alt="react"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
