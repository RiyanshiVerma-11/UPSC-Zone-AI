import { MainsQuestion, PrelimsQuestion, CurrentAffairArticle, TopperTestimonial } from '../types';

export const MAINS_QUESTIONS: MainsQuestion[] = [
  {
    id: 'mains-1',
    paper: 'GS-2',
    year: 2024,
    marks: 15,
    wordLimit: 250,
    question: 'The Finance Commission plays a critical role in balancing fiscal federalism with macro-economic stability. Discuss with special reference to the terms of reference of the 16th Finance Commission.',
    context: 'Indian Polity & Governance — Federal Structure & Resource Devolution',
    sampleAnswer: `The Finance Commission, constituted under Article 280 of the Constitution, serves as the constitutional arbiter of fiscal federalism in India, balancing vertical and horizontal fiscal devolution while upholding macroeconomic prudence.

1. Role in Balancing Fiscal Federalism:
- Vertical Devolution: Recommends sharing of net proceeds of taxes between Union and States (e.g., 41% under 15th FC), addressing vertical fiscal imbalances created by centralized tax collection and state-level expenditure obligations.
- Horizontal Equity: Addresses inter-state regional disparities using progressive criteria like income distance, demographic performance, and forest cover.
- Institutional Health: Provides grants-in-aid (Article 275) to local self-governing bodies (73rd and 74th Amendments) and disaster management funds.

2. Emerging Challenges & 16th Finance Commission Context:
- Cess and Surcharges: The expanding share of cesses and surcharges (non-divisible pool) exceeding 10% of gross tax revenue shrinks the divisible pool, causing state friction.
- Fiscal Deficit Targets: Balancing the FRBM Act targets (glide path towards 4.5% fiscal deficit) with state demands for capital expenditure freedom.
- Co-operative vs Competitive Federalism: Incentivizing climate resilience, digital infrastructure, and demographic dividend transition without penalizing high-performing states.

Way Forward:
The 16th Finance Commission chaired by Dr. Arvind Panagariya must institutionalize permanent consultative mechanisms, rationalize centrally sponsored schemes (CSS), and balance demographic equity with performance incentives to ensure sustainable cooperative federalism.`,
    evaluation: {
      score: 10.5,
      maxScore: 15,
      percentage: 70,
      dimensionsCovered: [
        'Constitutional backing (Article 280, 275)',
        'Vertical and Horizontal devolution analysis',
        'Cess & Surcharge critique on divisible pool',
        'Local body grants (73rd/74th Amendments)',
        'Mention of 16th FC Chairman Dr. Arvind Panagariya'
      ],
      missingDimensions: [
        'Specific mention of disaster management financing under SDRF/NDRF',
        'A quick diagram illustrating the Divisible Pool vs Consolidated Fund'
      ],
      strengths: [
        'Precise constitutional citation right in the introduction',
        'Clear structural division between federal balance and contemporary 16th FC challenges',
        'Analytical conclusion highlighting permanent consultative framework'
      ],
      weaknesses: [
        'Could include a tabular or bullet comparison of devolution % shifts (14th vs 15th FC)'
      ],
      schemesAndArticles: [
        'Article 280 (Finance Commission)',
        'Article 275 (Grants-in-Aid)',
        'FRBM Act 2003 (Fiscal Responsibility)',
        '73rd & 74th Constitutional Amendments'
      ],
      modelImprovementTip: 'Add a small 3-tier flowchart showing Net Tax Proceeds → Surcharges Exclusion → State Divisible Pool to capture an extra 1.5 marks for presentation.',
      rubricScores: {
        introduction: { score: 2.5, max: 3, feedback: 'Strong context setting with constitutional anchor.' },
        contentDepth: { score: 3.5, max: 4.5, feedback: 'Covered vertical equity, horizontal formula, and modern cess controversy.' },
        structureAndFlow: { score: 2.0, max: 2.5, feedback: 'Subheadings and enumerated points enhance examiner readability.' },
        constitutionalBacking: { score: 1.5, max: 2.5, feedback: 'Good citations of Articles 280 & 275; can add Sarkaria Commission reference.' },
        wayForward: { score: 1.0, max: 2.5, feedback: 'Pragmatic conclusion; linking to NITI Aayog coordination would enrich.' }
      }
    }
  },
  {
    id: 'mains-2',
    paper: 'GS-3',
    year: 2024,
    marks: 10,
    wordLimit: 150,
    question: 'How can India leverage the National Green Hydrogen Mission to achieve energy sovereignty and net-zero targets by 2070? Examine key bottlenecks.',
    context: 'Economy & Environment — Renewable Energy, Climate Goals & Industrial Transition',
    sampleAnswer: `The National Green Hydrogen Mission (NGHM), launched with an outlay of ₹19,744 crore, aims to position India as a global hub for the production, utilization, and export of Green Hydrogen and its derivatives.

Leveraging Potential for Sovereignty & Net-Zero:
1. Decarbonizing Hard-to-Abate Sectors: Directly replaces grey hydrogen and fossil fuels in fertilizer plants, steel manufacturing, and petroleum refineries.
2. Energy Import Substitution: Offsets India's heavy dependence on imported crude oil and LNG (~85% oil import dependency), saving foreign exchange.
3. Clean Power Integration: Utilizes surplus solar and wind power for electrolysis, mitigating RE curtailment and grid intermittency.

Key Bottlenecks:
- Capital Intensity: High capital cost of electrolyzers (PEM and alkaline) and rare mineral dependency (iridium, platinum).
- Cost of Production: Green hydrogen currently costs $4-5/kg vs $1.5-2/kg for grey hydrogen, lacking market parity without heavy viabilities gap funding (VGF).
- Water Stress: Requires 9 litres of demineralized pure water per kg of hydrogen produced, demanding infrastructure near coastal desalination plants.

Way Forward:
Scaling indigenous manufacturing under SIGHT (Strategic Interventions for Green Hydrogen Transition) and creating mandatory green hydrogen purchase obligations will unlock commercial viability.`,
    evaluation: {
      score: 7.5,
      maxScore: 10,
      percentage: 75,
      dimensionsCovered: [
        'Budget outlay & SIGHT program citation',
        'Hard-to-abate sector decarbonization (steel, fertilizers)',
        'Import dependency and forex economics',
        'Technical bottlenecks (electrolyzer cost, water consumption)'
      ],
      missingDimensions: [
        'Export pipeline infrastructure & port connectivity (e.g. Kandla/Paradip hubs)',
        'Reference to Panchamrit climate goals from COP26'
      ],
      strengths: [
        'Concise, high-density facts within the 150-word constraint',
        'Accurate unit metrics ($4-5/kg cost and 9L water requirement)',
        'Targeted policy mechanism (SIGHT) in conclusion'
      ],
      weaknesses: [
        'Intro could explicitly link to the 5 MMT annual production target by 2030'
      ],
      schemesAndArticles: [
        'National Green Hydrogen Mission (₹19,744 Cr)',
        'SIGHT Scheme (Production & Electrolyzer incentives)',
        'COP26 Panchamrit Pledges (Net-Zero 2070)'
      ],
      modelImprovementTip: 'Mention the target of 50 MMT CO2 emission reduction and 5 MMT production by 2030 in your opening definition for extra authority.',
      rubricScores: {
        introduction: { score: 1.5, max: 2, feedback: 'Precise financial outlay mentioned upfront.' },
        contentDepth: { score: 3.5, max: 4, feedback: 'Hard-to-abate sectors and economic impact well synthesized.' },
        structureAndFlow: { score: 1.5, max: 2, feedback: 'Clear dichotomy between leverage points and bottlenecks.' },
        constitutionalBacking: { score: 0.5, max: 1, feedback: 'Environmental jurisprudence (Article 48A / 51A(g)) could be touched.' },
        wayForward: { score: 0.5, max: 1, feedback: 'Actionable policy hook with SIGHT initiative.' }
      }
    }
  },
  {
    id: 'mains-3',
    paper: 'GS-4',
    year: 2023,
    marks: 10,
    wordLimit: 150,
    question: 'Examine the significance of "Emotional Intelligence" in modern civil administration. How does it resolve the conflict between rule compliance and public empathy?',
    context: 'Ethics, Integrity & Aptitude — Emotional Intelligence & Administrative Discretion',
    sampleAnswer: `Emotional Intelligence (EI)—the ability to recognize, understand, and regulate emotions in oneself and others—is an indispensable virtue for civil servants navigating complex socio-political pressures.

Resolving Conflict Between Rule Compliance and Empathy:
1. Preventing Bureaucratic Inertia: Weberian legal-rational bureaucracy often leads to procedural rigidity. EI enables an administrator to perceive systemic distress and invoke benevolent discretionary provisions without violating statutory boundaries.
2. Crisis De-escalation: During law and order flashpoints or communal tensions, high emotional self-regulation prevents knee-jerk punitive actions, fostering dialogue and trust.
3. Compassionate Delivery: In social welfare administration (PDS, pensions), strict biometric failures often exclude genuine destitute beneficiaries. An emotionally intelligent officer exercises administrative empathy through offline override protocols.

Case in Point:
During the COVID-19 migrant crisis, administrators with high EI mobilized community kitchens and psychological counseling beyond rigid rulebooks, upholding constitutional morality.

Conclusion:
EI transforms an official from a mechanical executor of law into an empathetic trustee of the people, harmonizing deontological duty with utilitarian compassion.`,
    evaluation: {
      score: 8.0,
      maxScore: 10,
      percentage: 80,
      dimensionsCovered: [
        'Daniel Goleman EI framework applied to public administration',
        'Critique of Max Weber rigid bureaucracy vs empathetic discretion',
        'Ground-level examples (biometric exclusion, COVID distress)',
        'Philosophical synthesis (deontology vs utilitarianism)'
      ],
      missingDimensions: [
        'Second Administrative Reforms Commission (2nd ARC) recommendation on empathy',
        'Self-awareness dimension in handling political pressure'
      ],
      strengths: [
        'Sophisticated vocabulary and ethical grounding',
        'Realistic administrative dilemmas (biometric mismatch vs PDS eligibility)',
        'Nuanced balance: empathy does not mean violating statutory law'
      ],
      weaknesses: [
        'Could include a small 2x2 matrix: Empathy vs Rule Compliance'
      ],
      schemesAndArticles: [
        'Nolan Committee 7 Principles of Public Life',
        '2nd ARC 4th Report (Ethics in Governance)',
        'Article 38 (Social Order for Welfare of People)'
      ],
      modelImprovementTip: 'Explicitly invoke the 7 Nolan principles (Objectivity, Integrity, Leadership) to anchor your definition of ethical public service.',
      rubricScores: {
        introduction: { score: 2.0, max: 2, feedback: 'Clear definition grounded in administrative context.' },
        contentDepth: { score: 3.0, max: 4, feedback: 'Addressed real-world friction between rules and distress.' },
        structureAndFlow: { score: 1.5, max: 2, feedback: 'Logical transition from theoretical to real administrative examples.' },
        constitutionalBacking: { score: 0.5, max: 1, feedback: 'Constitutional morality cited in conclusion.' },
        wayForward: { score: 1.0, max: 1, feedback: 'Elevated philosophical resolution.' }
      }
    }
  }
];

export const PRELIMS_QUESTIONS: PrelimsQuestion[] = [
  {
    id: 'pyq-1',
    subject: 'Polity',
    year: 2024,
    difficulty: 'High-Yield',
    questionText: 'With reference to the Parliament of India, consider the following statements:',
    statements: [
      'A Bill amending the Constitution requires a prior recommendation of the President of India.',
      'When a Constitution Amendment Bill is presented to the President of India, it is obligatory for the President to give assent.',
      'A Constitution Amendment Bill must be passed by each House by a majority of the total membership of that House and by a majority of not less than two-thirds of the members of that House present and voting.'
    ],
    options: [
      { id: 'A', text: '1 and 2 only' },
      { id: 'B', text: '2 and 3 only' },
      { id: 'C', text: '1 and 3 only' },
      { id: 'D', text: '1, 2 and 3' }
    ],
    correctOptionId: 'B',
    eliminationTechnique: 'Statement 1 is incorrect because Article 368 bills do not require prior presidential recommendation (unlike Money Bills or Article 3 bills). Eliminating Option containing Statement 1 leaves only Option B!',
    explanation: 'Statement 1 is incorrect: Under Article 368, a Constitutional Amendment Bill can be introduced in either House without the prior recommendation of the President. Statement 2 is correct: Under the 24th Constitutional Amendment Act 1971, it was made obligatory for the President to give his assent to a Constitution Amendment Bill. Statement 3 is correct: Article 368(2) specifies this exact special majority requirement for each individual House, with no provision for a joint sitting.',
    sourceReference: 'M. Laxmikanth, Chapter 10: "Amendment of the Constitution", Article 368.'
  },
  {
    id: 'pyq-2',
    subject: 'Environment',
    year: 2023,
    difficulty: 'Tricky',
    questionText: 'Consider the following statements regarding the Wildlife Protection Act (WPA), 1972 (as amended in 2022):',
    statements: [
      'The number of schedules for specially protected animals has been reduced from six to four.',
      'A new schedule has been introduced specifically for specimens listed in the Appendices of CITES.',
      'Vermin animals can now be declared through an executive notification without any parliamentary oversight.'
    ],
    options: [
      { id: 'A', text: 'Only one statement' },
      { id: 'B', text: 'Only two statements' },
      { id: 'C', text: 'All three statements' },
      { id: 'D', text: 'None of the statements' }
    ],
    correctOptionId: 'B',
    eliminationTechnique: 'The 2022 Amendment completely repealed Schedule V (Vermin). The Central government can no longer arbitrarily declare animals as vermin under Schedule V, making Statement 3 false. Statements 1 and 2 are true.',
    explanation: 'The Wildlife (Protection) Amendment Act, 2022 streamlined schedules from 6 to 4: Schedule I (highest protection), Schedule II (lesser protection), Schedule III (protected plants), and Schedule IV (CITES specimens). The previous Schedule V (vermin) was eliminated.',
    sourceReference: 'Ministry of Environment, Forest and Climate Change (MoEFCC) WPA 2022 Gazette notification.'
  },
  {
    id: 'pyq-3',
    subject: 'Economy',
    year: 2024,
    difficulty: 'Moderate',
    questionText: 'Which of the following best describes the term "Sterilization" in the context of Central Banking operations by the Reserve Bank of India (RBI)?',
    statements: [
      'The process of auditing commercial banks to eliminate non-performing assets.',
      'Operations conducted by the central bank to neutralize the effects of foreign exchange inflows/outflows on domestic money supply.',
      'The quantitative tightening of liquidity by mandating higher Statutory Liquidity Ratio (SLR).',
      'The recapitalization of Public Sector Banks through non-interest bearing zero-coupon bonds.'
    ],
    options: [
      { id: 'A', text: 'Statement 1' },
      { id: 'B', text: 'Statement 2' },
      { id: 'C', text: 'Statement 3' },
      { id: 'D', text: 'Statement 4' }
    ],
    correctOptionId: 'B',
    eliminationTechnique: 'Sterilization in macroeconomics specifically refers to offsetting foreign exchange intervention through Open Market Operations (OMO) to insulate the domestic money supply.',
    explanation: 'When foreign capital floods into India, RBI buys dollars to prevent sharp appreciation of the rupee. This releases equivalent rupees into the banking system, threatening inflation. To neutralize (sterilize) this injection, RBI conducts Open Market Operations (OMO) by selling government securities, soaking up excess liquidity.',
    sourceReference: 'NCERT Macroeconomics Class XII, Chapter 6; RBI Monetary Policy Handbook.'
  }
];

export const CURRENT_AFFAIRS_ARTICLES: CurrentAffairArticle[] = [
  {
    id: 'ca-1',
    date: 'Oct 01, 2026',
    title: 'Inter-State River Water Disputes: Supreme Court invokes Article 131 and Federal Dialogue',
    source: 'The Hindu',
    gsPaper: 'GS-2',
    syllabusTopic: 'Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure.',
    summary: 'The Apex Court underscored that persistent tribunal delays in interstate water disputes undermine cooperative federalism, suggesting hybrid mediation councils prior to formal tribunal adjudication.',
    mainsPointers: [
      'Article 262 and Inter-State River Water Disputes Act 1956 limitations (tribunals lack enforcement teeth)',
      'Impact of climate variability on river runoff baselines established in historic awards',
      'Recommendation of a permanent single tribunal bench with time-bound award mechanisms'
    ],
    prelimsFacts: [
      'Article 262 explicitly empowers Parliament to exclude jurisdiction of Supreme Court in interstate water disputes',
      'National Water Development Agency (NWDA) oversees inter-linking of rivers'
    ],
    readTime: '4 min'
  },
  {
    id: 'ca-2',
    date: 'Oct 01, 2026',
    title: 'Carbon Border Adjustment Mechanism (CBAM) and its Economic Repercussions for Indian Metals',
    source: 'Indian Express',
    gsPaper: 'GS-3',
    syllabusTopic: 'Indian Economy and issues relating to planning, mobilization of resources, growth, and international trade.',
    summary: 'EU CBAM enforcement timeline introduces carbon tariffs on steel and aluminum exports. India calls for mutual recognition of carbon offsets and developing nation transition funds at WTO.',
    mainsPointers: [
      'Threat of 20-35% additional tariff on Indian primary aluminum and steel exports to Europe',
      'Conflict with Common But Differentiated Responsibilities (CBDR-RC) principle of UNFCCC',
      'Domestic response: Carbon Credit Trading Scheme (CCTS) rolled out by Bureau of Energy Efficiency'
    ],
    prelimsFacts: [
      'Bureau of Energy Efficiency (BEE) is a statutory body under Energy Conservation Act, 2001',
      'India is the world’s second-largest crude steel producer'
    ],
    readTime: '5 min'
  },
  {
    id: 'ca-3',
    date: 'Sep 30, 2026',
    title: 'Great Nicobar Island Transshipment Port: Ecological Safeguards and Strategic Imperatives',
    source: 'PIB',
    gsPaper: 'GS-3',
    syllabusTopic: 'Infrastructure: Ports, Roads, Energy and Environmental Conservation.',
    summary: 'Galathea Bay International Container Transshipment Terminal reaches milestone clearance with mandated biological corridors for Shompen and Nicobarese indigenous communities and leatherback turtle nesting zones.',
    mainsPointers: [
      'Strategic dominance overlooking the Malacca Strait choke point (securing Indo-Pacific Sea Lines of Communication)',
      'Sovereign transshipment capacity reducing reliance on Colombo and Singapore ports for Indian feeder cargo',
      'Ecological compensation: Compensatory afforestation in mainland states vs local primary rainforest loss'
    ],
    prelimsFacts: [
      'Great Nicobar Biosphere Reserve is included in UNESCO’s Man and the Biosphere (MAB) Program',
      'Shompen are a Particularly Vulnerable Tribal Group (PVTG) indigenous to the interior of Great Nicobar'
    ],
    readTime: '6 min'
  }
];

export const TOPPER_TESTIMONIALS: TopperTestimonial[] = [
  {
    id: 'top-1',
    name: 'Aditi Sharma',
    rank: 'AIR 24',
    examYear: 'UPSC CSE 2023',
    optionalSubject: 'Political Science & IR',
    service: 'Indian Administrative Service (IAS)',
    quote: 'Traditional coaching test series gave me generic feedback like "improve structure" 3 weeks after submission. UPSC ZONE AI evaluated my daily GS-2 and GS-4 answers in 40 seconds, pinpointing missing constitutional articles and landmark judgments. My Mains score jumped by 54 marks.',
    mainsImprovement: '+54 Marks in Mains GS',
    keyFeatureUsed: 'AI Mains Answer Evaluator'
  },
  {
    id: 'top-2',
    name: 'Kavya Subramanian',
    rank: 'AIR 58',
    examYear: 'UPSC CSE 2023',
    optionalSubject: 'Sociology',
    service: 'Indian Administrative Service (IAS)',
    quote: 'The Prelims Elimination Engine mapped 11 years of PYQs and trained my brain to identify subtle distractor traps in UPSC options. It converted my borderline Prelims test scores from 82 to 106 in the real exam.',
    mainsImprovement: '+24 Net Score in Prelims Paper 1',
    keyFeatureUsed: 'Prelims PYQ Intelligence & Mock Simulator'
  },
  {
    id: 'top-3',
    name: 'Rohan Verma',
    rank: 'AIR 89',
    examYear: 'UPSC CSE 2023',
    optionalSubject: 'Geography',
    service: 'Indian Police Service (IPS)',
    quote: 'As a working software engineer studying 4 hours a night, reading 3 newspapers and making manual notes was impossible. The Daily Editorial Synthesis mapped every news item directly to GS syllabus topics with ready-to-quote statistics.',
    mainsImprovement: 'Saved 2.5 hours every day',
    keyFeatureUsed: 'PIB & Editorial AI Digest'
  },
  {
    id: 'top-4',
    name: 'Dr. Priyanshu Gupta',
    rank: 'AIR 114',
    examYear: 'UPSC CSE 2024',
    optionalSubject: 'Medical Science',
    service: 'Indian Foreign Service (IFS)',
    quote: 'The AI Ethics Case Study simulator gave me alternative perspectives on administrative dilemmas that I never thought of. The rubric scoring matches the exact mindset of senior UPSC board evaluators.',
    mainsImprovement: '122 Marks in GS Paper 4',
    keyFeatureUsed: 'Ethics & Case Study Rubric'
  }
];

export const SUBJECT_WEIGHTAGES = [
  { subject: 'Polity & Governance', avgQuestions: 15, trend: 'Stable / High-Yield', focusAreas: 'Fundamental Rights, Constitutional Bodies, Federal Relations, PESA Act' },
  { subject: 'Economy & Dev.', avgQuestions: 17, trend: 'Increasing Analytics', focusAreas: 'Monetary Policy, External Sector, Capital Markets, Fiscal Metrics' },
  { subject: 'Environment & Eco.', avgQuestions: 18, trend: 'Dominant / Interdisciplinary', focusAreas: 'Protected Areas, International Conventions, Biodiversity Hotspots' },
  { subject: 'History & Art & Culture', avgQuestions: 14, trend: 'Conceptual & Factual', focusAreas: 'Buddhism & Jainism, Bhakti Movement, Freedom Struggle (1919-1947)' },
  { subject: 'Science & Technology', avgQuestions: 12, trend: 'Frontier Tech', focusAreas: 'AI & Quantum, Biotechnology, Space Missions, Renewable Energy' },
  { subject: 'Geography', avgQuestions: 13, trend: 'Map-based & Physical', focusAreas: 'Indian Drainage, World Chokepoints, Monsoon Dynamics, Mineral belts' },
  { subject: 'Current Affairs & Misc.', avgQuestions: 11, trend: 'Applied Knowledge', focusAreas: 'Government Initiatives, Global Summits, Multilateral Treaties' }
];

export const TRUST_METRICS = [
  { value: '48,000+', label: 'Active UPSC Aspirants', sub: 'Across 28 states & UTs' },
  { value: '3.2M+', label: 'Mains Answers Evaluated', sub: 'Instant rubric grading' },
  { value: '94.2%', label: 'Syllabus Coverage Match', sub: 'Grounded in UPSC PYQs' },
  { value: '42.8 Marks', label: 'Average Mains Boost', sub: 'Based on 2023-24 cohort' }
];
