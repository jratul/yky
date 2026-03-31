import Image from "next/image";

export default function AmazonS3Badge() {
  return (
    <Image
      src="https://img.shields.io/badge/Amazon%20S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white"
      alt="amazon-s3"
      width={200}
      height={28}
      style={{ width: "auto" }}
      unoptimized
    />
  );
}
