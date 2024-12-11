"use client";

import Link from "next/link";
import "./style.css";
import { useRef, useState, useEffect } from "react";
import RequestModal from "../Modals/RequestModal";
import { usePathname } from "next/navigation";
import Toast from "../Modals/Toast";
import InfoModal from "../Modals/InfoModal";

export default function TheHeader() {
  const pathname = usePathname();
  const nav = useRef();
  const navbtn = useRef();
  const [showModal, setShowModal] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [typeToast, SetTypeToast] = useState();

  const links = [
    { href: "/", title: "Каталог инвестпроектов" },
    { href: "/invest", title: "Размещение проектов в каталоге" },
    { href: "/contacts", title: "Контакты" },
  ];

  const showMenuOpen = () => {
    nav.current.style.display = "flex";
    navbtn.current.style.display = "block";
  };

  const closeMenuOpen = () => {
    nav.current.style.display = "none";
    navbtn.current.style.display = "none";
  };

  return (
    <header className="header">
      <div className="wrap flex">
        <div className="nav-toggle" onClick={showMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <a href="/" className="logo">
          <span>PLAT</span>FORMA
        </a>

        <nav className="flex header-nav" ref={nav}>
          <span className="close-header" ref={navbtn} onClick={closeMenuOpen}>
            ×
          </span>
          {links.map((e) => (
            <Link
              className={pathname == `${e.href}` ? "activePage" : ""}
              href={e.href}
              key={e.href}
            >
              {e.title}
            </Link>
          ))}
        </nav>

        <button
          className="openModalPost btn-yellow"
          modal=" #add-franch"
          onClick={() => setShowModal(true)}
        >
          <span>Разместить проект</span>
        </button>
      </div>
      {showModal && (
        <RequestModal
          setShowModal={setShowModal}
          showModal={showModal}
          type={"sendProject"}
          setToastOpen={setToastOpen}
          SetTypeToast={SetTypeToast}
          setInfoOpen={setInfoOpen}
        />
      )}

      {toastOpen && (
        <Toast
          typeToast={typeToast}
          setToastOpen={setToastOpen}
          toastOpen={toastOpen}
        />
      )}

      {infoOpen && <InfoModal setInfoOpen={setInfoOpen} infoOpen={infoOpen} />}
    </header>
  );
}
