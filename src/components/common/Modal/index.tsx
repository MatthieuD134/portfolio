import useOnClickOutside from '@src/common/hooks/useOnClickOutside';
import { ReactNode, useRef, useState } from 'react';
import styles from './index.module.scss';

interface ModalProps {
  children?: ReactNode;
  show?: boolean;
  onHide?: () => void;
  modalClassName?: string;
  outsideContainerClassName?: string;
  centered?: boolean;
}

const Modal = ({
  children,
  show,
  onHide,
  modalClassName,
  outsideContainerClassName,
  centered,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(show !== undefined ? show : true);
  const modal = useRef<HTMLDivElement>(null);

  useOnClickOutside(modal, () => {
    onHide && onHide();
    setShowModal(false);
  });

  return (
    <div
      className={`${styles.outside_container} ${
        show !== undefined
          ? show
            ? styles.show
            : styles.hide
          : showModal
          ? styles.show
          : styles.hide
      } ${centered && styles.centered} ${
        outsideContainerClassName && outsideContainerClassName
      } `}
    >
      <div
        ref={modal}
        className={`${styles.modal} ${modalClassName && modalClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
