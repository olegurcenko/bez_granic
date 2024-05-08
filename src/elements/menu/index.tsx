import React from 'react';
import { Link } from 'react-router-dom';
import styles from './media/scss/menu.module.scss'
import inst_img from '../media/inst.webp';
import tg_img from '../media/tg.webp';
import vk_img from '../media/vk.png';
import fb_img from '../media/fb.webp';
import data from '../info.json';

export interface onCloseProps {
	onClose: () => void;
	isClosing: boolean
};

export const Menu: React.FC<onCloseProps> = ({ isClosing, onClose }) => {

  const networksPhotoTemp: { [key: string]: string } = {
    instagram: inst_img,
    telegram: tg_img,
    vk: vk_img,
    facebook: fb_img
  };

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
        <section className={styles.links}>
          {data.links.map((link) => (
            link.status ?
            <a className={styles.link} key={link.url} href={link.url}>
              <img src={networksPhotoTemp[link.web_name]} alt="" />
            </a>
            :
            <React.Fragment key={link.url} />
          ))}
        </section>
        <section className={styles.contacts}>
          <p>г. Минск, ул. Мележа 5/1</p>
          <p>9.00-20.00 пн.-сб.</p>
          <p>+375 29 120 32 42</p>
        </section>
      </div>
    </div>
  );
};