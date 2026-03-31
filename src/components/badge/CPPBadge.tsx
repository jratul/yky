import Image from "next/image";

export default function CPPBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
      alt="cpp"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
