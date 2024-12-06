"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const Navigation = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <div className={styles.flex}>
      <div className={styles.nav__toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export { Navigation };
