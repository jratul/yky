import Image from "next/image";

export default function MongoDBBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
      alt="mongo-db"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
