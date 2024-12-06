"use client";
import "./style.css";
import "../style.css";
import { industriesArr } from "@/lib/industriesArr";
import Image from "next/image";
import { useState } from "react";
import RequestModal from "@/components/Modals/RequestModal";

export default function Industries() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="industries paddingblock" style={{ color: "white" }}>
      <div className="wrap">
        <h3 className="headline-h3" style={{ color: "white" }}>
          Привлекаем инвесторов для различных отраслей
        </h3>

        <ul className="industries__list">
          {industriesArr.map((item, index) => (
            <li key={index}>
              <div className={item.style}>
                <Image
                  src={item.imageUrl}
                  width={24}
                  height={24}
                  alt="иконки"
                />
                {item.description}
              </div>
            </li>
          ))}
        </ul>

        <button
          className="btn btn-yellow openTafif"
          onClick={() => setShowModal(true)}
        >
          Найти инвесторов
        </button>
        {showModal && (
          <RequestModal
            setShowModal={setShowModal}
            showModal={showModal}
            type={"sendProject"}
          />
        )}
      </div>
    </section>
  );
}
