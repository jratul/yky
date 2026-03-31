import Image from "next/image";

export default function HTML5Badge() {
  return (
    <Image
      src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
      alt="html5"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
