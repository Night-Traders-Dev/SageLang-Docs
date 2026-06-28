import { useState } from 'react';
import { Terminal, Code, Cpu, ArrowRight, Zap, Globe, CheckCircle } from 'lucide-react';
import './index.css';

const sections = {
  getting_started: {
    title: 'Getting Started',
    icon: <Zap size={18} />,
    content: (
      <div className="markdown-body fade-in">
        <h1 className="gradient-text">Getting Started with SageLang</h1>
        <p className="lead-text">SageLang is a systems programming language that combines the readability of Python (indentation blocks, clean syntax) with the performance of C. It features ten execution backends, a self-hosted interpreter, and three GC modes.</p>
        
        <div className="card-highlight">
          <h2>Installation (One-line Install System)</h2>
          <p>To start using SageLang, you can use the OIS installer.</p>
          <pre><code>{`# Clone and install
git clone https://github.com/Night-Traders-Dev/SageLang.git 
cd SageLang
chmod +x install.sh
./install.sh

# Run an interactive REPL
sage --repl

# Execute a script
sage script.sage`}</code></pre>
        </div>

        <h2>Why SageLang?</h2>
        <div className="grid-list">
          <div className="grid-item">
            <CheckCircle className="text-primary" size={24} />
            <div>
              <h3>Blazing Fast</h3>
              <p>Compiled to native machine code via C, LLVM IR, or Assembly backends.</p>
            </div>
          </div>
          <div className="grid-item">
            <CheckCircle className="text-secondary" size={24} />
            <div>
              <h3>Ten Execution Backends</h3>
              <p>Supports C, LLVM IR, native x86-64/aarch64/rv64/mips, bytecode VM, SageMetal VM, JIT, AOT, and Kotlin/Android.</p>
            </div>
          </div>
          <div className="grid-item">
            <CheckCircle className="text-accent" size={24} />
            <div>
              <h3>Familiar Syntax</h3>
              <p>Indentation-based syntax with no braces required. It feels like Python but runs like C.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  features: {
    title: 'Features',
    icon: <Code size={18} />,
    content: (
      <div className="markdown-body fade-in">
        <h1 className="gradient-text">Language Features</h1>
        <p className="lead-text">SageLang provides a rich set of features tailored for systems programming and general application development.</p>
        
        <h2>Core Features</h2>
        <ul>
          <li><strong>Type System</strong>: Support for Integers, Strings, Booleans, Nil, Arrays, Dictionaries, Tuples, Classes, and Generics.</li>
          <li><strong>Type Annotations</strong>: <code>let x: Int = 42</code></li>
          <li><strong>Structs & Enums</strong>: <code>struct Point: x: Int, y: Int</code>, <code>enum Color: Red, Green, Blue</code></li>
          <li><strong>Traits</strong>: Interface contracts via <code>trait Drawable: proc draw(self)</code></li>
          <li><strong>Control Flow</strong>: <code>if</code>/<code>else</code>, <code>while</code>, <code>for</code> loops, <code>match</code>/<code>case</code>/<code>default</code>, <code>defer</code></li>
        </ul>

        <h2>Systems Programming</h2>
        <p>SageLang offers first-class Vulkan and OpenGL support, true atomic operations, POSIX semaphores for multicore concurrency, and SMP/hyperthreading detection.</p>
      </div>
    )
  },
  compiler: {
    title: 'Compiler',
    icon: <Cpu size={18} />,
    content: (
      <div className="markdown-body fade-in">
        <h1 className="gradient-text">Compiler & Backends</h1>
        <p className="lead-text">SageLang's compiler architecture is designed for maximum flexibility and performance.</p>
        
        <h2>Execution Modes</h2>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Backend</th>
                <th>Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tree-walking Interpreter</td>
                <td><code>sage --runtime ast</code></td>
                <td>Fast startup, optimized env lookup</td>
              </tr>
              <tr>
                <td>Bytecode VM</td>
                <td><code>sage --runtime bytecode</code></td>
                <td>Stack-based execution for hot loops</td>
              </tr>
              <tr>
                <td>C Codegen</td>
                <td><code>sage --compile -o bin</code></td>
                <td>Native execution via C</td>
              </tr>
              <tr>
                <td>LLVM IR</td>
                <td><code>sage --compile-llvm -o bin</code></td>
                <td>Highly optimized native code via Clang</td>
              </tr>
              <tr>
                <td>Lily Transpiler</td>
                <td><code>sage --compile-to-lily</code></td>
                <td>Convert Sage source directly to Lily</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
};
function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  if (activeSection === null) {
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
            <span className="nav-link" onClick={() => setActiveSection('getting_started')}>Documentation</span>
            <a href="https://github.com/Night-Traders-Dev/SageDOS" className="nav-link github-btn" target="_blank" rel="noreferrer">
              <Globe size={16} /> SageDOS
            </a>
            <a href="https://github.com/Night-Traders-Dev/SageLang" className="nav-link github-btn" target="_blank" rel="noreferrer">
              <Globe size={16} /> GitHub
            </a>
          </div>
        </header>

        <main className="landing-content">
          <div className="glow-sphere sphere-1"></div>
          <div className="glow-sphere sphere-2"></div>
          
          <section className="hero">
            <div className="hero-badge">v1.0.0 Release</div>
            <h1 className="hero-title">The Ultimate DOS <br/><span className="gradient-text">Batch Engine</span></h1>
            <p className="hero-subtitle">Reimagining MS-DOS Batch 4.0 with extreme performance, modern type-safety, and seamless SageVM portability. Completely written in pure SageLang.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => setActiveSection('getting_started')}>
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
              <h3>Native Performance</h3>
              <p>Compiled directly to native C/LLVM via the SageLang compiler for blazing-fast script execution with minimal memory overhead.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper bg-secondary-dim">
                <Code className="text-secondary" size={28} />
              </div>
              <h3>100% Pure SageLang</h3>
              <p>A full lexer, AST parser, and recursive tree-walk interpreter built from scratch in the beautiful Sage systems language.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper bg-accent-dim">
                <Cpu className="text-accent" size={28} />
              </div>
              <h3>SageVM Ready</h3>
              <p>Seamlessly compile to SGVM bytecode and run batch scripts on bare-metal kernels, bootloaders, and embedded systems.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper bg-primary-dim">
                <Globe className="text-primary" size={28} />
              </div>
              <h3>SageDOS Core</h3>
              <p>Serves as the foundational COMMAND.COM shell for SageDOS, managing the environment, boot scripts, and system tools natively.</p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="app-container docs-layout">
      <header className="glass-header docs-header">
        <div className="logo-container" style={{ cursor: 'pointer' }} onClick={() => setActiveSection(null)}>
          <div className="logo-icon-wrapper">
            <Terminal className="logo-icon" size={24} />
          </div>
          <span className="logo-text">SageLang</span>
        </div>
        <div className="nav-links">
          <span className="nav-link active">Docs</span>
          <a href="https://github.com/Night-Traders-Dev/SageDOS" className="nav-link" target="_blank" rel="noreferrer">SageDOS</a>
          <a href="https://github.com/Night-Traders-Dev/SageLang" className="nav-link" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <div className="docs-body">
        <aside className="sidebar glass-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-group">
              <span className="sidebar-title">Menu</span>
              {Object.entries(sections).map(([key, section]) => (
                <div 
                  key={key} 
                  className={`sidebar-item ${activeSection === key ? 'active' : ''}`}
                  onClick={() => setActiveSection(key)}
                >
                  <span className="sidebar-item-icon">{section.icon}</span>
                  <span className="sidebar-item-text">{section.title}</span>
                  {activeSection === key && <div className="active-indicator"></div>}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="content-area custom-scrollbar">
          <div className="content-wrapper glass-content">
            {sections[activeSection as keyof typeof sections]?.content}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
