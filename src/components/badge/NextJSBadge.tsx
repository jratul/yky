import Image from "next/image";

export default function NextJSBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
      alt="nextjs"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
