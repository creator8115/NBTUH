export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
  relatedGuideSlug: string;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "why-business-owners-rarely-revisit-pricing",
    title: "Why business owners rarely revisit their pricing",
    dek: "Passion is a poor compass for irreversible choices. Here's what to consult instead.",
    category: "Decision-Making",
    readTime: "6 min read",
    relatedGuideSlug: "what-should-i-focus-on-next",
    body: [
      {
        type: "p",
        text: `"Follow your passion" survives because it sounds true and costs nothing to say. It flatters whoever's giving it and asks nothing of whoever's receiving it. But when you're actually staring at two offers, or deciding whether to leave the firm for the startup, passion turns out to be one of the worst instruments you own for the job. It's not that passion doesn't matter. It's that passion is the wrong kind of signal for decisions where getting it wrong is expensive.`,
      },
      { type: "h2", text: "Passion is a lagging indicator, not a leading one" },
      {
        type: "p",
        text: `Ask people who love their work how that started, and the honest answer is rarely "I felt a calling and then got good at it." More often it runs the other way: they did the work, got competent, started winning at it, and the feeling of passion arrived afterward, attached to the winning. Competence produces passion at least as often as passion produces competence. Which means waiting to feel passionate before you commit to something gets the causality backward.`,
      },
      {
        type: "p",
        text: `This matters most for the decisions where you can't run a cheap experiment first. Choosing which job offer to take, whether to go back for the degree, whether to join the founding team: these are decisions where you don't get to feel your way in gradually. You commit, and the feeling develops or it doesn't, mostly as a function of whether you turn out to be good at it and whether it starts working.`,
      },
      { type: "h2", text: "It doesn't price the trade-off" },
      {
        type: "p",
        text: `The bigger problem is that passion doesn't tell you anything about cost. It's a report on how a thing feels, not an accounting of what you're giving up to have it. You can be genuinely, correctly passionate about a decision and still be making a bad one, because passion was never assessing the trade-off in the first place.`,
      },
      {
        type: "quote",
        text: "Passion tells you what you enjoy today. It has nothing to say about what you'll still be able to live with in five years.",
      },
      { type: "h2", text: "What to consult instead" },
      {
        type: "p",
        text: `Three things hold up better than passion when a decision is expensive to reverse: interest that survives boredom, not just excitement; leverage, whether the decision compounds your position or spends it down; and reversibility, what undoing this actually costs you if you're wrong. None of this means ignore how you feel about a decision. It means stop treating the feeling as the verdict.`,
      },
    ],
  },
  {
    slug: "the-ownership-split-nobody-wants-to-have",
    title: "The ownership split nobody wants to have",
    dek: "The split gets decided by momentum, not agreement, unless you interrupt it on purpose.",
    category: "Founding",
    readTime: "8 min read",
    relatedGuideSlug: "do-i-actually-know-my-numbers",
    body: [
      {
        type: "p",
        text: `Two business partners will spend a full afternoon arguing about which point-of-sale system to buy and ninety seconds agreeing to split the business fifty-fifty. That's not because the split is easy. It's because the software decision has a right answer that a spec sheet can settle, and the ownership conversation doesn't. So most new partnerships do the natural thing: they avoid it, default to an even split "for now," and promise to put it in writing later. Later rarely comes.`,
      },
      { type: "h2", text: "Why the conversation gets skipped" },
      {
        type: "p",
        text: `Three things make partners avoid this on purpose, even when they know better. First, it feels transactional at the exact moment they're trying to build trust. Second, nobody wants to be the one who brings up ownership first, even though the partner who raises it earliest is usually the one most worried about fairness, not least. Third, in the earliest months everyone is contributing roughly the same thing, which is long hours and enthusiasm, so an even split feels obviously correct. It's only later, once contributions diverge, that the split's actual consequences show up.`,
      },
      { type: "h2", text: "The default that isn't a decision" },
      {
        type: "p",
        text: `Most partnerships default to fifty-fifty because it's the path of least resistance in the first excited weeks, not because anyone actually modeled what happens when one partner is doing the invoicing at eleven at night and the other is handling half as much of the operational weight. Nobody sat down and decided this was fair. It's just what felt natural to agree to before there was any business to actually split.`,
      },
      {
        type: "quote",
        text: "A partnership split isn't a referendum on who's more valuable as a person. It's an accounting problem wearing an emotional disguise.",
      },
      { type: "h2", text: "A better way to have it" },
      {
        type: "p",
        text: `The partners who get this right treat it as an accounting exercise, not a negotiation: cash and risk at the start, the book of business each person brought, full-time commitment and timing, and the specialized skill that's hard to replace. Score each partner honestly across these, and the split usually reveals itself instead of needing to be argued for. Have the ownership conversation in month one, not month eighteen. It will feel premature. It is not.`,
      },
    ],
  },
  {
    slug: "why-more-software-rarely-fixes-the-real-problem",
    title: "Why more software rarely fixes the real problem",
    dek: "The hardest exits are the ones with no villain, just a ceiling you can finally see.",
    category: "Focus",
    readTime: "5 min read",
    relatedGuideSlug: "what-should-i-focus-on-next",
    body: [
      {
        type: "p",
        text: `The easy exits come with a villain: a bad manager, a missed promotion, a company that's visibly sinking. Those decisions make themselves. The hard exits, and the hard fixes, are the ones with no inciting incident at all. Everything is fine. And yet something has been quietly not working for a while, and there's no story that justifies changing it, because nothing actually went wrong.`,
      },
      { type: "h2", text: "Ceiling or rough patch" },
      {
        type: "p",
        text: `The first thing to figure out is which one you're actually in, because the two look identical from the inside and require opposite responses. A rough patch is circumstantial: a hard stretch that a real reset would meaningfully dent. A ceiling is structural: the current approach has topped out what it can produce, and no amount of new tooling changes that math.`,
      },
      {
        type: "p",
        text: `The test that actually distinguishes them: imagine you took three real weeks off from the problem entirely. Would the thing that's bothering you be gone, or would it just be waiting for you, unchanged? If a break would fix it, you're in a rough patch. If you can picture the break clearly and the flatness is still there, that's not fatigue talking. That's the ceiling, and another tool won't move it.`,
      },
      {
        type: "quote",
        text: "You don't need a villain to justify changing course. You need evidence that the current approach has stopped compounding.",
      },
      { type: "h2", text: "Why we buy another tool instead" },
      {
        type: "p",
        text: `Buying software is an action you can take today, and it feels like progress, which makes it a very seductive substitute for the harder, slower work of figuring out what's actually broken. The people who get this right stop and ask what specifically the new tool is supposed to fix, before they buy it, not after. If the honest answer is "I'm not totally sure," that uncertainty is the actual problem, and no dashboard resolves it for you.`,
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
