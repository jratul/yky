export default function Motion({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={className}
      style={{
        animation: `fadeInUp 0.5s ease-in ${delay}s both`,
      }}
    >
      {children}
    </div>
  );
}
