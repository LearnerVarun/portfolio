import "./globals.css";

export const metadata = {
  title: "Varun Gupta | Senior Manager : UK Retirement & Data Solutions",
  description: "Executive portfolio of Varun Gupta : Senior Manager in UK Retirement Services, Transitions, Automation, and Project Management with 18+ years experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-blue-600 selection:text-white">{children}</body>
    </html>
  );
}
