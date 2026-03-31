import Image from "next/image";

export default function AndroidBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"
      alt="android"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
