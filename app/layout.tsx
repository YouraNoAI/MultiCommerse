import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  description: "Unlock your typing experience with the finest Mechanical Keyboards and premium device accessories available at Multi Commerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script>
          document.title = 'Multi Commerce';
        </script>
      </body>
    </html>
  );
}
