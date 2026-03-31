import Image from "next/image";

export default function ReactQueryBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"
      alt="react-query"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
