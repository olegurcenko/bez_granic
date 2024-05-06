import React from "react";
import styles from './media/styles/footer.module.scss'

export const Footer: React.FC = () => {
	return (
		<section className={styles.footer}>
			<ul className={styles.footerWrapper}>
				<li className={styles.logoList}>
					<ul></ul>
				</li>
				<li className={styles.importantList}>
					<ul></ul>
				</li>
				<li className={styles.servicesList}>
					<ul></ul>
				</li>
				<li className={styles.contactList}>
					<ul></ul>
				</li>
				<li className={styles.mobileList}>
					<ul></ul>
				</li>
			</ul>
		</section>
	)
}