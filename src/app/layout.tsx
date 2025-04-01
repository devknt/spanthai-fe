import Header from "@/components/layout/Header";
import "../styles/main.scss";

export const metadata = {
  title: "SpanThai",
  description:
    "SpanThai is catering company dedicated to food events, we cook a combination of Spanish and Thai food.",
  icon: "/favicon.ico", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
