import React, { useState } from 'react';
import { CURRENT_AFFAIRS_ARTICLES } from '../data/mockData';
import { CurrentAffairArticle } from '../types';
import { Newspaper, Bookmark, Check, Calendar, ArrowRight, Share2, Eye, Compass, Layers } from 'lucide-react';
import { AudioEditorialPlayer } from './AudioEditorialPlayer';

export const CurrentAffairsFeed: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<string>('All');
  const [expandedArticleId, setExpandedArticleId] = useState<string>('ca-1');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set(['ca-1']));
  const [viewFormat, setViewFormat] = useState<'analytical' | 'mindmap'>('analytical');

  const filteredArticles = selectedPaper === 'All'
    ? CURRENT_AFFAIRS_ARTICLES
    : CURRENT_AFFAIRS_ARTICLES.filter(a => a.gsPaper === selectedPaper);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="current-affairs" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>Core Capability 03</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Daily Editorial & PIB Intelligence</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            The Hindu & PIB Synthesized Directly into GS Syllabus Papers
          </h2>
          <p className="mt-3 text-base text-stone-600 font-serif-prose leading-relaxed">
            Eliminate 3 hours of aimless newspaper reading every morning. Our editorial engine filters noise, 
            tags content to the official UPSC syllabus, and produces high-yield points ready for Mains answer writing.
          </p>
        </div>

        {/* Paper Filter Tabs & Format Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          
          {/* Segmented controls for GS Papers */}
          <div className="flex flex-wrap gap-1 p-1 bg-stone-200/80 rounded-lg">
            {['All', 'GS-1', 'GS-2', 'GS-3', 'GS-4'].map((paper) => (
              <button
                key={paper}
                onClick={() => setSelectedPaper(paper)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedPaper === paper
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {paper === 'All' ? 'All Papers' : `${paper}`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-medium">View:</span>
            <div className="flex gap-1 p-1 bg-stone-200/80 rounded-lg text-xs">
              <button
                onClick={() => setViewFormat('analytical')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  viewFormat === 'analytical' ? 'bg-white text-stone-900 shadow-xs font-medium' : 'text-stone-600'
                }`}
              >
                Analytical Breakdown
              </button>
              <button
                onClick={() => setViewFormat('mindmap')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  viewFormat === 'mindmap' ? 'bg-white text-stone-900 shadow-xs font-medium' : 'text-stone-600'
                }`}
              >
                Concept Mind Map
              </button>
            </div>
          </div>

        </div>

        {/* Daily Audio Editorial Digest */}
        <div className="mb-8">
          <AudioEditorialPlayer />
        </div>

        {/* Articles List / Grid */}
        <div className="space-y-6">
          {filteredArticles.map((article) => {
            const isExpanded = expandedArticleId === article.id;
            const isSaved = bookmarkedIds.has(article.id);

            return (
              <div 
                key={article.id} 
                className="bg-white rounded-lg border border-stone-200 shadow-xs overflow-hidden transition-all hover:border-stone-300"
              >
                {/* Article Header Summary Row */}
                <div className="p-6">
                  
                  {/* Metadata Row: Clean unboxed text with separators */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-amber-900">{article.gsPaper}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-stone-700">{article.source}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime} read</span>
                    </div>

                    <button
                      onClick={() => toggleBookmark(article.id)}
                      className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                        isSaved 
                          ? 'border-amber-700 text-amber-900 bg-amber-50/70 font-medium' 
                          : 'border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{isSaved ? 'Saved to Notes' : 'Save for Revision'}</span>
                    </button>
                  </div>

                  {/* Title & Core Summary */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-stone-900 mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <div className="text-xs text-stone-600 mb-3 font-serif-prose">
                    <span className="font-semibold text-stone-800">Syllabus Topic: </span>
                    {article.syllabusTopic}
                  </div>

                  <p className="text-sm text-stone-700 font-serif-prose leading-relaxed">
                    {article.summary}
                  </p>

                  {/* Action row to expand/collapse */}
                  <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => setExpandedArticleId(isExpanded ? '' : article.id)}
                      className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Collapse Analytical Breakdown' : 'Expand 3 Mains Arguments & Prelims Facts'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>

                    <span className="text-xs text-stone-400">
                      Curated by CSE Research Desk
                    </span>
                  </div>

                </div>

                {/* Expanded Details: 3 Mains Points + 2 Prelims Facts */}
                {isExpanded && (
                  <div className="p-6 bg-stone-50 border-t border-stone-200 animate-in fade-in duration-150">
                    
                    {viewFormat === 'analytical' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Column 1: Mains Answer Writing Takeaways */}
                        <div className="space-y-3 bg-white p-4 rounded border border-stone-200">
                          <div className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-800" />
                            <span>Mains Value Addition Points (GS {article.gsPaper.slice(3)})</span>
                          </div>
                          <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-serif-prose">
                            {article.mainsPointers.map((pt, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="font-mono text-amber-900 font-bold shrink-0">{idx + 1}.</span>
                                <span className="leading-relaxed">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2: Prelims Micro-Facts */}
                        <div className="space-y-3 bg-white p-4 rounded border border-stone-200">
                          <div className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-700" />
                            <span>Prelims High-Yield Facts to Remember</span>
                          </div>
                          <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-serif-prose">
                            {article.prelimsFacts.map((fact, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-700 font-bold shrink-0">✦</span>
                                <span className="leading-relaxed">{fact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    ) : (
                      /* Mind Map View */
                      <div className="bg-white p-6 rounded border border-stone-200 space-y-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2">
                          Visual Knowledge Tree: {article.title.split(':')[0]}
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs">
                          <div className="p-3 bg-stone-900 text-white rounded font-medium text-center max-w-[200px]">
                            {article.title.split(':')[0]}
                          </div>
                          <div className="hidden md:block text-stone-400">────►</div>
                          <div className="space-y-2 w-full md:w-auto">
                            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded text-stone-800">
                              <span className="font-bold text-amber-900">Constitutional Link: </span>
                              {article.mainsPointers[0]}
                            </div>
                            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-stone-800">
                              <span className="font-bold text-emerald-900">Prelims Pointer: </span>
                              {article.prelimsFacts[0]}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Daily Archive CTA */}
        <div className="mt-8 text-center">
          <button className="text-xs font-semibold text-stone-700 hover:text-stone-950 underline cursor-pointer">
            Access 365-Day Searchable Editorial & PIB Archive (2026) →
          </button>
        </div>

      </div>
    </section>
  );
};
