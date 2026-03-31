import Image from "next/image";

export default function JavaBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
      alt="java"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
