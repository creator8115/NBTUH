export type GuideTag =
  | "pricing"
  | "followup"
  | "marketing"
  | "hiring"
  | "focus"
  | "numbers";

export type QuestionOption = {
  id: string;
  label: string;
  weights: Partial<Record<GuideTag, number>>;
};

export type Question = {
  id: string;
  prompt: string;
  options: QuestionOption[];
};

export const questions: Question[] = [
  {
    id: "situation",
    prompt: "Which situation sounds most familiar?",
    options: [
      {
        id: "busy-no-revenue-clarity",
        label:
          "I stay busy but couldn't tell you what's actually producing revenue.",
        weights: { marketing: 3 },
      },
      {
        id: "never-checked-pricing",
        label: "I have clients, but I've never checked whether I'm charging enough.",
        weights: { pricing: 3 },
      },
      {
        id: "networking-no-followthrough",
        label:
          "I leave networking events motivated but don't always know what to do next.",
        weights: { focus: 2, followup: 2 },
      },
      {
        id: "overthink-followup",
        label:
          "I know I should follow up with people. I usually overthink what to say.",
        weights: { followup: 3 },
      },
      {
        id: "buys-software",
        label: "I keep buying software hoping it solves a bigger problem.",
        weights: { focus: 2, numbers: 1 },
      },
    ],
  },
  {
    id: "hardest",
    prompt: "Which feels hardest right now?",
    options: [
      { id: "pricing", label: "Pricing my services", weights: { pricing: 3 } },
      {
        id: "focus",
        label: "Knowing what to focus on",
        weights: { focus: 3 },
      },
      {
        id: "followup",
        label: "Following up",
        weights: { followup: 3 },
      },
      {
        id: "revenue",
        label: "Growing revenue",
        weights: { marketing: 3 },
      },
      {
        id: "numbers",
        label: "Understanding my numbers",
        weights: { numbers: 3 },
      },
      {
        id: "organized",
        label: "Getting organized",
        weights: { numbers: 2, focus: 1 },
      },
    ],
  },
  {
    id: "pricing-review",
    prompt: "When was the last time you intentionally reviewed your pricing?",
    options: [
      { id: "never", label: "Never", weights: { pricing: 3 } },
      { id: "year-ago", label: "Over a year ago", weights: { pricing: 2 } },
      { id: "within-year", label: "Within the last year", weights: { pricing: 1 } },
      { id: "recently", label: "Recently", weights: { pricing: 0 } },
    ],
  },
  {
    id: "client-source",
    prompt: "How do new clients usually find you?",
    options: [
      {
        id: "not-sure",
        label: "I'm not sure, it just sort of happens.",
        weights: { marketing: 3 },
      },
      {
        id: "referrals-only",
        label: "Referrals only. I haven't tried to grow beyond that.",
        weights: { marketing: 2 },
      },
      {
        id: "post-no-track",
        label: "I post content but rarely track what happens after.",
        weights: { marketing: 3 },
      },
      {
        id: "consistent-process",
        label: "I have a consistent process that's working.",
        weights: { marketing: 0 },
      },
    ],
  },
  {
    id: "after-meeting",
    prompt: "What usually happens after you meet someone promising, at an event or online?",
    options: [
      {
        id: "mean-to",
        label: "I mean to follow up, and then time passes.",
        weights: { followup: 3 },
      },
      {
        id: "once-then-drop",
        label: "I follow up once and let it drop if they don't respond.",
        weights: { followup: 2 },
      },
      {
        id: "wait-for-them",
        label: "I usually just wait for them to reach out first.",
        weights: { followup: 3 },
      },
      {
        id: "consistent-system",
        label: "I have a system and follow up consistently.",
        weights: { followup: 0 },
      },
    ],
  },
  {
    id: "hiring",
    prompt: "Are you currently considering hiring help, a contractor, or an agency?",
    options: [
      {
        id: "yes-no-numbers",
        label: "Yes, but I haven't run the numbers.",
        weights: { hiring: 3 },
      },
      {
        id: "think-talk-out",
        label: "I think about it but talk myself out of it.",
        weights: { hiring: 2 },
      },
      {
        id: "have-help-unsure",
        label: "I already have help, and I'm not sure it's paying off.",
        weights: { hiring: 2, numbers: 1 },
      },
      {
        id: "not-right-now",
        label: "Not right now.",
        weights: { hiring: 0 },
      },
    ],
  },
  {
    id: "week-clarity",
    prompt: "At the end of a work week, how clear are you on what actually moved the business forward?",
    options: [
      {
        id: "blurs-together",
        label: "Not very. It all blurs together.",
        weights: { focus: 3 },
      },
      {
        id: "second-guess",
        label: "Somewhat, but I second-guess it.",
        weights: { focus: 2 },
      },
      {
        id: "very-clear",
        label: "Very clear.",
        weights: { focus: 0 },
      },
    ],
  },
  {
    id: "tracking",
    prompt: "How do you currently track your revenue and expenses?",
    options: [
      {
        id: "bank-balance",
        label: "I don't really. I just check my bank balance.",
        weights: { numbers: 3 },
      },
      {
        id: "spreadsheet-rarely",
        label: "I have a spreadsheet or software but rarely look at it.",
        weights: { numbers: 2 },
      },
      {
        id: "review-regularly",
        label: "I review it regularly.",
        weights: { numbers: 0 },
      },
    ],
  },
];
