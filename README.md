# ⚖️ Know Your Rights

**Empowering citizens with accessible legal knowledge.**

Know Your Rights is a web application that bridges the gap between complex legal jargon and public understanding. It provides clear, simplified explanations of laws, rights, and legal processes — all backed by verifiable source citations from official legal texts.

## 🎯 Vision

Legal literacy is essential for a functioning democracy, yet most citizens remain unaware of their basic rights because legal texts are written in complex, inaccessible language. This app changes that by:

- **Simplifying legal texts** into plain, everyday language
- **Citing every source** so users can verify information independently
- **Providing an AI-powered Q&A** interface for natural-language legal queries
- **Organizing legal knowledge** into browsable, searchable categories

## ✨ Key Features

### 💬 Interactive Q&A
Ask legal questions in plain language and receive clear, sourced answers. The system uses a Retrieval-Augmented Generation (RAG) architecture to retrieve relevant legal provisions and generate accurate responses.

### 📚 Knowledge Base
Browse 20+ legal topics across 6 categories:
- ⚖️ **Fundamental Rights** — Constitutional rights guaranteed to every citizen
- 🛡️ **Criminal Law** — Arrest rights, bail, FIR process, rights of the accused
- 🛒 **Consumer Rights** — Consumer protection, product liability, complaint filing
- 👷 **Labor & Employment** — Minimum wages, workplace safety, termination rights
- 🔐 **Digital & Privacy Rights** — Data protection, cyber crime, online free speech
- 🏠 **Property Rights** — Ownership, tenant rights, inheritance laws

### 🔍 Source Citations
Every piece of information is accompanied by exact references to its legal source — constitutional articles, statutory sections, and landmark case law — so users can verify independently.

### 📱 Simplified vs Original Text
Each legal topic provides a **simplified explanation** alongside the **original legal text**, allowing users to toggle between easy-to-understand language and the actual law.

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** (App Router) | Full-stack React framework |
| **TypeScript** | Type-safe development |
| **Vanilla CSS** | Custom design system with CSS variables |
| **Framer Motion** | Animations and transitions |
| **React Markdown** | Rendering formatted AI responses |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Know-Your-Rights.git
cd Know-Your-Rights

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── chat/route.ts          # Mock RAG chat endpoint
│   │   └── topics/route.ts        # Knowledge base API
│   ├── ask/                       # Q&A chat page
│   ├── knowledge-base/            # Browse legal categories & topics
│   │   ├── [category]/
│   │   │   └── [topic]/           # Individual topic detail
│   ├── about/                     # Mission, FAQ, RAG explanation
│   ├── layout.tsx                 # Root layout with nav & footer
│   ├── page.tsx                   # Landing page
│   └── globals.css                # Design system
├── components/
│   └── layout/                    # Navbar, Footer
├── data/
│   ├── categories.ts              # 6 legal categories
│   └── topics.ts                  # 20+ legal topics with citations
├── lib/
│   └── theme.tsx                  # Dark/light mode context
└── types/
    └── index.ts                   # TypeScript interfaces
```

## 🔮 Roadmap

- [ ] Integrate real LLM (OpenAI / Gemini) for AI-powered answers
- [ ] Add vector database (Pinecone) for semantic legal document retrieval
- [ ] Expand legal content to cover more jurisdictions
- [ ] Add user accounts and bookmarked topics
- [ ] Multi-language support (Hindi, Tamil, Bengali, etc.)
- [ ] Add legal aid directory and helpline information
- [ ] Progressive Web App (PWA) for offline access

## ⚠️ Disclaimer

This application provides **general legal information**, not legal advice. The content is sourced from publicly available legal texts and is intended for educational purposes only. Always consult a qualified legal professional for advice on specific legal situations.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
