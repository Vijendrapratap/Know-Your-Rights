'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSearch, FiBookOpen, FiShield } from 'react-icons/fi';
import { categories } from '@/data/categories';
import styles from './page.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FiShield size={14} />
            <span>Your Rights, Simplified</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Understand the Laws
            <br />
            That <span className={styles.heroAccent}>Protect You</span>
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Complex legal texts, simplified for everyone. Ask questions, browse
            your rights, and trace every answer back to its official legal source.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link href="/ask" className="btn btn--primary btn--large">
              <FiSearch size={18} />
              Ask a Legal Question
            </Link>
            <Link href="/knowledge-base" className="btn btn--secondary btn--large">
              <FiBookOpen size={18} />
              Browse Rights
            </Link>
          </motion.div>

          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className={styles.stat}>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>Legal Categories</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Legal Topics</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Source Cited</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`section ${styles.howSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Legal Knowledge in 3 Simple Steps</h2>
            <p className="section-description">
              No legal background needed. Just ask, and we&apos;ll explain it clearly
              with references you can verify.
            </p>
          </div>

          <motion.div
            className={styles.stepsGrid}
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {[
              {
                icon: '💬',
                step: '01',
                title: 'Ask Your Question',
                description:
                  'Type any legal question in plain language. No complicated terms required — just describe your situation.',
              },
              {
                icon: '🔍',
                step: '02',
                title: 'We Find the Answer',
                description:
                  'Our system retrieves the most relevant laws and legal provisions from verified constitutional and statutory sources.',
              },
              {
                icon: '✅',
                step: '03',
                title: 'Get a Clear Explanation',
                description:
                  'Receive a simplified explanation with exact source citations, so you can verify every word independently.',
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                className={styles.stepCard}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.stepNumber}>{item.step}</div>
                <div className={styles.stepIcon}>{item.icon}</div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Knowledge Base</span>
            <h2 className="section-title">Explore Legal Categories</h2>
            <p className="section-description">
              Browse through essential legal topics, each explained in plain language
              with verified sources.
            </p>
          </div>

          <motion.div
            className="grid grid--3"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {categories.map((cat) => (
              <motion.div key={cat.id} variants={fadeInUp} transition={{ duration: 0.5 }}>
                <Link href={`/knowledge-base/${cat.id}`} className={styles.categoryCard}>
                  <div
                    className={styles.categoryIcon}
                    style={{ background: `${cat.color}15` }}
                  >
                    <span>{cat.icon}</span>
                  </div>
                  <h3 className={styles.categoryName}>{cat.name}</h3>
                  <p className={styles.categoryDescription}>{cat.description}</p>
                  <span className={styles.categoryLink}>
                    Explore {cat.topicCount} topics <FiArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaBanner}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>
              Have a Legal Question?
            </h2>
            <p className={styles.ctaDescription}>
              Don&apos;t navigate the legal maze alone. Ask your question and get a
              clear, sourced answer instantly.
            </p>
            <Link href="/ask" className="btn btn--primary btn--large">
              <FiSearch size={18} />
              Ask Now — It&apos;s Free
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
