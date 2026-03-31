import Image from "next/image";

export default function MUIBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"
      alt="mui"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
