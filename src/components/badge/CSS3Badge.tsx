import Image from "next/image";

export default function CSS3Badge() {
  return (
    <Image
      src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
      alt="css3"
      width={160}
      height={28}
      unoptimized
    />
  );
}
