import React, { useState, useRef, useEffect } from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// 7 Lessons Data
const LESSONS = [
  { id: '01', title: 'Networking Fundamentals', week: 'Week 1', path: '/wiki/networking-fundamentals', available: true },
  { id: '02', title: 'Network Addressing & Subnetting', week: 'Week 2', path: '/wiki/network-addressing', available: true },
  { id: '03', title: 'Introduction to Cybersecurity', week: 'Week 3', path: '/wiki/intro-to-cybersecurity', available: true },
  { id: '04', title: 'Network Security Principles', week: 'Week 4', path: '/wiki/network-security', available: true },
  { id: '05', title: 'Data Privacy & Governance', week: 'Week 5', path: '/wiki/data-privacy', available: true },
  { id: '06', title: 'Layered Security Architecture', week: 'Week 6', path: '/wiki/layered-security', available: true },
  { id: '07', title: 'Ethical Hacking & Pentesting', week: 'Week 7', path: '/wiki/ethical-hacking/introduction', available: true },
];

const quizQuestion = 'Which port does HTTPS use by default for secure communication?';
const quizOptions = [
  { text: 'Port 80',   correct: false, desc: 'Incorrect. Port 80 is used for unencrypted HTTP traffic.' },
  { text: 'Port 443',  correct: true,  desc: 'Correct! Port 443 is the standard port for TLS/SSL HTTPS.' },
  { text: 'Port 22',   correct: false, desc: 'Incorrect. Port 22 is reserved for SSH remote login.' },
  { text: 'Port 8080', correct: false, desc: 'Incorrect. Port 8080 is often used for HTTP proxies/alternatives.' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuizIndex, setSelectedQuizIndex] = useState(null);
  const searchInputRef = useRef(null);

  // Focus search on / or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement?.tagName?.toLowerCase() ?? '';
      if (tag === 'input' || tag === 'textarea' || document.activeElement?.isContentEditable) return;
      if (e.key === '/' || (e.ctrlKey && e.key === 'k') || (e.metaKey && e.key === 'k')) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredLessons = LESSONS.filter((l) =>
    l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.id.includes(searchQuery) ||
    l.week.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>DECI Community Wiki</title>
        <meta name="description" content="Unofficial student study portal for the DECI Community — wiki, quizzes, and sandbox labs." />
      </Head>

      {/* ── Custom top header ──────────────────────────────── */}
      <header className={styles.siteHeader}>
        {/* Brand */}
        <div className={styles.headerBrand}>
          <img src="/img/logo.svg" alt="DECI Logo" className={styles.headerLogo} />
          <span className={styles.headerTitle}>DECI Community Wiki</span>
        </div>

        {/* Search */}
        <div className={styles.searchWrap}>
          <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`} />
          <input
            ref={searchInputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Search wiki catalog… (Press '/' to focus)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className={styles.searchClear} onClick={() => setSearchQuery('')} aria-label="Clear search">
              <i className="fa-solid fa-xmark" />
            </button>
          )}
        </div>

        {/* Nav links */}
        <nav className={styles.headerNav}>
          <Link to="/wiki/overview" className={styles.navLinkActive}>
            <i className="fa-solid fa-book" /> Wiki
          </Link>
          <Link to="/labs" className={styles.navLink}>
            <i className="fa-solid fa-flask" /> Labs
          </Link>
          <Link to="/quizzes" className={styles.navLink}>
            <i className="fa-solid fa-circle-question" /> Quizzes
          </Link>
          <a
            href="https://github.com/meto5345/deci-wiki"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            <i className="fa-brands fa-github" /> GitHub
          </a>
        </nav>
      </header>

      {/* ── Hero banner ────────────────────────────────────── */}
      <section className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>DECI Community Wiki</h1>
        <p className={styles.heroSubtitle}>
          Unofficial knowledge base and study hub built by students.
        </p>
        <Link to="/wiki/overview" className={styles.heroCta}>
          Launch Knowledge Base <i className="fa-solid fa-arrow-right" />
        </Link>
      </section>

      {/* ── Main body ──────────────────────────────────────── */}
      <main className={styles.mainContent}>

        {/* Feature cards */}
        <section className={styles.featureGrid}>
          <Link to="/wiki/overview" className={styles.card}>
            <img
              src="/img/undraw_docusaurus_mountain.svg"
              alt="Knowledge Base Illustration"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>
              <i className={`fa-solid fa-book-open ${styles.cardIcon}`} />
              Knowledge Base
            </h3>
            <p className={styles.cardDesc}>
              Synthesized student notes, structural overviews, and official documentation references for 7 lessons.
            </p>
            <span className={styles.cardButton}>
              Start Reading <i className="fa-solid fa-arrow-right-long" />
            </span>
          </Link>

          <Link to="/quizzes" className={styles.card}>
            <img
              src="/img/undraw_docusaurus_tree.svg"
              alt="Quizzes Illustration"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>
              <i className={`fa-solid fa-clipboard-question ${styles.cardIcon}`} />
              Interactive Quizzes
            </h3>
            <p className={styles.cardDesc}>
              Test your understanding with community-driven conceptual milestones and original coding verification blocks.
            </p>
            <span className={styles.cardButton}>
              Start Quizzes <i className="fa-solid fa-arrow-right-long" />
            </span>
          </Link>

          <Link to="/labs" className={styles.card}>
            <img
              src="/img/undraw_docusaurus_react.svg"
              alt="Labs Illustration"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>
              <i className={`fa-solid fa-flask ${styles.cardIcon}`} />
              The Sandbox Lab
            </h3>
            <p className={styles.cardDesc}>
              Test, run, and experiment with live code samples directly inside isolated client-side browser runtimes.
            </p>
            <span className={styles.cardButton}>
              Try Sandbox <i className="fa-solid fa-arrow-right-long" />
            </span>
          </Link>
        </section>

        {/* Curriculum catalog */}
        <section className={styles.curriculumSection}>
          <h2 className={styles.sectionTitle}>
            <i className={`fa-solid fa-graduation-cap ${styles.sectionTitleIcon}`} />
            Curriculum Catalog
          </h2>
          <p className={styles.sectionSubtitle}>
            Browse and jump into any of the 7 lessons instantly.
          </p>

          <div className={styles.curriculumGrid}>
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={lesson.available ? lesson.path : '#'}
                  className={styles.lessonCard}
                  onClick={(e) => { if (!lesson.available) e.preventDefault(); }}
                  style={{ opacity: lesson.available ? 1 : 0.45, cursor: lesson.available ? 'pointer' : 'not-allowed' }}
                >
                  <div className={styles.lessonNumber}>{lesson.id}</div>
                  <div className={styles.lessonInfo}>
                    <h4 className={styles.lessonTitle}>{lesson.title}</h4>
                    <span className={styles.lessonMeta}>
                      <i className="fa-regular fa-calendar" /> {lesson.week}
                    </span>
                  </div>
                  <div>
                    {lesson.available
                      ? <i className={`fa-solid fa-circle-check ${styles.lessonStatusIcon}`} />
                      : <i className={`fa-solid fa-lock ${styles.lessonStatusLocked}`} />}
                  </div>
                </Link>
              ))
            ) : (
              <div style={{ gridColumn: 'span 2', fontSize: '1rem', color: 'var(--ifm-color-content-secondary)', padding: '24px', textAlign: 'center' }}>
                No lessons match your search query.
              </div>
            )}
          </div>
        </section>

        {/* Daily quiz block */}
        <section className={styles.quizContainer}>
          <div className={styles.quizHeader}>
            <span className={styles.quizHeaderTitle}>
              <i className="fa-solid fa-brain" style={{ color: 'var(--ifm-color-primary)' }} /> Daily Quiz Block
            </span>
            <span className={styles.quizHeaderTopic}>Topic: Port Protocols</span>
          </div>

          <h4 className={styles.quizQuestion}>{quizQuestion}</h4>

          <div className={styles.quizOptions}>
            {quizOptions.map((opt, i) => (
              <button
                key={i}
                className={`${styles.quizOption} ${selectedQuizIndex === i ? styles.quizOptionSelected : ''}`}
                onClick={() => setSelectedQuizIndex(i)}
              >
                {selectedQuizIndex === i ? (
                  opt.correct
                    ? <i className="fa-solid fa-circle-check" style={{ color: '#2ea043' }} />
                    : <i className="fa-solid fa-circle-xmark" style={{ color: '#dc5050' }} />
                ) : (
                  <i className="fa-regular fa-circle" style={{ color: 'var(--ifm-color-content-secondary)' }} />
                )}
                <span>{opt.text}</span>
              </button>
            ))}
          </div>

          {selectedQuizIndex !== null && (
            <div className={`${styles.quizFeedback} ${quizOptions[selectedQuizIndex].correct ? styles.feedbackCorrect : styles.feedbackIncorrect}`}>
              <div style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                {quizOptions[selectedQuizIndex].correct
                  ? <><i className="fa-solid fa-square-check" /><span>Verification Successful!</span></>
                  : <><i className="fa-solid fa-triangle-exclamation" /><span>Verification Failed!</span></>}
              </div>
              <div>{quizOptions[selectedQuizIndex].desc}</div>
            </div>
          )}
        </section>

      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className={styles.siteFooter}>
        <span>Copyright © {new Date().getFullYear()} DECI Community Wiki. Unofficial reference library.</span>
      </footer>
    </div>
  );
}
