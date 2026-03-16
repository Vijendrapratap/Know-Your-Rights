'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiMessageCircle, FiBookOpen, FiFileText } from 'react-icons/fi';
import { categories } from '@/data/categories';
import { getTopicById, getRelatedTopics } from '@/data/topics';
import styles from './page.module.css';

export default function TopicPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const topicId = params.topic as string;

  const category = categories.find((c) => c.id === categoryId);
  const topic = getTopicById(topicId);
  const relatedTopics = topic ? getRelatedTopics(topicId) : [];

  const [activeTab, setActiveTab] = useState<'simplified' | 'original'>('simplified');

  if (!category || !topic) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.notFound}>
            <h2>Topic not found</h2>
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
          <Link
            href={`/knowledge-base/${categoryId}`}
            className={styles.breadcrumbLink}
          >
            {category.name}
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{topic.title}</span>
        </motion.div>

        <div className={styles.layout}>
          {/* Main Content */}
          <motion.div
            className={styles.main}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.headerCard}>
              <span className={styles.categoryBadge}>
                {category.icon} {category.name}
              </span>
              <h1 className={styles.title}>{topic.title}</h1>
              <p className={styles.summary}>{topic.summary}</p>
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === 'simplified' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('simplified')}
              >
                <FiBookOpen size={16} />
                Simplified Explanation
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'original' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('original')}
              >
                <FiFileText size={16} />
                Original Legal Text
              </button>
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              className={styles.content}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {(activeTab === 'simplified' ? topic.simplifiedText : topic.originalText)
                .split('\n')
                .map((line, idx) => {
                  const trimmed = line.trim();
                  if (!trimmed) return <br key={idx} />;
                  if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                    return (
                      <h3 key={idx} className={styles.contentHeading}>
                        {trimmed.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (trimmed.startsWith('**')) {
                    const parts = trimmed.split('**');
                    return (
                      <p key={idx} className={styles.contentParagraph}>
                        {parts.map((part, i) =>
                          i % 2 === 1 ? (
                            <strong key={i}>{part}</strong>
                          ) : (
                            <span key={i}>{part}</span>
                          )
                        )}
                      </p>
                    );
                  }
                  if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
                    return (
                      <li key={idx} className={styles.contentListItem}>
                        {trimmed.substring(2)}
                      </li>
                    );
                  }
                  return (
                    <p key={idx} className={styles.contentParagraph}>
                      {trimmed}
                    </p>
                  );
                })}
            </motion.div>

            {/* Sources */}
            <div className={styles.sourcesSection}>
              <h3 className={styles.sourcesTitle}>📚 Sources & References</h3>
              {topic.sources.map((source, idx) => (
                <div key={idx} className={styles.sourceCard}>
                  <div className={styles.sourceInfo}>
                    <span className={styles.sourceType}>{source.type}</span>
                    <span className={styles.sourceName}>{source.title}</span>
                    <span className={styles.sourceSection}>{source.section}</span>
                  </div>
                  {source.url && (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.sourceLink}
                    >
                      Verify Source <FiExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Ask CTA */}
            <div className={styles.askCta}>
              <FiMessageCircle size={20} />
              <div>
                <h4>Have more questions about {topic.title}?</h4>
                <p>Ask our AI assistant for a personalized explanation.</p>
              </div>
              <Link
                href={`/ask`}
                className="btn btn--primary"
              >
                Ask Now
              </Link>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            className={styles.sidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {relatedTopics.length > 0 && (
              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Related Topics</h3>
                {relatedTopics.map((rt) => {
                  const rtCat = categories.find((c) => c.id === rt.categoryId);
                  return (
                    <Link
                      key={rt.id}
                      href={`/knowledge-base/${rt.categoryId}/${rt.id}`}
                      className={styles.relatedCard}
                    >
                      <span className={styles.relatedIcon}>{rtCat?.icon}</span>
                      <div>
                        <span className={styles.relatedTitle}>{rt.title}</span>
                        <span className={styles.relatedCategory}>
                          {rtCat?.name}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Quick Info</h3>
              <div className={styles.quickInfo}>
                <div className={styles.quickInfoItem}>
                  <span className={styles.quickInfoLabel}>Category</span>
                  <span className={styles.quickInfoValue}>{category.name}</span>
                </div>
                <div className={styles.quickInfoItem}>
                  <span className={styles.quickInfoLabel}>Sources</span>
                  <span className={styles.quickInfoValue}>{topic.sources.length}</span>
                </div>
                <div className={styles.quickInfoItem}>
                  <span className={styles.quickInfoLabel}>Related</span>
                  <span className={styles.quickInfoValue}>{relatedTopics.length} topics</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
