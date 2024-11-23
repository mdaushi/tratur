export function Head({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-2xl tracking-tight">{title}</h2>
      <div className="flex items-center space-x-2">{children}</div>
    </div>
  );
}
