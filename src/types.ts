export interface MainsQuestion {
  id: string;
  paper: 'GS-1' | 'GS-2' | 'GS-3' | 'GS-4' | 'Essay';
  year: number;
  marks: number;
  wordLimit: number;
  question: string;
  context: string;
  sampleAnswer: string;
  evaluation: {
    score: number;
    maxScore: number;
    percentage: number;
    dimensionsCovered: string[];
    missingDimensions: string[];
    strengths: string[];
    weaknesses: string[];
    schemesAndArticles: string[];
    modelImprovementTip: string;
    rubricScores: {
      introduction: { score: number; max: number; feedback: string };
      contentDepth: { score: number; max: number; feedback: string };
      structureAndFlow: { score: number; max: number; feedback: string };
      constitutionalBacking: { score: number; max: number; feedback: string };
      wayForward: { score: number; max: number; feedback: string };
    };
  };
}

export interface PrelimsQuestion {
  id: string;
  subject: 'Polity' | 'Economy' | 'Environment' | 'History & Culture' | 'Sci-Tech' | 'CSAT';
  year: number;
  questionText: string;
  statements: string[];
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  eliminationTechnique: string;
  explanation: string;
  sourceReference: string;
  difficulty: 'Moderate' | 'High-Yield' | 'Tricky';
}

export interface CurrentAffairArticle {
  id: string;
  date: string;
  title: string;
  source: 'The Hindu' | 'Indian Express' | 'PIB' | 'Down to Earth';
  gsPaper: 'GS-1' | 'GS-2' | 'GS-3' | 'GS-4';
  syllabusTopic: string;
  summary: string;
  mainsPointers: string[];
  prelimsFacts: string[];
  readTime: string;
}

export interface TopperTestimonial {
  id: string;
  name: string;
  rank: string;
  examYear: string;
  optionalSubject: string;
  service: string;
  quote: string;
  mainsImprovement: string;
  keyFeatureUsed: string;
}
