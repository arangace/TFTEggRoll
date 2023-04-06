import { ReactNode } from "react";
import NavBar from "./NavBar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="main-container">
      <NavBar />
      <main className="main-content">{children}</main>
      <footer className="footer">
        <span className="footer-author">Developed by: Andy Huang</span>
        <span className="footer-link">
          <a href="https://github.com/arangace/TFTEggRoll">GitHub Link </a>
        </span>
      </footer>
    </div>
  );
}
