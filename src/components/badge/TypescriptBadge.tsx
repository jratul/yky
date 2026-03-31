import Image from "next/image";

export default function TypescriptBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
      alt="typescript"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
