import Image from "next/image";

export default function QtBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/Qt-%23217346.svg?style=for-the-badge&logo=Qt&logoColor=white"
      alt="qt"
      width={160}
      height={28}
      unoptimized
    />
  );
}
