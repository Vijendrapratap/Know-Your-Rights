'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiBook } from 'react-icons/fi';
import { categories } from '@/data/categories';
import { getTopicsByCategory } from '@/data/topics';
import styles from './page.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const category = categories.find((c) => c.id === categoryId);
  const categoryTopics = getTopicsByCategory(categoryId);

  if (!category) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.notFound}>
            <h2>Category not found</h2>
            <Link href="/knowledge-base" className="btn btn--secondary">
              <FiArrowLeft size={16} /> Back to Knowledge Base
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Breadcrumb */}
        <motion.div
          className={styles.breadcrumb}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/knowledge-base" className={styles.breadcrumbLink}>
            Knowledge Base
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{category.name}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={styles.headerIcon}
            style={{ background: `${category.color}15` }}
          >
            <span>{category.icon}</span>
          </div>
          <h1 className={styles.title}>{category.name}</h1>
          <p className={styles.description}>{category.description}</p>
          <span className={styles.topicCount}>
            <FiBook size={14} /> {categoryTopics.length} topics
          </span>
        </motion.div>

        {/* Topics */}
        <motion.div
          className={styles.topicsGrid}
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {categoryTopics.map((topic, idx) => (
            <motion.div key={topic.id} variants={fadeInUp} transition={{ duration: 0.4 }}>
              <Link
                href={`/knowledge-base/${categoryId}/${topic.id}`}
                className={styles.topicCard}
              >
                <div className={styles.topicNumber}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className={styles.topicContent}>
                  <h3 className={styles.topicTitle}>{topic.title}</h3>
                  <p className={styles.topicSummary}>{topic.summary}</p>
                  <div className={styles.topicMeta}>
                    <span className={styles.sourceCount}>
                      {topic.sources.length} source{topic.sources.length > 1 ? 's' : ''}
                    </span>
                    <span className={styles.topicLink}>
                      Read more <FiArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Back link */}
        <div className={styles.backLink}>
          <Link href="/knowledge-base" className="btn btn--ghost">
            <FiArrowLeft size={16} /> Back to all categories
          </Link>
        </div>
      </div>
    </div>
  );
}
