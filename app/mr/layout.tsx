export default function MarathiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section lang="mr">{children}</section>;
}