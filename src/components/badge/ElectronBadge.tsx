import Image from "next/image";

export default function ElectronBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white"
      alt="electron"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
