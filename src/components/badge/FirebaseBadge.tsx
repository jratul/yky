import Image from "next/image";

export default function FirebaseBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34"
      alt="firebase"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
