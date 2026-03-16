import { Topic } from '@/types';

export const topics: Topic[] = [
  // Fundamental Rights
  {
    id: 'right-to-equality',
    categoryId: 'fundamental-rights',
    title: 'Right to Equality',
    summary: 'All citizens are equal before the law and are entitled to equal protection under the law.',
    simplifiedText: `The Right to Equality is one of the most important rights guaranteed by the Indian Constitution. In simple terms, it means:

**No one is above the law.** Whether you are rich or poor, powerful or ordinary, the law treats everyone the same way.

**No discrimination.** The government cannot discriminate against you based on your religion, race, caste, sex, or place of birth. This applies to jobs, education, and access to public places.

**Equal opportunity in government jobs.** Everyone has an equal chance to apply for and get government jobs. The government can, however, make special provisions (reservations) for groups that have historically been disadvantaged.

**Abolition of untouchability.** The practice of "untouchability" in any form is forbidden and punishable by law.

**Abolition of titles.** The state cannot grant titles of nobility. This ensures that no artificial distinctions are created among citizens.`,
    originalText: `**Article 14 — Equality before law**
The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.

**Article 15 — Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth**
(1) The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.
(2) No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to—
(a) access to shops, public restaurants, hotels and places of public entertainment; or
(b) the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.

**Article 16 — Equality of opportunity in matters of public employment**
(1) There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.

**Article 17 — Abolition of Untouchability**
"Untouchability" is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of "Untouchability" shall be an offence punishable in accordance with law.

**Article 18 — Abolition of titles**
(1) No title, not being a military or academic distinction, shall be conferred by the State.`,
    sources: [
      { title: 'Constitution of India', section: 'Part III, Articles 14–18', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
    ],
    relatedTopicIds: ['right-to-freedom', 'right-against-exploitation'],
  },
  {
    id: 'right-to-freedom',
    categoryId: 'fundamental-rights',
    title: 'Right to Freedom',
    summary: 'Guarantees individual liberties such as freedom of speech, assembly, movement, and profession.',
    simplifiedText: `The Right to Freedom gives you several important personal liberties:

**Freedom of speech and expression.** You can speak your mind, write, publish, and express your views freely. However, the government can impose reasonable restrictions for national security, public order, or decency.

**Freedom of assembly.** You have the right to gather peacefully and without weapons. This is how protests and public meetings are protected.

**Freedom to form associations.** You can create or join groups, unions, political parties, or organizations.

**Freedom of movement.** You can travel freely throughout India and live or settle in any part of the country.

**Freedom of profession.** You can practice any profession, carry on any occupation, trade, or business of your choice.

**Protection of life and personal liberty.** No person can be deprived of their life or personal liberty except according to the procedure established by law. This is considered the most fundamental of all rights.`,
    originalText: `**Article 19 — Protection of certain rights regarding freedom of speech, etc.**
(1) All citizens shall have the right—
(a) to freedom of speech and expression;
(b) to assemble peaceably and without arms;
(c) to form associations or unions;
(d) to move freely throughout the territory of India;
(e) to reside and settle in any part of the territory of India;
(g) to practise any profession, or to carry on any occupation, trade or business.

**Article 21 — Protection of life and personal liberty**
No person shall be deprived of his life or personal liberty except according to procedure established by law.

**Article 21A — Right to education**
The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.

**Article 22 — Protection against arrest and detention in certain cases**
(1) No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest nor shall he be denied the right to consult, and to be defended by, a legal practitioner of his choice.
(2) Every person who is arrested and detained in custody shall be produced before the nearest magistrate within a period of twenty-four hours.`,
    sources: [
      { title: 'Constitution of India', section: 'Part III, Articles 19–22', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
    ],
    relatedTopicIds: ['right-to-equality', 'right-to-constitutional-remedies'],
  },
  {
    id: 'right-against-exploitation',
    categoryId: 'fundamental-rights',
    title: 'Right Against Exploitation',
    summary: 'Prohibits human trafficking, forced labor, and child labor.',
    simplifiedText: `This right protects people from being exploited:

**No forced labor.** No one can force you to work without payment or against your will. "Begar" (forced labor without pay) and similar practices are banned.

**No human trafficking.** Buying, selling, or trafficking of human beings is a punishable crime.

**No child labor in dangerous jobs.** Children below the age of 14 cannot be employed in factories, mines, or any other hazardous work. This protects children from dangerous working conditions.

These protections exist because historically, vulnerable groups — especially lower castes, women, and children — were subjected to exploitative labor practices.`,
    originalText: `**Article 23 — Prohibition of traffic in human beings and forced labour**
(1) Traffic in human beings and begar and other similar forms of forced labour are prohibited and any contravention of this provision shall be an offence punishable in accordance with law.

**Article 24 — Prohibition of employment of children in factories, etc.**
No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment.`,
    sources: [
      { title: 'Constitution of India', section: 'Part III, Articles 23–24', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
    ],
    relatedTopicIds: ['right-to-equality', 'right-to-freedom'],
  },
  {
    id: 'right-to-freedom-of-religion',
    categoryId: 'fundamental-rights',
    title: 'Right to Freedom of Religion',
    summary: 'Guarantees religious freedom including the right to profess, practice, and propagate any religion.',
    simplifiedText: `India is a secular country, and the Constitution protects your religious freedom:

**Freedom of conscience.** You have the right to believe in any religion, change your religion, or have no religion at all.

**Right to practice.** You can freely profess, practice, and propagate your religion, subject to public order, morality, and health.

**Manage religious affairs.** Religious groups have the right to manage their own affairs, establish institutions, and own property.

**No religious tax.** The government cannot force you to pay taxes for the promotion of any particular religion.

**No religious instruction in state schools.** Government-funded educational institutions cannot provide compulsory religious instruction.`,
    originalText: `**Article 25 — Freedom of conscience and free profession, practice and propagation of religion**
(1) Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion.

**Article 26 — Freedom to manage religious affairs**
Subject to public order, morality and health, every religious denomination or any section thereof shall have the right—
(a) to establish and maintain institutions for religious and charitable purposes;
(b) to manage its own affairs in matters of religion;

**Article 27 — Freedom as to payment of taxes for promotion of any particular religion**
No person shall be compelled to pay any taxes, the proceeds of which are specifically appropriated in payment of expenses for the promotion or maintenance of any particular religion or religious denomination.

**Article 28 — Freedom as to attendance at religious instruction**
(1) No religious instruction shall be provided in any educational institution wholly maintained out of State funds.`,
    sources: [
      { title: 'Constitution of India', section: 'Part III, Articles 25–28', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
    ],
    relatedTopicIds: ['right-to-equality', 'cultural-educational-rights'],
  },
  {
    id: 'cultural-educational-rights',
    categoryId: 'fundamental-rights',
    title: 'Cultural & Educational Rights',
    summary: 'Protects the rights of minorities to preserve their culture and establish educational institutions.',
    simplifiedText: `These rights protect cultural diversity and education:

**Protect your culture.** Any group of citizens with a distinct language, script, or culture has the right to conserve and promote it.

**Minority rights in education.** Minorities — whether based on religion or language — have the right to establish and administer educational institutions of their choice.

**No discrimination in government aid.** The state cannot discriminate against any educational institution on the ground that it is under the management of a minority group when granting aid.`,
    originalText: `**Article 29 — Protection of interests of minorities**
(1) Any section of the citizens residing in the territory of India or any part thereof having a distinct language, script or culture of its own shall have the right to conserve the same.
(2) No citizen shall be denied admission into any educational institution maintained by the State or receiving aid out of State funds on grounds only of religion, race, caste, language or any of them.

**Article 30 — Right of minorities to establish and administer educational institutions**
(1) All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice.
(2) The State shall not, in granting aid to educational institutions, discriminate against any educational institution on the ground that it is under the management of a minority, whether based on religion or language.`,
    sources: [
      { title: 'Constitution of India', section: 'Part III, Articles 29–30', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
    ],
    relatedTopicIds: ['right-to-freedom-of-religion', 'right-to-equality'],
  },
  {
    id: 'right-to-constitutional-remedies',
    categoryId: 'fundamental-rights',
    title: 'Right to Constitutional Remedies',
    summary: 'The right to approach the Supreme Court or High Courts if your fundamental rights are violated.',
    simplifiedText: `Dr. B.R. Ambedkar called this the "heart and soul" of the Constitution:

**You can go to court.** If any of your fundamental rights are violated, you have the right to approach the Supreme Court (Article 32) or any High Court (Article 226) directly.

**Writs — powerful legal tools.** The courts can issue special orders called "writs" to protect your rights:
- **Habeas Corpus**: If someone is illegally detained, the court can order their release
- **Mandamus**: The court can order a government official to perform their duty
- **Prohibition**: The court can stop a lower court from exceeding its authority
- **Certiorari**: The court can quash an order made without authority
- **Quo Warranto**: The court can question someone holding a public office without legal authority

**This right cannot be suspended** except during a national emergency, and even then, certain protections remain in place.`,
    originalText: `**Article 32 — Remedies for enforcement of rights conferred by this Part**
(1) The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.
(2) The Supreme Court shall have power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, whichever may be appropriate, for the enforcement of any of the rights conferred by this Part.
(4) The right guaranteed by this article shall not be suspended except as otherwise provided for by this Constitution.`,
    sources: [
      { title: 'Constitution of India', section: 'Part III, Article 32', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
    ],
    relatedTopicIds: ['right-to-freedom', 'right-to-equality'],
  },

  // Criminal Law
  {
    id: 'rights-during-arrest',
    categoryId: 'criminal-law',
    title: 'Rights During Arrest',
    summary: 'Know what protections you have when being arrested by police.',
    simplifiedText: `If you are being arrested, you have important rights:

**Know the reason.** The police must inform you immediately why you are being arrested. An arrest without reason is illegal.

**Right to a lawyer.** You have the right to consult and be defended by a lawyer of your choice from the moment of arrest.

**Appear before a magistrate within 24 hours.** The police must produce you before the nearest magistrate within 24 hours of arrest (excluding travel time).

**No torture or coercion.** The police cannot use force, torture, or threats to extract a confession. Any confession made to a police officer is not admissible in court.

**Right to inform someone.** You have the right to have a friend, relative, or someone you trust informed about your arrest and the place of detention.

**Women's protections.** A woman cannot be arrested after sunset and before sunrise except in exceptional circumstances, and must be arrested by a female police officer.`,
    originalText: `**Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 — Sections 35, 36, 37**

Section 35(1): Every police officer or other person making any arrest shall forthwith communicate to the arrested person full particulars of the offence for which he is arrested or other grounds for such arrest.

Section 35(4): A police officer making an arrest shall inform the arrested person that he is entitled to be released on bail and that he may arrange for sureties on his behalf.

Section 36(1): Every person who is arrested and detained in custody shall be produced before the nearest Magistrate within a period of twenty-four hours of such arrest.

**Article 22(1) of the Constitution**: No person who is arrested shall be detained in custody without being informed of the grounds for such arrest nor shall he be denied the right to consult a legal practitioner of his choice.`,
    sources: [
      { title: 'Constitution of India', section: 'Article 22', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
      { title: 'Bharatiya Nagarik Suraksha Sanhita', section: 'Sections 35–37', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['right-to-bail', 'fir-process'],
  },
  {
    id: 'right-to-bail',
    categoryId: 'criminal-law',
    title: 'Right to Bail',
    summary: 'Understanding when and how you can get bail after arrest.',
    simplifiedText: `Bail is a fundamental right, not a privilege:

**Bailable offenses.** For less serious crimes (bailable offenses), you have an automatic right to bail. The police station must grant you bail; they cannot refuse.

**Non-bailable offenses.** For serious crimes, bail is not automatic but must be applied for before a magistrate. The court will consider factors like severity of charges, risk of flight, and your criminal history.

**Default bail.** If the police fail to file a chargesheet within the specified time (60 or 90 days depending on the offense), you are entitled to "default bail" — meaning you must be released.

**Anticipatory bail.** If you reasonably believe you might be arrested, you can apply for anticipatory bail from the High Court or Sessions Court even before arrest.

**Bail is the rule, jail is the exception.** The Supreme Court has repeatedly held that bail should be granted unless there are very strong reasons to deny it.`,
    originalText: `**Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023**

Section 478 — Bail in bailable offences: When a person accused of a bailable offence is arrested or detained without warrant, he shall be released on bail.

Section 480 — Bail in non-bailable offences: When any person accused of a non-bailable offence is arrested or detained, he may be released on bail by the Court.

Section 482 — Anticipatory bail: When any person has reason to believe that he may be arrested on an accusation of having committed a non-bailable offence, he may apply to the High Court or the Court of Session for a direction that in the event of such arrest, he shall be released on bail.`,
    sources: [
      { title: 'Bharatiya Nagarik Suraksha Sanhita', section: 'Sections 478–482', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['rights-during-arrest', 'fir-process'],
  },
  {
    id: 'fir-process',
    categoryId: 'criminal-law',
    title: 'Filing an FIR',
    summary: 'How to file a First Information Report and your rights in the process.',
    simplifiedText: `An FIR (First Information Report) is the first step in the criminal justice process:

**What is an FIR?** It is a written document prepared by the police when they receive information about a cognizable offense (a serious crime where police can arrest without a warrant).

**Police must register your FIR.** If a cognizable offense has been committed, the police are legally obligated to register your FIR. Refusing to register an FIR is a punishable offense.

**Zero FIR.** You can file an FIR at any police station, regardless of where the crime occurred. The police must register it and then transfer it to the correct jurisdiction.

**Get a free copy.** The police must give you a free copy of the FIR. This is your right.

**Online FIR.** Many states now allow you to file an FIR online through their police department websites.

**If police refuse.** You can approach the Superintendent of Police, file a complaint to the magistrate under Section 175(3) of BNSS, or approach the State Human Rights Commission.`,
    originalText: `**Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023**

Section 173 — Information in cognizable cases:
(1) Every information relating to the commission of a cognizable offence, if given orally to an officer in charge of a police station, shall be reduced to writing by him or under his direction.
(2) A copy of the information as recorded shall be given forthwith, free of cost, to the informant.

Section 173(3): If the information is given to an officer other than the officer in charge of the police station having jurisdiction, it shall be entered and referred to such officer.`,
    sources: [
      { title: 'Bharatiya Nagarik Suraksha Sanhita', section: 'Section 173', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['rights-during-arrest', 'right-to-bail'],
  },
  {
    id: 'rights-of-accused',
    categoryId: 'criminal-law',
    title: 'Rights of the Accused',
    summary: 'Fundamental protections for anyone accused of a crime — presumption of innocence and fair trial.',
    simplifiedText: `If you are accused of a crime, the law still protects you:

**Presumption of innocence.** You are innocent until proven guilty. The prosecution must prove your guilt beyond reasonable doubt.

**Right to a fair trial.** You have the right to a speedy and fair trial in an open court.

**Right to a lawyer.** If you can't afford a lawyer, the state must provide one for you free of charge (legal aid).

**Right against self-incrimination.** You cannot be compelled to be a witness against yourself. You have the right to remain silent.

**Right to know the charges.** You must be informed in detail about the nature of the charges against you.

**Right to cross-examine.** You have the right to cross-examine prosecution witnesses and present your own evidence and witnesses.

**Double jeopardy protection.** You cannot be tried and punished twice for the same offense.`,
    originalText: `**Article 20 — Protection in respect of conviction for offences**
(1) No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the Act charged as an offence.
(2) No person shall be prosecuted and punished for the same offence more than once.
(3) No person accused of any offence shall be compelled to be a witness against himself.

**Article 22 — Protection against arrest and detention**
(1) No person who is arrested shall be denied the right to consult, and to be defended by, a legal practitioner of his choice.

**Article 39A — Equal justice and free legal aid**
The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid.`,
    sources: [
      { title: 'Constitution of India', section: 'Articles 20, 21, 22, 39A', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
    ],
    relatedTopicIds: ['rights-during-arrest', 'right-to-bail'],
  },

  // Consumer Rights
  {
    id: 'consumer-protection-basics',
    categoryId: 'consumer-rights',
    title: 'Consumer Protection Basics',
    summary: 'Your fundamental rights as a consumer under the Consumer Protection Act.',
    simplifiedText: `The Consumer Protection Act, 2019 gives you six important rights:

**Right to Safety.** Protection against goods and services that are hazardous to life and property.

**Right to Information.** The right to be informed about the quality, quantity, potency, purity, standard, and price of goods or services.

**Right to Choose.** Access to a variety of goods and services at competitive prices.

**Right to be Heard.** Your interests will receive due consideration in appropriate forums.

**Right to Seek Redressal.** If you have a complaint, you can seek resolution through consumer forums — District, State, or National level.

**Right to Consumer Education.** The right to acquire knowledge and skills to be an informed consumer.

**Filing a complaint.** You can file a consumer complaint online at edaakhil.nic.in or at your nearest District Consumer Disputes Redressal Commission.`,
    originalText: `**Consumer Protection Act, 2019**

Section 2(7) — "consumer" means any person who buys any goods or hires or avails any services for a consideration.

Section 2(9) — "consumer right" includes:
(i) the right to be protected against the marketing of goods, products or services which are hazardous to life and property;
(ii) the right to be informed about the quality, quantity, potency, purity, standard and price of goods, products or services;
(iii) the right to be assured, wherever possible, access to a variety of goods, products or services at competitive prices;
(iv) the right to be heard and to be assured that consumer's interests will receive due consideration;
(v) the right to seek redressal against unfair trade practice or restrictive trade practice or unscrupulous exploitation;
(vi) the right to consumer awareness.`,
    sources: [
      { title: 'Consumer Protection Act, 2019', section: 'Sections 2(7), 2(9)', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['product-liability', 'consumer-complaints'],
  },
  {
    id: 'product-liability',
    categoryId: 'consumer-rights',
    title: 'Product Liability',
    summary: 'Hold manufacturers, sellers, and service providers accountable for defective products.',
    simplifiedText: `If a product harms you, the law holds multiple parties accountable:

**Who is liable?** The manufacturer, seller, or service provider can all be held liable for harm caused by a defective product or deficient service.

**What counts as a defect?** A manufacturing defect, design defect, or a failure to provide adequate instructions or warnings.

**No need to prove negligence.** Under the 2019 Act, you don't always need to prove the company was negligent — just that the product was defective and caused harm.

**Compensation.** You can claim compensation for personal injury, property damage, and even mental agony caused by the defective product.`,
    originalText: `**Consumer Protection Act, 2019 — Chapter VI: Product Liability**

Section 82 — A product liability action may be brought by a complainant against a product manufacturer or a product service provider or a product seller.

Section 83 — A product manufacturer shall be liable in a product liability action if the product contains a manufacturing defect, design defect, or a deviation from manufacturing specifications.

Section 84 — A product service provider shall be liable in a product liability action if the service was faulty, imperfect, deficient, or inadequate.`,
    sources: [
      { title: 'Consumer Protection Act, 2019', section: 'Sections 82–87 (Chapter VI)', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['consumer-protection-basics', 'consumer-complaints'],
  },
  {
    id: 'consumer-complaints',
    categoryId: 'consumer-rights',
    title: 'Filing Consumer Complaints',
    summary: 'Step-by-step guide to filing complaints at consumer forums.',
    simplifiedText: `If you face unfair practices or defective goods, here's how to get justice:

**Three-tier system.** Complaints can be filed at:
- **District Commission** — for claims up to ₹1 crore
- **State Commission** — for claims between ₹1 crore and ₹10 crore
- **National Commission** — for claims above ₹10 crore

**How to file.** You can file online at edaakhil.nic.in or physically at the relevant commission.

**Who can file?** The consumer themselves, any recognized consumer association, the central or state government, or in case of death, the legal heirs.

**Time limit.** You must file within 2 years from the date the cause of action arose.

**No lawyer needed.** You can represent yourself in consumer forums. The process is designed to be accessible.

**Fees are minimal.** Filing fees are nominal and based on the value of your claim.`,
    originalText: `**Consumer Protection Act, 2019**

Section 34 — District Commission: Jurisdiction to entertain complaints where value of goods or services does not exceed one crore rupees.

Section 47 — State Commission: Jurisdiction where value exceeds one crore but does not exceed ten crore rupees.

Section 58 — National Commission: Jurisdiction where value exceeds ten crore rupees.

Section 35(1) — A complaint may be filed by: (a) the consumer; (b) any recognized consumer association; (c) the Central Authority; (d) the Central Government or State Government.`,
    sources: [
      { title: 'Consumer Protection Act, 2019', section: 'Sections 34, 35, 47, 58', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['consumer-protection-basics', 'product-liability'],
  },

  // Labor Rights
  {
    id: 'minimum-wages',
    categoryId: 'labor-rights',
    title: 'Minimum Wages',
    summary: 'Understanding your right to minimum wages and how they are determined.',
    simplifiedText: `Every worker is entitled to a minimum wage:

**Floor wage.** The central government sets a "floor wage" — the absolute minimum that must be paid across the country.

**State variations.** State governments can set higher minimum wages for their state, but cannot go below the floor wage.

**Covers all workers.** The Code on Wages, 2019 applies to all establishments and all employees, including organized and unorganized sectors.

**Equal pay for equal work.** There shall be no discrimination in wages on the basis of gender. Men and women must receive equal pay for the same work or work of similar nature.

**Overtime.** If you work beyond normal working hours, you are entitled to overtime wages at twice the normal rate.

**Payment timeline.** Wages must be paid before the 7th day (for establishments with fewer than 1000 workers) or 10th day of the following month.`,
    originalText: `**Code on Wages, 2019**

Section 6 — Fixation of floor wage: The Central Government shall fix the floor wage taking into account minimum living standards of the workers.

Section 3 — No employer shall pay to any employee wages less than the minimum rate of wages.

Section 3(2) — No discrimination in wages on the ground on gender.

Section 17 — Overtime: Where an employee works in any establishment for more than normal working hours, he shall be entitled to overtime rate which shall not be less than twice the normal rate of wages.`,
    sources: [
      { title: 'Code on Wages, 2019', section: 'Sections 3, 6, 17', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['workplace-safety', 'termination-rights'],
  },
  {
    id: 'workplace-safety',
    categoryId: 'labor-rights',
    title: 'Workplace Safety',
    summary: 'Your employer\'s obligations to provide a safe working environment.',
    simplifiedText: `Your employer must ensure your safety at work:

**Safe environment.** Employers must provide a workplace free from hazards that could cause injury or illness.

**Safety measures.** This includes proper ventilation, lighting, sanitation, fire safety equipment, and first-aid facilities.

**Health checkups.** Workers in hazardous industries are entitled to free annual health checkups.

**Reporting accidents.** Employers must report workplace accidents to the authorities and maintain records.

**Compensation for injuries.** If you are injured at work, you are entitled to compensation under the Employees' Compensation Act.

**Right to refuse dangerous work.** You can refuse to work in conditions that you reasonably believe are immediately dangerous to your life or health.`,
    originalText: `**Occupational Safety, Health and Working Conditions Code, 2020**

Section 6 — Duties of employers:
(1) Every employer shall ensure a safe working environment for all workers.
(2) Provision of such information, instruction, training and supervision as are necessary to ensure the health and safety of all workers at work.

Section 24 — Working conditions: Every establishment shall maintain standards of health, safety and working conditions as prescribed.`,
    sources: [
      { title: 'Occupational Safety, Health and Working Conditions Code, 2020', section: 'Sections 6, 24', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['minimum-wages', 'termination-rights'],
  },
  {
    id: 'termination-rights',
    categoryId: 'labor-rights',
    title: 'Termination & Retrenchment Rights',
    summary: 'Your rights when being terminated, including notice period and severance pay.',
    simplifiedText: `If your employer wants to terminate you, there are legal protections:

**Notice period.** For workers employed for more than one year, the employer must give at least one month's written notice or pay in lieu of notice.

**Retrenchment compensation.** If you are retrenched after one year of continuous service, you are entitled to compensation equal to 15 days' average pay for every completed year of service.

**"Last in, first out" rule.** The employer must generally retrench the last person hired in that category first.

**Government permission.** In establishments with 300+ workers, the employer must obtain prior government permission before retrenchment, closure, or layoff.

**No unfair termination.** Termination for union activities, pregnancy, or exercising legal rights is illegal and grounds for reinstatement.`,
    originalText: `**Industrial Relations Code, 2020**

Section 70 — Conditions for retrenchment of workers:
No worker employed in any industry who has been in continuous service for not less than one year under an employer shall be retrenched by that employer unless—
(a) the worker has been given one month's notice in writing indicating the reasons for retrenchment;
(b) the worker has been paid, at the time of retrenchment, compensation which shall be equivalent to fifteen days' average pay for every completed year of continuous service or any part thereof in excess of six months.

Section 77 — Prior permission of Government for lay-off, retrenchment, and closure in certain establishments with three hundred or more workers.`,
    sources: [
      { title: 'Industrial Relations Code, 2020', section: 'Sections 70, 77', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['minimum-wages', 'workplace-safety'],
  },
  {
    id: 'social-security',
    categoryId: 'labor-rights',
    title: 'Social Security Benefits',
    summary: 'Provident fund, gratuity, maternity benefits, and insurance for workers.',
    simplifiedText: `Workers are entitled to various social security benefits:

**Provident Fund (PF).** Both you and your employer contribute 12% of your basic salary to the Employee Provident Fund. This builds your retirement corpus.

**Gratuity.** If you have worked for 5 or more years, you are entitled to gratuity upon leaving — calculated as 15 days' wages for each completed year.

**Maternity benefits.** Women employees are entitled to 26 weeks of paid maternity leave (for the first two children). Employers cannot dismiss a woman during her maternity leave.

**Employee State Insurance (ESI).** For employees earning up to ₹21,000/month, ESI provides medical care, sickness benefits, maternity benefits, and disability benefits.

**Pension.** Under the Employees' Pension Scheme, you may be eligible for a monthly pension after retirement at age 58 with at least 10 years of eligible service.`,
    originalText: `**Code on Social Security, 2020**

Section 16 — Employer's contribution to Provident Fund shall not be less than 12% of wages.

Section 53 — Gratuity: Every employee who has completed five years of continuous service shall be entitled to gratuity at the rate of fifteen days wages for every completed year of service.

Section 60 — Maternity benefit: Every woman shall be entitled to maternity benefit for a period of twenty-six weeks.`,
    sources: [
      { title: 'Code on Social Security, 2020', section: 'Sections 16, 53, 60', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['minimum-wages', 'workplace-safety'],
  },

  // Digital Rights
  {
    id: 'data-privacy',
    categoryId: 'digital-rights',
    title: 'Data Privacy & Protection',
    summary: 'Your rights over your personal data under India\'s data protection law.',
    simplifiedText: `The Digital Personal Data Protection Act, 2023 gives you strong data rights:

**Consent is king.** No one can collect or process your personal data without your clear, informed consent.

**Right to know.** You have the right to know what personal data is being collected, why it's being collected, and who it's shared with.

**Right to correction.** You can ask any organization to correct your inaccurate personal data.

**Right to erasure.** You can request deletion of your personal data when it's no longer needed.

**Right to grievance redressal.** If your data rights are violated, you can file a complaint with the Data Protection Board of India.

**Data breach notification.** Organizations must notify you and the Data Protection Board if there is a breach of your personal data.

**Children's data.** Extra protection for children's data — processing requires parental consent and behavioral tracking of children is prohibited.`,
    originalText: `**Digital Personal Data Protection Act, 2023**

Section 4 — Personal data may be processed only for a lawful purpose for which an individual has given consent.

Section 11 — Rights of Data Principal:
(1) Right to obtain information about processing
(2) Right to correction and erasure of personal data
(3) Right of grievance redressal
(4) Right to nominate

Section 8 — General obligations of Data Fiduciary: Every Data Fiduciary shall make reasonable efforts to ensure the accuracy and completeness of data.

Section 9 — Additional obligations: Obligations in relation to children — obtaining verifiable consent of parent or lawful guardian.`,
    sources: [
      { title: 'Digital Personal Data Protection Act, 2023', section: 'Sections 4, 8, 9, 11', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['cyber-crime', 'online-free-speech'],
  },
  {
    id: 'cyber-crime',
    categoryId: 'digital-rights',
    title: 'Cyber Crime Protections',
    summary: 'Laws protecting you from hacking, identity theft, online fraud, and cyber harassment.',
    simplifiedText: `Indian law provides strong protections against cyber crimes:

**Hacking is a crime.** Unauthorized access to any computer system is punishable with imprisonment up to 3 years and fines.

**Identity theft.** Using someone else's identity credentials fraudulently is a criminal offense.

**Cyber harassment.** Sending offensive, threatening, or sexually explicit messages electronically is a punishable offense.

**Phishing and online fraud.** Cheating through electronic means, including phishing, is punishable with imprisonment up to 3 years.

**How to report.** You can report cyber crimes at cybercrime.gov.in or call the helpline 1930. You can also file an FIR at any police station.

**Preserve evidence.** Take screenshots, save emails and messages, and note down URLs. This digital evidence is admissible in court.`,
    originalText: `**Information Technology Act, 2000**

Section 43 — Penalty and compensation for damage to computer, computer system, etc.

Section 66 — Computer related offences: If any person, dishonestly or fraudulently, does any act referred to in section 43, he shall be punishable with imprisonment for a term which may extend to three years or with fine which may extend to five lakh rupees or with both.

Section 66C — Punishment for identity theft
Section 66D — Punishment for cheating by personation by using computer resource

**Bharatiya Nyaya Sanhita, 2023**
Section 318 — Cheating by personation using electronic means.`,
    sources: [
      { title: 'Information Technology Act, 2000', section: 'Sections 43, 66, 66C, 66D', type: 'statute', url: 'https://legislative.gov.in/' },
      { title: 'Bharatiya Nyaya Sanhita, 2023', section: 'Section 318', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['data-privacy', 'online-free-speech'],
  },
  {
    id: 'online-free-speech',
    categoryId: 'digital-rights',
    title: 'Online Free Speech',
    summary: 'Your right to express yourself online and the limits of online speech.',
    simplifiedText: `Your right to free speech extends to the internet:

**Online speech is protected.** Article 19(1)(a) of the Constitution protects freedom of speech and expression, and courts have held that this extends to online expression.

**Reasonable restrictions apply.** Just like offline speech, online speech can be restricted on grounds of sovereignty and integrity of India, security of the state, friendly relations with foreign states, public order, decency or morality, contempt of court, defamation, or incitement to an offense.

**Intermediary guidelines.** Social media platforms must follow the IT (Intermediary Guidelines) Rules, 2021, which require them to have grievance redressal mechanisms and respond to user complaints. However, platforms cannot arbitrarily remove content without reason.

**The Shreya Singhal judgment.** The Supreme Court struck down Section 66A of the IT Act, which had been used to arrest people for social media posts. This landmark judgment strengthened online free speech.`,
    originalText: `**Constitution of India**
Article 19(1)(a) — All citizens shall have the right to freedom of speech and expression.
Article 19(2) — Reasonable restrictions on the exercise of the right.

**Shreya Singhal v. Union of India (2015)**
The Supreme Court struck down Section 66A of the Information Technology Act, 2000 as unconstitutional, holding that it violated Article 19(1)(a) of the Constitution.

**Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021**
Rule 3 — Due diligence by intermediary: establish grievance redressal mechanism, appoint grievance officer, respond to complaints within specified timelines.`,
    sources: [
      { title: 'Constitution of India', section: 'Article 19(1)(a), 19(2)', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
      { title: 'Shreya Singhal v. Union of India (2015)', section: 'AIR 2015 SC 1523', type: 'case-law' },
      { title: 'IT Intermediary Guidelines Rules, 2021', section: 'Rule 3', type: 'regulation' },
    ],
    relatedTopicIds: ['data-privacy', 'cyber-crime'],
  },

  // Property Rights
  {
    id: 'property-ownership',
    categoryId: 'property-rights',
    title: 'Property Ownership Rights',
    summary: 'Your constitutional and statutory rights to own, acquire, and dispose of property.',
    simplifiedText: `Property rights in India are legally protected:

**Right to property.** While no longer a fundamental right (after the 44th Amendment), the right to property remains a constitutional right under Article 300A. No person can be deprived of their property except by authority of law.

**Types of property.** Property can be movable (vehicles, jewelry, money) or immovable (land, buildings). Different laws apply to each.

**Registration is crucial.** Any sale or transfer of immovable property must be registered under the Registration Act, 1908 to be legally valid.

**Title verification.** Before buying property, always verify the seller's title, check for any encumbrances (existing loans or claims), and ensure all previous transactions are properly documented.

**Women's property rights.** Women have equal rights to inherit and own property. The Hindu Succession Act grants daughters equal coparcenary rights in ancestral property.`,
    originalText: `**Article 300A of the Constitution**
No person shall be deprived of his property save by authority of law.

**Transfer of Property Act, 1882**
Section 5 — "Transfer of property" means an act by which a living person conveys property, in present or in future, to one or more other living persons.

**Registration Act, 1908**
Section 17 — Documents of which registration is compulsory: instruments of gift of immovable property, non-testamentary instruments transferring or assigning immovable property.

**Hindu Succession (Amendment) Act, 2005**
Section 6 — Daughter of a coparcener shall by birth become a coparcener in her own right in the same manner as the son.`,
    sources: [
      { title: 'Constitution of India', section: 'Article 300A', type: 'constitution', url: 'https://legislative.gov.in/constitution-of-india/' },
      { title: 'Transfer of Property Act, 1882', section: 'Section 5', type: 'statute', url: 'https://legislative.gov.in/' },
      { title: 'Registration Act, 1908', section: 'Section 17', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['tenant-rights', 'inheritance-laws'],
  },
  {
    id: 'tenant-rights',
    categoryId: 'property-rights',
    title: 'Tenant Rights',
    summary: 'Your rights and protections as a tenant renting property.',
    simplifiedText: `If you're renting a property, you have important rights:

**Written agreement.** Always insist on a written rental agreement. Oral agreements are hard to enforce.

**Security deposit limits.** Under the Model Tenancy Act, 2021, the security deposit cannot exceed 2 months' rent for residential property.

**No arbitrary eviction.** Your landlord cannot evict you without proper legal procedure and valid grounds such as non-payment of rent, misuse of property, or structural repairs needed.

**Notice period.** Both tenant and landlord must give proper notice before termination — usually as specified in the agreement, or a minimum period provided by law.

**Essential services.** The landlord cannot cut off electricity, water, or other essential services to force you out. This is illegal.

**Rent receipts.** You have the right to receive rent receipts from your landlord. These are important for tax purposes and as proof of payment.

**Fair rent.** In some states, rent control laws prevent landlords from charging excessive rent.`,
    originalText: `**Model Tenancy Act, 2021**

Section 8 — Security deposit to be paid by tenant shall not exceed two months' rent in case of residential premises.

Section 21 — Eviction: No landlord shall evict a tenant without an order from the Rent Authority.

Section 22 — Grounds for eviction: non-payment of rent, misuse of premises, material damage, sub-letting without consent, etc.

Section 25 — No landlord shall withhold any essential supply or service to the premises occupied by the tenant.`,
    sources: [
      { title: 'Model Tenancy Act, 2021', section: 'Sections 8, 21, 22, 25', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['property-ownership', 'inheritance-laws'],
  },
  {
    id: 'inheritance-laws',
    categoryId: 'property-rights',
    title: 'Inheritance & Succession Laws',
    summary: 'How property is inherited and your rights to ancestral and self-acquired property.',
    simplifiedText: `Inheritance laws determine how property passes after death:

**Two types of succession.** If the deceased left a valid will, "testamentary succession" applies. If not, "intestate succession" applies (governed by personal laws).

**Hindu Succession Act.** For Hindus, Buddhists, Jains, and Sikhs: Class I heirs (mother, widow, sons, daughters) have first claim. Daughters have equal rights as sons in ancestral property (2005 amendment).

**Muslim inheritance.** Under Muslim Personal Law, specific shares are designated for different relatives. A Muslim can dispose of only one-third of property by will.

**Indian Succession Act.** Applies to Christians and Parsis. Provides for distribution among spouse, children, and other relatives.

**Writing a will.** Anyone above 18 years of sound mind can write a will. While registration is not mandatory, it's strongly recommended.

**Self-acquired vs ancestral.** Self-acquired property can be freely disposed of by will. Ancestral property follows specific succession rules.`,
    originalText: `**Hindu Succession Act, 1956 (as amended)**

Section 6 — Interest of a Hindu Mitakshara coparcener: The daughter of a coparcener shall by birth become a coparcener in the same manner as the son.

Section 8 — The property of a male Hindu dying intestate shall devolve according to the provisions of this Chapter upon the heirs specified in Class I of the Schedule.

**Indian Succession Act, 1925**
Section 59 — Every person of sound mind not being a minor may dispose of his property by will.

**Muslim Personal Law (Shariat) Application Act, 1937**
Rules of inheritance as per the Quran and Hadith traditions apply for intestate succession of Muslims.`,
    sources: [
      { title: 'Hindu Succession Act, 1956', section: 'Sections 6, 8', type: 'statute', url: 'https://legislative.gov.in/' },
      { title: 'Indian Succession Act, 1925', section: 'Section 59', type: 'statute', url: 'https://legislative.gov.in/' },
    ],
    relatedTopicIds: ['property-ownership', 'tenant-rights'],
  },
];

export function getTopicsByCategory(categoryId: string): Topic[] {
  return topics.filter((t) => t.categoryId === categoryId);
}

export function getTopicById(topicId: string): Topic | undefined {
  return topics.find((t) => t.id === topicId);
}

export function getRelatedTopics(topicId: string): Topic[] {
  const topic = getTopicById(topicId);
  if (!topic) return [];
  return topic.relatedTopicIds
    .map((id) => getTopicById(id))
    .filter(Boolean) as Topic[];
}
