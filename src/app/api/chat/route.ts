import { NextRequest, NextResponse } from 'next/server';
import { topics } from '@/data/topics';
import { Source } from '@/types';

// Mock RAG responses — architecture ready for real LLM/vector DB integration
const mockResponses: Record<string, { answer: string; sources: Source[] }> = {
  'fundamental rights': {
    answer: `The **Fundamental Rights** are guaranteed under Part III of the Indian Constitution (Articles 12–35). They include:

1. **Right to Equality** (Articles 14–18) — Equal treatment before the law, no discrimination, abolition of untouchability
2. **Right to Freedom** (Articles 19–22) — Freedom of speech, assembly, movement, profession, and protection of life and liberty
3. **Right Against Exploitation** (Articles 23–24) — Prohibition of trafficking, forced labor, and child labor
4. **Right to Freedom of Religion** (Articles 25–28) — Freedom of conscience, practice, and propagation of religion
5. **Cultural & Educational Rights** (Articles 29–30) — Protection of minority interests in education and culture
6. **Right to Constitutional Remedies** (Article 32) — The right to approach the Supreme Court if your rights are violated

These rights are enforceable by courts, meaning you can approach the Supreme Court or High Courts directly if any fundamental right is violated.`,
    sources: [
      { title: 'Constitution of India', section: 'Part III, Articles 12–35', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
    ],
  },
  'arrest': {
    answer: `If you are being arrested, you have several important **rights**:

1. **Right to know the reason** — The police must immediately inform you why you are being arrested (Article 22(1))
2. **Right to a lawyer** — You can consult a lawyer of your choice from the moment of arrest
3. **24-hour magistrate rule** — You must be produced before the nearest magistrate within 24 hours (Section 36, BNSS 2023)
4. **No torture** — Police cannot use force or threats to extract confessions
5. **Right to inform someone** — You can have a friend or relative informed about your arrest
6. **Women's protections** — Women cannot be arrested between sunset and sunrise except in exceptional circumstances

**Important:** Any confession made directly to a police officer is **not admissible** in court. You have the right to remain silent.`,
    sources: [
      { title: 'Constitution of India', section: 'Article 22(1), (2)', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
      { title: 'Bharatiya Nagarik Suraksha Sanhita, 2023', section: 'Sections 35–37', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
  },
  'consumer': {
    answer: `As a consumer in India, the **Consumer Protection Act, 2019** gives you six fundamental rights:

1. **Right to Safety** — Protection against hazardous goods and services
2. **Right to Information** — Know the quality, quantity, price, and standard of what you buy
3. **Right to Choose** — Access to variety at competitive prices
4. **Right to be Heard** — Your complaints will be considered in appropriate forums
5. **Right to Seek Redressal** — File complaints at District, State, or National Consumer Commissions
6. **Right to Consumer Education** — Know your rights as a consumer

**Filing a Complaint:**
- **District Commission** — Claims up to ₹1 crore
- **State Commission** — Claims ₹1–10 crore
- **National Commission** — Claims above ₹10 crore

You can file online at **edaakhil.nic.in**. No lawyer is needed, and fees are minimal.`,
    sources: [
      { title: 'Consumer Protection Act, 2019', section: 'Sections 2(7), 2(9), 34, 47, 58', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
  },
  'employer': {
    answer: `Your employer **cannot fire you without proper procedure**. Here are your key rights:

**Notice Period:** If you've worked for more than 1 year, your employer must give you at least **1 month's written notice** or pay in lieu of notice.

**Retrenchment Compensation:** You are entitled to **15 days' average pay for every completed year** of service.

**"Last In, First Out" Rule:** The last person hired in your category should generally be retrenched first.

**Government Permission Required:** In establishments with **300+ workers**, the employer must get prior government permission before retrenchment.

**Unfair Termination:** Termination for **union activities, pregnancy, or exercising legal rights** is illegal and you can seek reinstatement.

**Gratuity:** If you've completed 5+ years, you're entitled to gratuity regardless of the reason for leaving.

**Important:** "Bail is the rule, jail is the exception" — similarly, **the law leans towards protecting employment** rather than allowing arbitrary dismissal.`,
    sources: [
      { title: 'Industrial Relations Code, 2020', section: 'Sections 70, 77', type: 'statute', url: 'https://legislative.gov.in/' },
      { title: 'Code on Social Security, 2020', section: 'Section 53', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
  },
  'privacy': {
    answer: `India's **Digital Personal Data Protection Act, 2023** gives you strong data privacy rights:

1. **Consent Required** — No one can collect or process your personal data without your clear, informed consent
2. **Right to Know** — You can ask what data is collected, why, and who it's shared with
3. **Right to Correction** — Request correction of inaccurate personal data
4. **Right to Erasure** — Request deletion when data is no longer needed
5. **Right to Grievance Redressal** — File complaints with the Data Protection Board of India
6. **Data Breach Notification** — Organizations must notify you of data breaches
7. **Children's Protection** — Processing children's data requires parental consent; behavioral tracking is prohibited

**Right to Privacy** is also recognized as a **fundamental right** under Article 21 of the Constitution, as established in the landmark **K.S. Puttaswamy v. Union of India (2017)** judgment.`,
    sources: [
      { title: 'Digital Personal Data Protection Act, 2023', section: 'Sections 4, 8, 9, 11', type: 'statute', url: 'https://legislative.gov.in/' },
      { title: 'K.S. Puttaswamy v. Union of India (2017)', section: '(2017) 10 SCC 1', type: 'case-law' },
    ],
  },
  'bail': {
    answer: `**Bail is a fundamental principle** in Indian criminal law — "bail is the rule, jail is the exception":

**Bailable Offenses:** You have an **automatic right** to bail. The police station **must** grant it; they cannot refuse.

**Non-Bailable Offenses:** Bail must be applied for before a magistrate. The court considers:
- Severity of charges
- Risk of flight
- Criminal history
- Likelihood of tampering with evidence

**Default Bail (Section 167, BNSS):** If police fail to file a chargesheet within the time limit (60 or 90 days), you are entitled to **default bail** — meaning you must be released.

**Anticipatory Bail:** If you believe you might be arrested, you can apply for anticipatory bail from the High Court or Sessions Court **before arrest**.

**Key Supreme Court rulings:**
- *Sanjay Chandra v. CBI (2012)*: Bail should be granted unless there are very strong reasons to deny it
- *Arnesh Kumar v. State of Bihar (2014)*: Police should not make unnecessary arrests for offenses punishable up to 7 years`,
    sources: [
      { title: 'Bharatiya Nagarik Suraksha Sanhita, 2023', section: 'Sections 478–482', type: 'statute', url: 'https://legislative.gov.in/' },
      { title: 'Constitution of India', section: 'Articles 21, 22', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
    ],
  },
};

function findBestResponse(message: string): { answer: string; sources: Source[] } {
  const lower = message.toLowerCase();

  // Check for keyword matches
  for (const [key, response] of Object.entries(mockResponses)) {
    if (lower.includes(key)) {
      return response;
    }
  }

  // Try to match against topics
  const matchedTopic = topics.find(
    (t) =>
      lower.includes(t.title.toLowerCase()) ||
      t.title.toLowerCase().split(' ').some((word) => word.length > 4 && lower.includes(word.toLowerCase()))
  );

  if (matchedTopic) {
    return {
      answer: matchedTopic.simplifiedText,
      sources: matchedTopic.sources,
    };
  }

  // Default response
  return {
    answer: `Thank you for your question! While I don't have a specific pre-loaded answer for this query, here's what I can help with:

**Topics I can answer about:**
- ⚖️ Fundamental Rights (Articles 14–32)
- 🛡️ Criminal Law (arrest rights, bail, FIR)
- 🛒 Consumer Rights (complaints, product liability)
- 👷 Labor & Employment (wages, safety, termination)
- 🔐 Digital & Privacy Rights (data protection, cyber crime)
- 🏠 Property Rights (ownership, tenancy, inheritance)

Try asking about any of these topics, for example:
- "What are my fundamental rights?"
- "What should I do if police arrest me?"
- "How do I file a consumer complaint?"
- "Can my employer fire me without notice?"

You can also browse our **[Knowledge Base](/knowledge-base)** for detailed information on each topic.`,
    sources: [],
  };
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Simulate processing delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

    const response = findBestResponse(message);

    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
