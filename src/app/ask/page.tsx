'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FiSend, FiBook, FiExternalLink } from 'react-icons/fi';
import { Message, Source } from '@/types';
import styles from './page.module.css';

const starterQuestions = [
  'What are my fundamental rights under the Indian Constitution?',
  'What should I do if police arrest me?',
  'How do I file a consumer complaint?',
  'Can my employer fire me without notice?',
  'What are my data privacy rights?',
  'What is the right to bail?',
];

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const question = text || input.trim();
    if (!question || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.answer,
        sources: data.sources,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">AI Legal Assistant</span>
          <h1 className={styles.title}>Ask a Legal Question</h1>
          <p className={styles.subtitle}>
            Get clear, sourced answers about Indian laws and your rights. Every
            answer cites the exact legal provision.
          </p>
        </motion.div>

        {/* Chat Area */}
        <div className={styles.chatArea}>
          {messages.length === 0 ? (
            <motion.div
              className={styles.emptyState}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.emptyIcon}>💬</div>
              <h3 className={styles.emptyTitle}>Start a conversation</h3>
              <p className={styles.emptyDescription}>
                Ask any question about Indian laws, rights, or legal processes.
                Try one of the suggestions below:
              </p>
              <div className={styles.suggestions}>
                {starterQuestions.map((q) => (
                  <button
                    key={q}
                    className={styles.suggestion}
                    onClick={() => handleSend(q)}
                  >
                    <FiBook size={14} />
                    {q}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className={styles.messages}>
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    className={`${styles.message} ${styles[msg.role]}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.messageAvatar}>
                      {msg.role === 'user' ? '👤' : '⚖️'}
                    </div>
                    <div className={styles.messageBody}>
                      <div className={styles.messageLabel}>
                        {msg.role === 'user' ? 'You' : 'Legal Assistant'}
                      </div>
                      <div className={styles.messageContent}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                      {msg.sources && msg.sources.length > 0 && (
                        <div className={styles.sources}>
                          <div className={styles.sourcesLabel}>
                            <FiBook size={12} /> Sources
                          </div>
                          {msg.sources.map((source: Source, idx: number) => (
                            <div key={idx} className={styles.sourceCard}>
                              <span className={styles.sourceType}>
                                {source.type}
                              </span>
                              <span className={styles.sourceTitle}>
                                {source.title}
                              </span>
                              <span className={styles.sourceSection}>
                                {source.section}
                              </span>
                              {source.url && (
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.sourceLink}
                                >
                                  <FiExternalLink size={11} />
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading && (
                <motion.div
                  className={`${styles.message} ${styles.assistant}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className={styles.messageAvatar}>⚖️</div>
                  <div className={styles.messageBody}>
                    <div className={styles.messageLabel}>Legal Assistant</div>
                    <div className={styles.typing}>
                      <span /><span /><span />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input */}
        <div className={styles.inputArea}>
          <div className={styles.inputWrapper}>
            <textarea
              ref={inputRef}
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about your legal rights..."
              rows={1}
              disabled={loading}
            />
            <button
              className={styles.sendBtn}
              onClick={() => handleSend()}
              disabled={!input.trim() || loading}
            >
              <FiSend size={18} />
            </button>
          </div>
          <p className={styles.disclaimer}>
            This is general legal information, not legal advice. Always consult
            a qualified lawyer for specific cases.
          </p>
        </div>
      </div>
    </div>
  );
}
