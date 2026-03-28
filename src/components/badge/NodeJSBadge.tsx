import Image from "next/image";

export default function NodeJSBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
      alt="nodejs"
      width={160}
      height={28}
      unoptimized
    />
  );
}
