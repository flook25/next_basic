import "./globals.css";
import { NavLinks } from "./ui/nav-link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
      </head>


          <body>
            <NavLinks />

            <div>Title of Main Layout</div>
            <div>{children}</div>
          </body>
        </html>
        );
}
