import { questions, type GuideTag } from "@/data/questions";
import { getGuideByTag, type Guide } from "@/data/guides";

export type Answers = Record<string, string>;

const emptyScores: Record<GuideTag, number> = {
  pricing: 0,
  followup: 0,
  marketing: 0,
  hiring: 0,
  focus: 0,
  numbers: 0,
};

export function scoreAnswers(answers: Answers): Record<GuideTag, number> {
  const scores = { ...emptyScores };

  for (const question of questions) {
    const selectedId = answers[question.id];
    if (!selectedId) continue;
    const option = question.options.find((o) => o.id === selectedId);
    if (!option) continue;
    for (const [tag, weight] of Object.entries(option.weights)) {
      scores[tag as GuideTag] += weight ?? 0;
    }
  }

  return scores;
}

export function topTag(scores: Record<GuideTag, number>): GuideTag {
  let best: GuideTag = "focus";
  let bestScore = -Infinity;
  for (const [tag, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score;
      best = tag as GuideTag;
    }
  }
  return best;
}

const snapshotSentences: Record<GuideTag, string> = {
  pricing:
    "Your business appears to be growing, but your pricing hasn't been checked against what you're actually delivering in a long time.",
  followup:
    "Your business appears to be growing, but good opportunities are quietly going cold after the first conversation.",
  marketing:
    "Your business appears to be growing, but a lot of your marketing effort isn't clearly connected to where clients actually come from.",
  hiring:
    "Your business appears to be growing, but you're at capacity, and it isn't yet clear whether bringing on help is affordable.",
  focus:
    "Your business appears to be growing, but many of your decisions are still being made without a consistent system.",
  numbers:
    "Your business appears to be growing, but the numbers that would tell you how well are scattered or rarely reviewed.",
};

export function getSnapshotSentence(tag: GuideTag): string {
  return snapshotSentences[tag];
}

export function recommendGuide(answers: Answers): {
  scores: Record<GuideTag, number>;
  tag: GuideTag;
  snapshot: string;
  guide: Guide;
} {
  const scores = scoreAnswers(answers);
  const tag = topTag(scores);
  const guide = getGuideByTag(tag);
  if (!guide) {
    throw new Error(`No guide configured for tag: ${tag}`);
  }
  return { scores, tag, snapshot: getSnapshotSentence(tag), guide };
}

export const totalQuestions = questions.length;
