import React from 'react';
import { Link } from 'react-router-dom';
import styles from './media/scss/menu.module.scss'

export interface onCloseProps {
	onClose: () => void;
	isClosing: boolean
};

export const Menu: React.FC<onCloseProps> = ({ isClosing, onClose }) => {

  return (
    <div className={isClosing ? styles.popupClosing : styles.popup}>
      <div className={styles.popupContent}>
        <div className={styles.linkColumn}>
		<Link className={styles.service} onClick={onClose} to={''}>Услуги</Link>
		<Link className={styles.service} onClick={onClose} to={''}>Цены</Link>
		<Link className={styles.service} onClick={onClose} to={''}>О Центре</Link>
		<Link className={styles.service} onClick={onClose} to={''}>Специалисты</Link>
		<Link className={styles.service} onClick={onClose} to={''}>Контакты</Link>
        </div>
      </div>
    </div>
  );
};