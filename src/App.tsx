import { useState } from 'react';
import { Terminal, Code, Cpu, Layers, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import './index.css';

const sections = {
  getting_started: {
    title: 'Getting Started',
    icon: <Zap size={18} />,
    content: (
      <div className="markdown-body fade-in">
        <h1 className="gradient-text">Getting Started with SageLang</h1>
        <p className="lead-text">SageLang is a systems programming language that combines the readability of Python (indentation blocks, clean syntax) with the absolute performance of C. It features ten execution backends, a self-hosted compiler, and three interchangeable Garbage Collection modes.</p>
        
        <div className="card-highlight">
          <h2>Installation (One-line Install System)</h2>
          <p>The quickest way to get started is by building the toolchain directly from source.</p>
          <pre><code>{`# Clone the repository
git clone https://github.com/Night-Traders-Dev/SageLang.git 
cd SageLang

# Build everything
./sagemake all
sudo make install

# Run an interactive REPL
sage

# Compile a script to native machine code
sage --compile script.sage -o my_app`}</code></pre>
        </div>

        <h2>Why SageLang?</h2>
        <div className="grid-list">
          <div className="grid-item">
            <CheckCircle className="text-primary" size={24} />
            <div>
              <h3>Blazing Fast</h3>
              <p>Compile to native machine code via C, LLVM IR, or direct Assembly.</p>
            </div>
          </div>
          <div className="grid-item">
            <CheckCircle className="text-secondary" size={24} />
            <div>
              <h3>Ten Execution Backends</h3>
              <p>Supports C, LLVM IR, native Assembly (x86-64/aarch64), Tree-walking interpreter, Bytecode VM, JIT, AOT, and Kotlin/Android.</p>
            </div>
          </div>
          <div className="grid-item">
            <CheckCircle className="text-accent" size={24} />
            <div>
              <h3>Familiar Syntax</h3>
              <p>Indentation-based syntax with no braces required. It feels like Python, but executes with C-level speed.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  features: {
    title: 'Language Features',
    icon: <Code size={18} />,
    content: (
      <div className="markdown-body fade-in">
        <h1 className="gradient-text">Language Features</h1>
        <p className="lead-text">SageLang provides a rich, statically-typed, yet highly expressive feature set tailored for systems programming.</p>
        
        <h2>Core Syntax</h2>
        <p>Variables and constants are defined using <code>let</code> and <code>const</code>, and functions use the <code>proc</code> keyword.</p>
        <pre><code>{`proc fibonacci(n: Int) -> Int:
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

let result = fibonacci(10)
print(result)`}</code></pre>

        <h2>Data Structures</h2>
        <ul>
          <li><strong>Primitives:</strong> <code>Int</code>, <code>Float</code>, <code>String</code>, <code>Bool</code>, <code>Nil</code></li>
          <li><strong>Collections:</strong> Arrays (<code>[1, 2, 3]</code>), Dictionaries (<code>&#123;"key": "value"&#125;</code>), Tuples</li>
          <li><strong>Object-Oriented:</strong> <code>class</code> with constructors (<code>init</code>), methods, and inheritance.</li>
        </ul>

        <h2>Systems Level Access</h2>
        <p>SageLang is not just a high-level scripting language. It offers direct integration for POSIX semaphores, true atomic operations, and first-class Vulkan/OpenGL bindings via the standard library.</p>
      </div>
    )
  },
  compiler: {
    title: 'Compiler & VM',
    icon: <Cpu size={18} />,
    content: (
      <div className="markdown-body fade-in">
        <h1 className="gradient-text">Compiler & Virtual Machine</h1>
        <p className="lead-text">SageLang's architecture is built around a shared front-end with multiple, highly-specialized backends.</p>
        
        <h2>Execution Modes</h2>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Backend</th>
                <th>Command</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Interpreter</td>
                <td><code>sage --runtime ast</code></td>
                <td>Rapid iteration and script testing.</td>
              </tr>
              <tr>
                <td>Bytecode VM</td>
                <td><code>sage --runtime bytecode</code></td>
                <td>Hot-loop execution without native compilation overhead.</td>
              </tr>
              <tr>
                <td>C Codegen (AOT)</td>
                <td><code>sage --compile -o bin</code></td>
                <td>Production deployment, maximum performance.</td>
              </tr>
              <tr>
                <td>LLVM IR</td>
                <td><code>sage --compile-llvm</code></td>
                <td>Highly optimized binaries using Clang's optimizer.</td>
              </tr>
              <tr>
                <td>Bare-Metal ELF</td>
                <td><code>sage --compile-bare</code></td>
                <td>OS development and kernels.</td>
              </tr>
              <tr>
                <td>Lily Transpiler</td>
                <td><code>sage --compile-to-lily</code></td>
                <td>Interoperability with the Lily ecosystem.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Memory Management</h2>
        <p>SageLang uses a hybrid memory management system allowing you to choose the garbage collector that best fits your workload:</p>
        <ul>
          <li><strong>Concurrent Mark-Sweep (Default):</strong> Best for general purpose scripting and web servers.</li>
          <li><strong>Automatic Reference Counting (ARC):</strong> Deterministic cleanup, best for games and soft real-time systems.</li>
          <li><strong>Optimized Reference Counting (ORC):</strong> ARC augmented with background cycle-detection.</li>
        </ul>
      </div>
    )
  },
  ecosystem: {
    title: 'Ecosystem',
    icon: <Globe size={18} />,
    content: (
      <div className="markdown-body fade-in">
        <h1 className="gradient-text">Ecosystem & Libraries</h1>
        <p className="lead-text">SageLang ships with an incredibly rich ecosystem of 15 built-in core libraries (<code>sagelang-lib-*</code>), offering everything from deep hardware integration to high-level UI composition, Machine Learning, and Blockchain primitives.</p>

        <div className="card-highlight">
          <h2>Core Standard Libraries</h2>
          <ul>
            <li><strong><code className="text-primary">sagelang-lib-std</code></strong>: 23 general-purpose modules including <code>regex</code>, <code>datetime</code>, <code>log</code>, <code>argparse</code>, <code>process</code>, <code>db</code> (in-memory CRUD), and powerful concurrency primitives (<code>atomic</code>, <code>channel</code>, <code>threadpool</code>, <code>rwlock</code>).</li>
            <li><strong><code className="text-primary">sagelang-lib-os</code></strong>: 52 bare-metal development modules for OS/kernel building. Includes <code>fat</code>, <code>elf</code>, <code>pe</code>, <code>uefi</code>, <code>acpi</code>, <code>paging</code>, and <code>idt</code> management.</li>
            <li><strong><code className="text-primary">sagelang-lib-metal</code></strong>: Low-level hardware abstraction layer. Provides direct GPIO, Timer, Serial, IRQ, and basic VGA support for embedded systems.</li>
            <li><strong><code className="text-primary">sagelang-lib-gc</code></strong>: Advanced garbage collection utilities, offering implementations like the Immix mark-region collector for fine-grained performance tuning.</li>
          </ul>
        </div>

        <div className="grid-list">
          <div className="grid-item">
            <Cpu className="text-primary" size={24} />
            <div>
              <h3>AI & Machine Learning</h3>
              <p><strong><code>sagelang-lib-ml</code></strong> offers 10 PyTorch-style modules (<code>tensor</code>, <code>nn</code>, <code>optim</code>, <code>loss</code>). <strong><code>sagelang-lib-chat</code></strong> provides a conversational chatbot framework (sessions, personas), enabling sophisticated LLM integrations.</p>
            </div>
          </div>
          <div className="grid-item">
            <Layers className="text-secondary" size={24} />
            <div>
              <h3>Graphics & CUDA</h3>
              <p><strong><code>sagelang-lib-graphics</code></strong> ships with 18 GPU modules supporting Vulkan, OpenGL, PBR, and Immediate-mode UI. <strong><code>sagelang-lib-cuda</code></strong> offers native CUDA device abstraction, memory pooling, and kernel execution plans.</p>
            </div>
          </div>
          <div className="grid-item">
            <Globe className="text-accent" size={24} />
            <div>
              <h3>Networking & Crypto</h3>
              <p><strong><code>sagelang-lib-net</code></strong> handles TCP/HTTP servers, WebSockets, DNS, and URLs. <strong><code>sagelang-lib-crypto</code></strong> provides SHA-256, HMAC, PBKDF2, and stream ciphers like RC4.</p>
            </div>
          </div>
        </div>

        <h2>Specialized Tooling & Domain Libraries</h2>
        <ul>
          <li><strong><code className="text-primary">sagelang-lib-rich</code></strong>: A pure Sage port of Python's <code>rich</code> library. Brings beautiful console output, TrueColor text, layout engines, and syntax highlighting directly to the terminal.</li>
          <li><strong><code className="text-primary">sagelang-lib-transpiler</code></strong>: The foundation of Sage's multi-language toolchain, offering AST parsers and extensible language emitters (e.g., Python and Lily).</li>
          <li><strong><code className="text-primary">sagelang-lib-blockchain</code></strong>: Core blockchain framework featuring PoW/PoA consensus engines, smart contract management, Merkle trees, and cryptographic wallets.</li>
          <li><strong><code className="text-primary">sagelang-lib-mips</code></strong>: Comprehensive MIPS architecture support, including instruction definitions, an assembler, a disassembler, and a lightweight MIPS emulator.</li>
          <li><strong><code className="text-primary">sagelang-lib-android</code></strong>: Compose mobile applications natively in Sage. Maps SageLang constructs to native Android APIs, including composable UIs and Vulkan contexts.</li>
        </ul>
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
            <a href="https://github.com/Night-Traders-Dev/SageLang" className="nav-link github-btn" target="_blank" rel="noreferrer">
              <Globe size={16} /> GitHub
            </a>
          </div>
        </header>

                <main className="landing-content">
          <div className="glow-sphere sphere-1"></div>
          <div className="glow-sphere sphere-2"></div>
          
          <section className="hero">
            <div className="hero-badge">v3.9.6 Release</div>
            <h1 className="hero-title">The Next Generation of <br/><span className="gradient-text">Systems Programming</span></h1>
            <p className="hero-subtitle">A high-performance language combining Python's elegant syntax with C's absolute control. Experience zero-overhead abstractions, advanced memory management, and 10+ execution backends.</p>
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
            <span className="nav-link" onClick={() => setActiveSection('getting_started')}>Documentation</span>
            <a href="https://github.com/Night-Traders-Dev/SageLang" className="nav-link github-btn" target="_blank" rel="noreferrer">
              <Globe size={16} /> GitHub
            </a>
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
