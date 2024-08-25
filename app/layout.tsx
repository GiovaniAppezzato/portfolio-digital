import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giovani Appezzato | Desenvolvedor de Software",
  description: "Uma breve introdução a minha carreira como desenvolvedor de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="assets/vendors/animate.css/animate.min.css"></link>
        <link rel="stylesheet" href="assets/css/style.css"></link>
        <script src="assets/vendors/jquery/jquery.min.js"></script>
        <script src="assets/js/loader.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
