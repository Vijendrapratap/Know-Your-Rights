'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiChevronDown, FiSearch, FiBookOpen, FiShield, FiHeart, FiCode } from 'react-icons/fi';
import styles from './page.module.css';

const faqs = [
  {
    q: 'Is this legal advice?',
    a: 'No. KnowYourRights provides general legal information to help you understand your rights. For specific legal situations, always consult a qualified lawyer. We make every effort to ensure accuracy, but laws can change.',
  },
  {
    q: 'Where does the legal information come from?',
    a: 'All information is sourced from official legal texts — the Constitution of India, Acts of Parliament, Supreme Court judgments, and government publications. Every answer includes exact source citations so you can verify independently.',
  },
  {
    q: 'How accurate is the AI assistant?',
    a: 'Our AI assistant uses a Retrieval-Augmented Generation (RAG) approach, meaning it retrieves information from verified legal documents before generating answers. While highly accurate, AI can sometimes make mistakes — that\'s why we always provide source citations for verification.',
  },
  {
    q: 'Is the app free to use?',
    a: 'Yes, KnowYourRights is completely free. We believe legal knowledge should be accessible to everyone, regardless of their economic background.',
  },
  {
    q: 'What legal topics do you cover?',
    a: 'We currently cover Fundamental Rights, Criminal Law, Consumer Rights, Labor & Employment, Digital & Privacy Rights, and Property Rights under Indian law. We are continuously adding more topics.',
  },
  {
    q: 'Can I contribute to the project?',
    a: 'Yes! KnowYourRights is an open project. Legal professionals, developers, and domain experts are welcome to contribute by improving content accuracy, adding new topics, or enhancing the platform.',
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Us</span>
            <h1 className={styles.heroTitle}>
              Making Law Accessible to{' '}
              <span className={styles.heroAccent}>Everyone</span>
            </h1>
            <p className={styles.heroDescription}>
              KnowYourRights bridges the gap between complex legal jargon and
              public understanding, empowering every citizen with the knowledge
              to exercise their rights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className="grid grid--2">
            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                Legal literacy is a fundamental requirement for a functioning
                democracy. Yet, the vast majority of citizens remain unaware of
                their basic rights because legal texts are written in complex,
                inaccessible language.
              </p>
              <p className={styles.missionText}>
                KnowYourRights exists to change that. We translate the law into
                plain language, making it understandable to anyone — regardless
                of their education or background. Every piece of information is
                backed by verifiable citations to build trust and transparency.
              </p>
            </motion.div>

            <motion.div
              className={styles.valuesGrid}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {[
                {
                  icon: <FiShield size={24} />,
                  title: 'Accuracy First',
                  description: 'Every answer cites its exact legal source for independent verification.',
                },
                {
                  icon: <FiHeart size={24} />,
                  title: 'Accessible to All',
                  description: 'Free, simple language, mobile-friendly. Legal knowledge for everyone.',
                },
                {
                  icon: <FiBookOpen size={24} />,
                  title: 'Comprehensive',
                  description: 'Covering constitutional rights, criminal law, consumer protection, and more.',
                },
                {
                  icon: <FiCode size={24} />,
                  title: 'AI-Powered',
                  description: 'Using RAG technology to retrieve and explain legal information accurately.',
                },
              ].map((val) => (
                <div key={val.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{val.icon}</div>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDescription}>{val.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works (RAG) */}
      <section className={`section ${styles.ragSection}`}>
        <div className="container container--narrow">
          <div className="section-header">
            <span className="section-label">Technology</span>
            <h2 className="section-title">How Our AI Works</h2>
            <p className="section-description">
              Our system uses Retrieval-Augmented Generation (RAG) to ensure
              every answer is grounded in real legal documents.
            </p>
          </div>

          <div className={styles.ragSteps}>
            {[
              {
                num: '1',
                title: 'Document Ingestion',
                description: 'We ingest official legal texts — constitutions, statutes, regulations, and case law — and break them into semantically meaningful chunks.',
                color: '#f59e0b',
              },
              {
                num: '2',
                title: 'Semantic Indexing',
                description: 'Each chunk is converted into a vector embedding that captures its meaning, then stored in a specialized vector database for fast retrieval.',
                color: '#3b82f6',
              },
              {
                num: '3',
                title: 'Intelligent Retrieval',
                description: 'When you ask a question, we search the database for the most relevant legal provisions using semantic similarity.',
                color: '#10b981',
              },
              {
                num: '4',
                title: 'Cited Generation',
                description: 'The retrieved legal texts are fed to an AI model that generates a clear, plain-language explanation with exact source citations.',
                color: '#8b5cf6',
              },
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                className={styles.ragStep}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div
                  className={styles.ragStepNum}
                  style={{ background: `${step.color}20`, color: step.color }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className={styles.ragStepTitle}>{step.title}</h3>
                  <p className={styles.ragStepDescription}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container container--narrow">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className={`${styles.faqItem} ${openFaq === idx ? styles.faqOpen : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <FiChevronDown
                    size={18}
                    className={styles.faqChevron}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      className={styles.faqAnswer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaBanner}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.ctaTitle}>Ready to Know Your Rights?</h2>
            <p className={styles.ctaDescription}>
              Start exploring your legal rights today — ask a question or browse
              our knowledge base.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/ask" className="btn btn--primary btn--large">
                <FiSearch size={18} /> Ask a Question
              </Link>
              <Link href="/knowledge-base" className="btn btn--secondary btn--large">
                <FiBookOpen size={18} /> Browse Rights
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
