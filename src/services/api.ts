import {
  MainsQuestion,
  PrelimsQuestion,
  CurrentAffairArticle,
  TopperTestimonial,
} from '../types';
import {
  MAINS_QUESTIONS,
  PRELIMS_QUESTIONS,
  CURRENT_AFFAIRS_ARTICLES,
  TOPPER_TESTIMONIALS,
  SUBJECT_WEIGHTAGES,
  TRUST_METRICS,
} from '../data/mockData';

/**
 * Production API Configuration
 * Set VITE_API_BASE_URL in your .env file (e.g. https://api.upsczone.ai/v1)
 * to automatically switch all components from local seed fallback to your live backend & database.
 */
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
const IS_LIVE_BACKEND_ENABLED = Boolean(API_BASE_URL);

const AUTH_TOKEN_KEY = 'upsczone_auth_token';

export function getAuthToken(): string | null {
  try {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setAuthToken(token: string | null): void {
  try {
    if (token) {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }
  } catch {
    // Ignore storage errors in restricted iframes
  }
}

async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = getAuthToken();
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    throw new Error(`API ${response.status}: ${errorBody || response.statusText}`);
  }

  return response.json() as Promise<T>;
}

/**
 * Dynamic client-side rubric analyzer used as a fallback when VITE_API_BASE_URL is not configured,
 * ensuring custom user edits in the Mains Evaluator produce responsive, realistic feedback.
 */
function evaluateAnswerLocally(
  baseQuestion: MainsQuestion,
  userAnswerText: string
): MainsQuestion['evaluation'] {
  const trimmed = userAnswerText.trim();
  if (trimmed === baseQuestion.sampleAnswer.trim()) {
    return baseQuestion.evaluation;
  }

  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const hasNumberedPoints = /(^|\n)\s*(\d+\.|[-•])/m.test(trimmed);
  const hasWayForward = /way forward|conclusion|reform|recommend/i.test(trimmed);

  // Extract constitutional articles & acts mentioned by the aspirant
  const articleMatches = trimmed.match(/Article\s+\d+[A-Za-z()]*|\b\d+(?:st|nd|rd|th)\s+Amendment|\b[A-Z][A-Za-z\s]+Act,?\s*\d{4}/g) || [];
  const uniqueCitations = Array.from(new Set([...articleMatches, ...baseQuestion.evaluation.schemesAndArticles.slice(0, 2)]));

  const lengthRatio = Math.min(1.1, Math.max(0.4, words / baseQuestion.wordLimit));
  const structureBonus = hasNumberedPoints ? 0.5 : 0;
  const conclusionBonus = hasWayForward ? 0.5 : 0;

  const rawScore = Math.min(
    baseQuestion.marks - 1.5,
    Math.max(
      2.5,
      Number((baseQuestion.evaluation.score * lengthRatio * 0.85 + structureBonus + conclusionBonus).toFixed(1))
    )
  );

  return {
    ...baseQuestion.evaluation,
    score: rawScore,
    percentage: Math.round((rawScore / baseQuestion.marks) * 100),
    schemesAndArticles: uniqueCitations.slice(0, 5),
  };
}

export const UpscZoneApi = {
  isLiveBackendEnabled: () => IS_LIVE_BACKEND_ENABLED,

  /**
   * 1. Fetch Mains Questions
   * Backend Route: GET /mains/questions
   */
  async getMainsQuestions(): Promise<MainsQuestion[]> {
    if (IS_LIVE_BACKEND_ENABLED) {
      try {
        return await apiFetch<MainsQuestion[]>('/mains/questions');
      } catch (err) {
        console.warn('[UPSC ZONE AI] Falling back to seed Mains questions:', err);
      }
    }
    return MAINS_QUESTIONS;
  },

  /**
   * 2. Evaluate a Mains Answer
   * Backend Route: POST /mains/evaluate
   */
  async evaluateMainsAnswer(payload: {
    questionId: string;
    questionText: string;
    answerText: string;
    paper: MainsQuestion['paper'];
  }): Promise<MainsQuestion['evaluation']> {
    if (IS_LIVE_BACKEND_ENABLED) {
      return await apiFetch<MainsQuestion['evaluation']>('/mains/evaluate', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    }

    // Simulated network latency + dynamic local rubric analysis
    await new Promise((resolve) => setTimeout(resolve, 650));
    const baseQuestion =
      MAINS_QUESTIONS.find((q) => q.id === payload.questionId) || MAINS_QUESTIONS[0];
    return evaluateAnswerLocally(baseQuestion, payload.answerText);
  },

  /**
   * 3. Fetch Prelims PYQ & Mock Questions
   * Backend Route: GET /prelims/questions?subject=...
   */
  async getPrelimsQuestions(subject?: string): Promise<PrelimsQuestion[]> {
    if (IS_LIVE_BACKEND_ENABLED) {
      try {
        const query = subject && subject !== 'All' ? `?subject=${encodeURIComponent(subject)}` : '';
        return await apiFetch<PrelimsQuestion[]>(`/prelims/questions${query}`);
      } catch (err) {
        console.warn('[UPSC ZONE AI] Falling back to seed Prelims questions:', err);
      }
    }
    if (!subject || subject === 'All') return PRELIMS_QUESTIONS;
    return PRELIMS_QUESTIONS.filter((q) =>
      q.subject.toLowerCase().includes(subject.toLowerCase())
    );
  },

  /**
   * 4. Fetch Daily Current Affairs & Editorial Synthesis
   * Backend Route: GET /current-affairs?paper=...
   */
  async getCurrentAffairs(gsPaper?: string): Promise<CurrentAffairArticle[]> {
    if (IS_LIVE_BACKEND_ENABLED) {
      try {
        const query = gsPaper && gsPaper !== 'All' ? `?paper=${encodeURIComponent(gsPaper)}` : '';
        return await apiFetch<CurrentAffairArticle[]>(`/current-affairs${query}`);
      } catch (err) {
        console.warn('[UPSC ZONE AI] Falling back to seed Current Affairs:', err);
      }
    }
    if (!gsPaper || gsPaper === 'All') return CURRENT_AFFAIRS_ARTICLES;
    return CURRENT_AFFAIRS_ARTICLES.filter((a) => a.gsPaper === gsPaper);
  },

  /**
   * 5. Fetch Verified Topper Testimonials
   * Backend Route: GET /testimonials
   */
  async getTestimonials(): Promise<TopperTestimonial[]> {
    if (IS_LIVE_BACKEND_ENABLED) {
      try {
        return await apiFetch<TopperTestimonial[]>('/testimonials');
      } catch (err) {
        console.warn('[UPSC ZONE AI] Falling back to seed Testimonials:', err);
      }
    }
    return TOPPER_TESTIMONIALS;
  },

  /**
   * 6. Authenticate / Register Aspirant
   * Backend Route: POST /auth/signin or POST /auth/signup
   */
  async authenticate(
    mode: 'signin' | 'signup',
    payload: {
      fullName?: string;
      email: string;
      password: string;
      targetYear?: string;
      optionalSubject?: string;
    }
  ): Promise<{ token: string; displayName: string }> {
    if (IS_LIVE_BACKEND_ENABLED) {
      const res = await apiFetch<{
        token: string;
        user: { fullName?: string; name?: string; email: string };
      }>(`/auth/${mode}`, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      setAuthToken(res.token);
      return {
        token: res.token,
        displayName: res.user.fullName || res.user.name || res.user.email.split('@')[0],
      };
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    const displayName = payload.fullName?.trim() || payload.email.split('@')[0] || 'Aspirant';
    setAuthToken('demo_jwt_token');
    return { token: 'demo_jwt_token', displayName };
  },

  /**
   * 7. Capture Lead / Free Starter Kit Subscription
   * Backend Route: POST /leads/subscribe
   */
  async subscribeLead(email: string): Promise<{ success: boolean }> {
    if (IS_LIVE_BACKEND_ENABLED) {
      return await apiFetch<{ success: boolean }>('/leads/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email, source: 'landing_cta' }),
      });
    }
    return { success: true };
  },

  getSubjectWeightages: () => SUBJECT_WEIGHTAGES,
  getTrustMetrics: () => TRUST_METRICS,
};
