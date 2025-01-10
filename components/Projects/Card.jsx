"use client";

import styles from "./page.module.css";
import Slider from "../Slider/Slider";
import PresentationModal from "./../Modals/PresentationModal";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import InfoModal from "../Modals/InfoModal";
import Toast from "../Modals/Toast";

export default function Card({ p }) {
  const [showModal, setShowModal] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [typeToast, SetTypeToast] = useState();
  const [infoOpen, setInfoOpen] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: 1,
  });

  return (
    <>
      <article className={styles.item} ref={ref}>
        {inView ? (
          <>
            <div className={styles.header}>
              <div className={styles.title}>{p.title}</div>
              <div className={styles.tag}>{p.group}</div>
            </div>
            <div className={styles.slider}>
              <div className={styles.slider__wrap}>
                <Slider images={p.images} />
              </div>
            </div>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: p.content }}
            ></div>
            <div className={styles.footer}>
              <ul className={styles.params}>
                <li>
                  <strong>
                    <div className={styles.label}>Инвестиции</div>
                  </strong>
                  <div className={styles.value}>{p.invest} &#8381;</div>
                </li>
                <li>
                  <strong>
                    <div className={styles.label}>Доходность *</div>
                  </strong>
                  <div className={styles.value}>{p.profit} в месяц</div>
                </li>
              </ul>
              <div className={styles.button}>
                <button
                  className="btn btn-yellow"
                  onClick={() => setShowModal(true)}
                >
                  Получить презентацию
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </article>

      {toastOpen && (
        <Toast
          typeToast={typeToast}
          setToastOpen={setToastOpen}
          toastOpen={toastOpen}
        />
      )}

      {infoOpen && <InfoModal setInfoOpen={setInfoOpen} infoOpen={infoOpen} />}
      {showModal && (
        <PresentationModal
          setShowModal={setShowModal}
          type={"presentation"}
          projectId={p.id}
          SetTypeToast={SetTypeToast}
          setToastOpen={setToastOpen}
          setInfoOpen={setInfoOpen}
        />
      )}
    </>
  );
}
