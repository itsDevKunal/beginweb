'use client';

import styles from './styles/navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';
import webs from '@/data/webs.json';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const options = {
    keys: ['title'],
    includeScore: true,
    threshold: 0.4,
  };

  const fuse = new Fuse(webs, options);

  const results = searchQuery
    ? fuse.search(searchQuery, { limit: 3 })
    : [];

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    console.log('Search Query:', e.target.value);
    console.log(results);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.half1}>
          <img src="/logo.svg" alt="logo" />
          <input
            className={styles.search}
            type="text"
            placeholder='Search...'
            onFocus={() => setSearch(true)} /* when input is focused, set search to true */
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className={`${styles.searchoff} ${search ? styles.results : ''}`}> {/*if search is true then classname results and searchoff by default*/}
            {results.length > 0 ? (
              <ul>
                {results.map((result) => (
                  <li key={result.item.id}>
                    <a href={result.item.url}>{result.item.title} ({result.item.url})</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
        <div className={styles.half2}>
          <ul>
            <li><Link href="/categories/social">Social</Link></li>
            <li><Link href="/categories/deploy">Deployment</Link></li>
            <li><Link href="/categories/docs">Documentation</Link></li>
            <li><Link href="/categories/ide">IDE</Link></li>
            <li><Link href="/categories/styling">Styling</Link></li>
            <li><Link href="/categories/prototyping">Prototype</Link></li>
          </ul>
        </div>
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}> {/* when clicked set isopen true */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>
      <div className={`${styles.menu} ${isOpen ? styles.mopen : ''}`}> {/* if isOpen is true then classname mopen menu by default */}
        <ul>
          <li><Link href="/categories/social">Social</Link></li>
          <li><Link href="/categories/deploy">Deployment</Link></li>
          <li><Link href="/categories/docs">Documentation</Link></li>
          <li><Link href="/categories/ide">IDE</Link></li>
          <li><Link href="/categories/styling">Styling</Link></li>
          <li><Link href="/categories/prototyping">Prototype</Link></li>
        </ul>
      </div>
      <div className={`${styles.background} ${isOpen ? styles.bgopen : ''}`} onClick={() => setIsOpen(!isOpen)}></div> {/* when clicked set isOpen to false, true isopen = classname bgopen */}
      <div className={`${styles.background} ${search ? styles.bgopen : ''}`} onClick={() => setSearch(!search)}></div> {/* when clicked set search to false, true search = classname bgopen */}
    </>
  );
}
