import React from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>⚖️</span>
              <span className={styles.logoText}>
                Know<span className={styles.logoAccent}>Your</span>Rights
              </span>
            </div>
            <p className={styles.tagline}>
              Empowering citizens with accessible legal knowledge. Understand your
              rights, verified by real legal sources.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="GitHub" className={styles.socialLink}>
                <FiGithub size={18} />
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>
                <FiTwitter size={18} />
              </a>
              <a href="#" aria-label="Email" className={styles.socialLink}>
                <FiMail size={18} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <Link href="/ask" className={styles.footerLink}>Ask a Question</Link>
            <Link href="/knowledge-base" className={styles.footerLink}>Knowledge Base</Link>
            <Link href="/about" className={styles.footerLink}>About Us</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <Link href="/knowledge-base/fundamental-rights" className={styles.footerLink}>Fundamental Rights</Link>
            <Link href="/knowledge-base/criminal-law" className={styles.footerLink}>Criminal Law</Link>
            <Link href="/knowledge-base/consumer-rights" className={styles.footerLink}>Consumer Rights</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Resources</h4>
            <a href="https://legislative.gov.in" target="_blank" rel="noopener" className={styles.footerLink}>
              Legislative.gov.in
            </a>
            <a href="https://indiankanoon.org" target="_blank" rel="noopener" className={styles.footerLink}>
              Indian Kanoon
            </a>
            <a href="https://nalsa.gov.in" target="_blank" rel="noopener" className={styles.footerLink}>
              NALSA
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} KnowYourRights. Made with{' '}
            <FiHeart size={12} style={{ color: '#ef4444', verticalAlign: 'middle' }} />{' '}
            for civic empowerment.
          </p>
          <p className={styles.disclaimer}>
            This app provides general legal information, not legal advice. Always consult a qualified lawyer for specific cases.
          </p>
        </div>
      </div>
    </footer>
  );
}
