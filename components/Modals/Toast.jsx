import { useEffect } from "react";

export default function Toast({ typeToast, setToastOpen, toastOpen }) {
  const wrap = {
    maxWidth: "512px",
    width: "98%",
    position: "fixed",
    padding: 0,
    right: 0,
    left: 0,
    margin: "0 auto",
    fontWeight: 300,
    color: "#000",
    bottom: 0,
    top: "auto",
    height: "auto",
    zIndex: 20,
    marginBottom: "1em",
  };

  const form = {
    background: "#fff",
    borderRadius: "9px",
    width: "100%",
    margin: "0 auto",
    transform: "translateY(-10%)",
    animation: "from-top 250ms ease-in-out 0s 1 forwards",
    padding: "1em",
    boxShadow: "0 0 6px 0 rgb(0 0 0 / .25)",
    minHeight: "90px",
  };
  const success = {
    color: "black",
  };

  const error = {
    color: "red",
  };

  const text = {
    fontSize: "18px",
    fontWeight: 700,
  };

  const p = {
    fontSize: "16px",
    lineHeight: "20px",
  };

  const close = {
    right: 0,
    top: 0,
    fontSize: "24px",
    padding: "8px",
    lineHeight: 0.5,
    position: "absolute",
    right: "21px",
    top: "10px",
    zIndex: 10,
    color: "grey",
    cursor: "pointer",
    padding: "10px",
    fontWeight: 600,
  };
  const img = {
    float: "left",
    marginRight: "1em",
    marginBottom: 0,
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    position: "relative",
  };

  const imgSuccess = {
    border: "3px solid #4683e0",
  };

  const imgError = {
    border: "3px solid red",
  };

  const accept = {
    position: "absolute",
    left: 0,
    right: "-4px",
    top: "-13px",
    bottom: 0,
    margin: "auto",
    width: "21px",
    height: "38px",
    transform: "rotate(45deg)",
  };

  const acceptSuccess = {
    border: "4px solid #4683e0",
    borderWidth: "0 5px 5px 0",
  };

  const crossErr = {
    fontSize: "50px",
    color: "red",
    position: "absolute",
    fontWeight: 300,
    marginLleft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
  };

  const combineErrorRing = { ...img, ...imgError };
  const combineRingSuccess = { ...img, ...imgSuccess };
  const combineSuccessAccept = { ...accept, ...acceptSuccess };

  useEffect(() => {
    if (toastOpen) {
      const timeoutId = setTimeout(() => {
        setToastOpen(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [toastOpen]);

  return (
    <div style={wrap}>
      <div style={form}>
        <div style={close} onClick={() => setToastOpen(false)}>
          x
        </div>
        {typeToast !== "error" && (
          <div style={combineRingSuccess}>
            <div style={img}>
              <div style={combineSuccessAccept}></div>
            </div>
          </div>
        )}

        {typeToast === "error" && (
          <div style={combineErrorRing}>
            <div>
              <div style={crossErr}>&#10006;</div>
            </div>
          </div>
        )}

        {typeToast === "success" && (
          <div style={success}>
            <div style={text}>Спасибо за заявку!</div>
            <p style={p}>
              Мы отправим презентацию франшизы и свяжемся с Вами в ближайшее
              время.
            </p>
          </div>
        )}

        {typeToast === "error" && (
          <div style={error}>
            <div style={text}>Ошибка!</div>
            <p style={p}>Ошибка отправки формы</p>
          </div>
        )}
      </div>
    </div>
  );
}
