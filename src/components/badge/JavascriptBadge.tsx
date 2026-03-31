import Image from "next/image";

export default function JavascriptBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
      alt="javascript"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
