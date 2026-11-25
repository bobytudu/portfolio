export interface Project {
  id: string
  title: string
  date: string // ISO, last meaningful release
  category: string
  stack: string[]
  summary: string
  highlights: string[]
  live?: string
}

export const projects: Project[] = [
  {
    id: 'docs-ai',
    title: 'Docs AI',
    date: '2026-11-01',
    category: 'AI Tools',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Chrome Extension', 'Computer Vision', 'OCR', 'PaddleOCR', 'ONNX', 'NLP', 'Socket.IO'],
    summary: 'A document vault and form autofill assistant: store your marksheets, IDs and certificates once, then fill online application forms in a click.',
    highlights: [
      'On-device OCR (PaddleOCR PP-OCRv4 on ONNX) reads text from uploaded documents and page images, with no third-party service',
      'Computer vision pairing links on-page images, such as CAPTCHAs, to the form field they belong to',
      'NLP field classification: rule scoring plus semantic similarity decides what each form field is asking for',
      'Multilingual label matching across Hindi, English, Spanish and French',
      'Typed document catalogue with verification status, JWT auth, OTP and an audit log',
    ],
  },
  {
    id: 'trade-ninja',
    title: 'Trade Ninja',
    date: '2026-10-14',
    category: 'AI Tools',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'LangGraph', 'Gemini', 'Ollama', 'PyTorch', 'Kronos', 'FastAPI', 'Fyers API'],
    summary: 'An AI-assisted trading analysis dashboard that streams market narratives and detects breakouts, breakdowns and liquidity sweeps.',
    highlights: [
      'LangGraph agent workflows with Gemini and local Ollama models for streaming market analysis and trade post-mortems',
      'Time-series forecasting: a Python FastAPI service runs the Kronos transformer (PyTorch) on OHLCV candles to predict upcoming price action',
      'Deterministic technical analysis: breakout, breakdown and liquidity-sweep detection with technical indicators',
      'Multi-chart dashboard, backtester and live market data over Fyers and Socket.IO',
      'AI token usage monitoring',
    ],
  },
  {
    id: 'api-generator',
    title: 'API Generator',
    date: '2026-11-20',
    category: 'Developer Tools',
    stack: ['Next.js', 'TypeScript', 'Python', 'Vitest', 'Vercel'],
    summary: 'Model your data in a UI, pick a stack, and download a production-grade API.',
    highlights: ['TypeScript and Python code generators', 'Spec validation and generator registry', 'Single deployable Next.js app', 'Vitest suite (11 passing)'],
  },
  {
    id: 'cineshelf',
    title: 'CineShelf',
    date: '2026-08-08',
    category: 'Web App',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Vercel'],
    summary: 'Browse, search and explore movies and TV shows, including Hindi and multi-language releases, with related titles and detail pages.',
    highlights: ['Search and detail pages', 'Proxied API routes via Vercel', 'Legal pages and ad rails', 'Vitest suite (23 passing)'],
  },
]
