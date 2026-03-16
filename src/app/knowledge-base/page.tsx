'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import { categories } from '@/data/categories';
import { topics } from '@/data/topics';
import styles from './page.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function KnowledgeBasePage() {
  const [search, setSearch] = useState('');

  const filtered = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.description.toLowerCase().includes(search.toLowerCase())
  );

  const filteredTopics = search
    ? topics.filter(
        (t) =>
          t.title.toLowerCase().includes(search.toLowerCase()) ||
          t.summary.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Knowledge Base</span>
          <h1 className={styles.title}>Browse Your Legal Rights</h1>
          <p className={styles.subtitle}>
            Explore legal categories and topics, each explained in plain language
            with references to original legal sources.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          className={styles.searchWrapper}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <FiSearch size={18} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search categories and topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>

        {/* Topic search results */}
        {filteredTopics.length > 0 && (
          <motion.div
            className={styles.topicResults}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.topicResultsTitle}>
              Topics matching &ldquo;{search}&rdquo;
            </h3>
            <div className={styles.topicResultsGrid}>
              {filteredTopics.map((topic) => {
                const cat = categories.find((c) => c.id === topic.categoryId);
                return (
                  <Link
                    key={topic.id}
                    href={`/knowledge-base/${topic.categoryId}/${topic.id}`}
                    className={styles.topicResultCard}
                  >
                    <span className={styles.topicResultCategory}>
                      {cat?.icon} {cat?.name}
                    </span>
                    <span className={styles.topicResultTitle}>{topic.title}</span>
                    <span className={styles.topicResultSummary}>{topic.summary}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Categories */}
        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {filtered.map((cat) => (
            <motion.div key={cat.id} variants={fadeInUp} transition={{ duration: 0.4 }}>
              <Link
                href={`/knowledge-base/${cat.id}`}
                className={styles.categoryCard}
              >
                <div className={styles.cardTop}>
                  <div
                    className={styles.categoryIcon}
                    style={{ background: `${cat.color}15`, color: cat.color }}
                  >
                    <span>{cat.icon}</span>
                  </div>
                  <span className={styles.topicCount}>
                    {cat.topicCount} topics
                  </span>
                </div>
                <h3 className={styles.categoryName}>{cat.name}</h3>
                <p className={styles.categoryDescription}>{cat.description}</p>
                <span className={styles.categoryLink}>
                  Explore <FiArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p>No categories match your search. Try different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}
