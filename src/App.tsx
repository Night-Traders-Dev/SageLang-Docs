import { useState, useMemo } from 'react';
import { Terminal, Code, Cpu, Globe, Zap, ArrowRight, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { docsContent } from './docsData';
import './index.css';

// Pre-process the huge markdown string into chapters based on "## " headers
function parseChapters(md: string) {
  const lines = md.split('\n');
  const chapters = [];
  let currentChapter: { title: string, content: string[] } | null = null;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentChapter) {
        chapters.push({ title: currentChapter.title, content: currentChapter.content.join('\n') });
      }
      currentChapter = { title: line.replace('## ', '').trim(), content: [line] };
    } else if (currentChapter) {
      currentChapter.content.push(line);
    } else {
      // Create a default intro chapter if no header yet
      currentChapter = { title: 'Introduction', content: [line] };
    }
  }
  
  if (currentChapter) {
    chapters.push({ title: currentChapter.title, content: currentChapter.content.join('\n') });
  }

  return chapters;
}

function App() {
  const [inDocsMode, setInDocsMode] = useState<boolean>(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  const chapters = useMemo(() => parseChapters(docsContent), []);

  if (!inDocsMode) {
    return (
      <div className="app-container">
        <header className="glass-header">
          <div className="logo-container">
            <div className="logo-icon-wrapper">
              <Terminal className="logo-icon" size={24} />
            </div>
            <span className="logo-text">SageLang</span>
          </div>
          <div className="nav-links">
            <span className="nav-link" onClick={() => setInDocsMode(true)}>Documentation</span>
            <a href="https://github.com/Night-Traders-Dev/SageLang" className="nav-link github-btn" target="_blank" rel="noreferrer">
              <Globe size={16} /> GitHub
            </a>
          </div>
        </header>

        <main className="landing-content">
          <div className="glow-sphere sphere-1"></div>
          <div className="glow-sphere sphere-2"></div>
          
          <section className="hero fade-in">
            <div className="hero-badge">v3.9.6 Release</div>
            <h1 className="hero-title">The Next Generation of <br/><span className="gradient-text">Systems Programming</span></h1>
            <p className="hero-subtitle">A high-performance language combining Python's elegant syntax with C's absolute control. Experience zero-overhead abstractions, advanced memory management, and 10+ execution backends.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => setInDocsMode(true)}>
                Explore Documentation <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={() => window.open('https://github.com/Night-Traders-Dev/SageLang', '_blank')}>
                <Code size={18} /> View Source
              </button>
            </div>
          </section>

          <section className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper bg-primary-dim">
                <Zap className="text-primary" size={28} />
              </div>
              <h3>Blazing Fast</h3>
              <p>Compile to native machine code via C, LLVM IR, or direct Assembly for maximum execution speed.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper bg-secondary-dim">
                <Code className="text-secondary" size={28} />
              </div>
              <h3>Pythonic Syntax</h3>
              <p>Indentation-based blocks and dynamic-feeling APIs provide an elegant, productive developer experience.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper bg-accent-dim">
                <Cpu className="text-accent" size={28} />
              </div>
              <h3>Ten Execution Backends</h3>
              <p>Supports C, LLVM IR, Native Assembly, AST Interpreter, Bytecode VM, JIT, AOT, and Kotlin/Android.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper bg-primary-dim">
                <Globe className="text-primary" size={28} />
              </div>
              <h3>Batteries Included</h3>
              <p>Ships with 100+ native modules spanning ML, Vulkan Graphics, TCP Networking, Blockchain, and bare-metal OS building.</p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // Interactive Documentation Mode
  return (
    <div className="docs-layout">
      <div className="docs-sidebar">
        <div className="docs-sidebar-header" onClick={() => setInDocsMode(false)}>
          <ArrowRight className="back-icon" size={18} /> Back to Home
        </div>
        <div className="docs-sidebar-title">
          <BookOpen size={16} /> Table of Contents
        </div>
        <nav className="docs-nav">
          {chapters.map((chapter, idx) => (
            <div 
              key={idx} 
              className={`docs-nav-item ${idx === activeChapterIndex ? 'active' : ''}`}
              onClick={() => {
                setActiveChapterIndex(idx);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {chapter.title}
            </div>
          ))}
        </nav>
      </div>
      
      <div className="docs-content-area">
        <div className="markdown-body fade-in">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {chapters[activeChapterIndex].content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
