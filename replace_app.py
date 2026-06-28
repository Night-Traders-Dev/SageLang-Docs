import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# We need to replace the sections object with our own.
# Find the start of `const sections = {` and the end of it.
start = content.find('const sections = {')
# To find the end, we can search for the end of the sections object which is before `function App() {`
end = content.find('function App() {')

new_sections = """const sections = {
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
"""

content = content[:start] + new_sections + content[end:]

with open('src/App.tsx', 'w') as f:
    f.write(content)

