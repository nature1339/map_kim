import { ReactNode } from "react";

import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="Layout_div">
      <Navbar />
      {children}
      <h1>Likes Page</h1>
    </div>
  );
}
