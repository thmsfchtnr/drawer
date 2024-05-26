import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <div vaul-drawer-wrapper="" className="bg-white min-h-[100vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
