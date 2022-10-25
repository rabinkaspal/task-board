import React, { Fragment, useEffect, useRef, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import useOnOutsideClick from "../hooks/useOnOutsideClick";

const Modal = ({ isOpen: propsIsOpen, type, onClose, renderLink, renderContent }) => {
  const [stateIsOpen, setStateOpen] = useState(false);
  const isControlled = typeof propsIsOpen === "boolean";
  const isOpen = isControlled ? propsIsOpen : stateIsOpen;

  const closeModal = useCallback(() => {
    if (!isControlled) {
      setStateOpen(false);
    } else {
      onClose();
    }
  }, [isControlled, onClose]);

  const $modalRef = useRef();
  const $overlayRef = useRef();

  useOnOutsideClick($modalRef, true, closeModal, $overlayRef);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <Fragment>
      {!isControlled && renderLink({ open: () => setStateOpen(true) })}
      {isOpen &&
        ReactDOM.createPortal(
          <div className="modalContainer">
            <div className={`modalOverlay ${type}`} ref={$overlayRef}>
              <div className="modalBody" ref={$modalRef}>
                {renderContent({ close: closeModal })}
              </div>
            </div>
          </div>,
          root
        )}
    </Fragment>
  );
};

const root = document.getElementById("root");

export default Modal;
