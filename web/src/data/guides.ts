export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Guide = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tag: string;
  timeEstimate: string;
  difficulty: Difficulty;
  featured: boolean;
  problem: string;
  whoItsFor: string;
  whatYoullComplete: string;
  whatYoullLeaveWith: string[];
  faqs: { question: string; answer: string }[];
  /** null means the guide isn't live on Gumroad yet; show a notify-me form instead. */
  gumroadUrl: string | null;
};

export const guides: Guide[] = [
  {
    slug: "am-i-charging-enough",
    title: "Am I Charging Enough?",
    tagline:
      "A working session with your own numbers to find your real break-even and a defensible price.",
    category: "Pricing",
    tag: "pricing",
    timeEstimate: "10 minutes",
    difficulty: "Beginner",
    featured: true,
    problem:
      "Most pricing gets set once, early, by guessing, and never gets revisited even as costs and time change. You end up with a number that felt right in month one and hasn't been checked since.",
    whoItsFor:
      "Service-based business owners who have clients and revenue, but have never actually calculated whether their price covers their real costs, time, and margin.",
    whatYoullComplete:
      "A short worksheet walking through your fixed costs, your time per client, and your margin target, ending in an actual number.",
    whatYoullLeaveWith: [
      "Your monthly break-even number",
      "A pricing recommendation based on your business",
      "Your monthly revenue target",
    ],
    faqs: [
      {
        question: "Do I need to know accounting to do this?",
        answer:
          "No. If you can estimate your monthly costs and roughly how many hours you spend per client, that's enough to start.",
      },
      {
        question: "What if I sell products, not services?",
        answer:
          "The break-even math still applies. The worksheet includes a variant for per-unit costs instead of per-hour time.",
      },
      {
        question: "Will this tell me exactly what to charge?",
        answer:
          "It gives you a defensible floor and a target, not a single magic number. The final call on positioning is still yours.",
      },
    ],
    gumroadUrl: "https://nobodytaughtushow.gumroad.com/l/dxyuha",
  },
  {
    slug: "what-do-i-even-say",
    title: "What Do I Even Say?",
    tagline:
      "A five-question messaging system with AI prompts that turn what you already do into words people respond to.",
    category: "Follow-Up",
    tag: "followup",
    timeEstimate: "10 minutes",
    difficulty: "Beginner",
    featured: true,
    problem:
      "You know your business works. You've helped people, created results, and know there's a reason someone chooses you, but when it's time to explain that reason in a message, your words suddenly feel flat.",
    whoItsFor:
      "Business owners who can do the work but freeze up when it's time to describe it, whether that's a DM, a follow-up, or an offer that just isn't landing.",
    whatYoullComplete:
      "You'll answer five questions about your business, then use three AI prompts to turn those answers into messages that sound like you, not a swipe file of scripts.",
    whatYoullLeaveWith: [
      "Clarity on why people actually choose you over the alternative",
      "Three AI prompts that turn your own answers into ready-to-use messaging",
      "Words for your offer that sound like you, not a borrowed template",
    ],
    faqs: [
      {
        question: "Are these generic scripts?",
        answer:
          "No. You answer five questions about your business first, then three AI prompts turn those specific answers into your own messaging, not a fill-in-the-blank template.",
      },
      {
        question: "Do I need to already use AI tools?",
        answer:
          "No prior experience needed. The guide gives you the exact prompts to paste into any AI chat tool you already have access to.",
      },
    ],
    gumroadUrl: "https://nobodytaughtushow.gumroad.com/l/basxk",
  },
  {
    slug: "is-my-marketing-actually-working",
    title: "Is My Marketing Actually Working?",
    tagline:
      "A plain-language audit of where your attention is actually going, and whether it's producing anything.",
    category: "Marketing",
    tag: "marketing",
    timeEstimate: "20 minutes",
    difficulty: "Intermediate",
    featured: true,
    problem:
      "You're active, you're posting, you're showing up, and you genuinely can't tell whether any of it is connected to the revenue coming in.",
    whoItsFor:
      "Business owners who stay busy on marketing but have never actually traced which activity, if any, is producing paying clients.",
    whatYoullComplete:
      "A simple audit connecting your last ten clients back to how they actually found and chose you, revealing what's real and what's noise.",
    whatYoullLeaveWith: [
      "A clear map of which channels have actually produced clients",
      "Permission to stop the activity that isn't working",
      "One thing to double down on next month",
    ],
    faqs: [
      {
        question: "What if I don't have ten past clients yet?",
        answer:
          "Use however many you have. Even three or four data points usually reveal a pattern.",
      },
      {
        question: "Does this require analytics tools?",
        answer:
          "No. It's built around memory and simple questions, not dashboards.",
      },
    ],
    gumroadUrl: null,
  },
  {
    slug: "can-i-afford-to-hire",
    title: "Can I Afford to Hire?",
    tagline:
      "Run the real numbers before you commit to your first hire, contractor, or agency retainer.",
    category: "Hiring",
    tag: "hiring",
    timeEstimate: "20 minutes",
    difficulty: "Intermediate",
    featured: true,
    problem:
      "You're maxed out and the instinct is to hire help, but you've never actually modeled whether the revenue supports it or whether you'd just be trading cash flow for relief.",
    whoItsFor:
      "Owners considering their first hire, contractor, or retainer, who want to know the real number before they commit to it.",
    whatYoullComplete:
      "A cash-flow model that accounts for ramp-up time, so you're not just checking whether you can afford month one.",
    whatYoullLeaveWith: [
      "The maximum you can actually afford to pay, monthly",
      "How many months of runway you need before hiring makes sense",
      "A plain answer: hire now, wait, or hire smaller",
    ],
    faqs: [
      {
        question: "Does this cover contractors and agencies too, not just employees?",
        answer: "Yes, the model works for any recurring outside cost.",
      },
      {
        question: "What if my revenue is inconsistent month to month?",
        answer:
          "The worksheet uses your trailing average and your worst recent month, not just your best one.",
      },
    ],
    gumroadUrl: null,
  },
  {
    slug: "what-should-i-focus-on-next",
    title: "What Should I Focus On Next?",
    tagline:
      "A short exercise to separate what's actually urgent from what just feels urgent.",
    category: "Focus",
    tag: "focus",
    timeEstimate: "15 minutes",
    difficulty: "Beginner",
    featured: false,
    problem:
      "You stay busy, but at the end of the week you couldn't confidently say the busy-ness moved the business forward. Everything feels equally important, which means nothing actually is.",
    whoItsFor:
      "Business owners with more to do than time to do it, who need a way to actually rank it instead of just reacting to whatever feels loudest.",
    whatYoullComplete:
      "A short sorting exercise that separates your task list into what actually produces revenue, what protects it, and what's just noise.",
    whatYoullLeaveWith: [
      "A ranked list of what actually deserves this week",
      "A clear rule for what to say no to by default",
      "A five-minute weekly version you can reuse",
    ],
    faqs: [
      {
        question: "Is this a full productivity system?",
        answer:
          "No, deliberately not. It's one sorting exercise, meant to be fast and repeatable, not a system to maintain.",
      },
    ],
    gumroadUrl: null,
  },
  {
    slug: "do-i-actually-know-my-numbers",
    title: "Do I Actually Know My Numbers?",
    tagline:
      "A plain-language pass at the handful of numbers that actually tell you how your business is doing.",
    category: "Numbers",
    tag: "numbers",
    timeEstimate: "20 minutes",
    difficulty: "Intermediate",
    featured: false,
    problem:
      "You can tell whether business feels good or bad, but you couldn't say by how much, or why, because the numbers live in scattered apps and bank statements instead of anywhere you actually look.",
    whoItsFor:
      "Owners who avoid looking at their own numbers because the process feels overwhelming, not because they don't care.",
    whatYoullComplete:
      "A one-page monthly snapshot covering the five numbers that actually matter, built once so you can update it in ten minutes a month after.",
    whatYoullLeaveWith: [
      "A one-page monthly numbers snapshot, built for your business",
      "A definition of the five numbers that actually matter for you",
      "A ten-minute monthly habit to keep it current",
    ],
    faqs: [
      {
        question: "Do I need accounting software for this?",
        answer:
          "It helps but isn't required. The snapshot works from bank statements and invoices too.",
      },
    ],
    gumroadUrl: null,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideByTag(tag: string): Guide | undefined {
  return guides.find((guide) => guide.tag === tag);
}

export const featuredGuides = guides.filter((guide) => guide.featured);
