import Image from "next/image";

export default function JQueryBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
      alt="jquery"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
