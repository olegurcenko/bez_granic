import React from "react";
import styles from './media/styles/footer.module.scss'
import { Link } from "react-router-dom";
import logo from '../media/logo.png';
import inst_img from '../media/inst.webp';
import tg_img from '../media/tg.webp';
import vk_img from '../media/vk.png';
import fb_img from '../media/fb.webp';
import data from '../info.json';

export const Footer: React.FC = () => {
	
	const networksPhotoTemp: { [key: string]: string } = {
		instagram: inst_img,
		telegram: tg_img,
		vk: vk_img,
		facebook: fb_img
	  };

	return (
		<section className={styles.footer}>
			<ul className={styles.footerWrapper}>
				<section className={styles.desktopInfo}>
					<ul className={styles.infoColumn}>
						<li className={styles.logo}>
							<img src={logo} alt="" />
						</li>
						<li>
							<Link className={styles.textLink} to={''}>Политика обработки персональных данных</Link>
						</li>
						<li className={styles.links}>
						{data.links.map((link) => (
          				  link.status ?
          				  <a className={styles.link} key={link.url} href={link.url}>
          				    <img src={networksPhotoTemp[link.web_name]} alt="" />
          				  </a>
          				  :
          				  <React.Fragment key={link.url} />
          				))}
						</li>
						<li>
							<p>2024 © Без Границ</p>
						</li>
					</ul>
					<ul className={styles.infoColumn}>
						<li>
							<h4 className={styles.title}>Ссылки:</h4>
						</li>
						<li>
							<Link className={styles.textLink} to={''}>Услуги</Link>
						</li>
						<li>
							<Link className={styles.textLink} to={''}>Специалисты</Link>
						</li>
						<li>
							<Link className={styles.textLink} to={''}>О Центре</Link>
						</li>
					</ul>
					<ul className={styles.infoColumn}>
						<li>
							<h4 className={styles.title}>Контакты:</h4>
						</li>
						<li>
							<p>+375 29 120 32 42</p>
						</li>
						<li>
							<p>9.00-20.00 пн.-сб.</p>
						</li>
						<li>
							<p>г. Минск, ул. Мележа 5/1</p>
						</li>
					</ul>
				</section>
				<section className={styles.mobileInfo}>
					<li>
						<Link className={styles.mobileLink} to={''}>Политика обработки персональных данных</Link>
					</li>
					<li>
						<p>2024 © Без Границ</p>
					</li>
				</section>
			</ul>
		</section>
	)
}