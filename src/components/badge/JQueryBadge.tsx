import Image from "next/image";

export default function JQueryBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
      alt="jquery"
      width={160}
      height={28}
      unoptimized
    />
  );
}
