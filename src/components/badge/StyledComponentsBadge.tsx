import Image from "next/image";

export default function StyledComponentsBadge() {
  return (
    <Image
      src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
      alt="styled-components"
      width={160}
      height={28}
      unoptimized
    />
  );
}
