"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { questions } from "@/data/questions";
import { recommendGuide, type Answers } from "@/lib/assessment";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

type Stage = "intro" | "question" | "results";

export function AssessmentFlow() {
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentQuestion = questions[step];
  const progress = Math.round((step / questions.length) * 100);

  function handleStart() {
    setStage("question");
    setStep(0);
  }

  function handleSelect(optionId: string) {
    const nextAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(nextAnswers);

    if (step < questions.length - 1) {
      setTimeout(() => setStep((s) => s + 1), 220);
    } else {
      setTimeout(() => setStage("results"), 220);
    }
  }

  function handleBack() {
    if (step === 0) {
      setStage("intro");
      return;
    }
    setStep((s) => s - 1);
  }

  function handleRestart() {
    setAnswers({});
    setStep(0);
    setStage("intro");
  }

  return (
    <div className="mx-auto max-w-2xl">
      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <Eyebrow className="justify-center">Business Snapshot</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
              Take one minute to answer a few questions.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink/70">
              We&apos;ll recommend the best place to start based on where
              your business is today.
            </p>
            <Button onClick={handleStart} className="mt-8">
              Start Your Business Snapshot
            </Button>
          </motion.div>
        )}

        {stage === "question" && currentQuestion && (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-medium text-ink/50">
                <span>
                  Question {step + 1} of {questions.length}
                </span>
                <span>{progress}%</span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-line">
                <motion.div
                  className="h-full rounded-full bg-brass"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="rounded-md border border-line bg-parchment-2 p-8 sm:p-10">
              <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                {currentQuestion.prompt}
              </h3>

              <div className="mt-6 flex flex-col gap-3">
                {currentQuestion.options.map((option) => {
                  const selected = answers[currentQuestion.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect(option.id)}
                      className={`rounded-sm border px-5 py-4 text-left text-sm transition-colors duration-150 sm:text-base ${
                        selected
                          ? "border-forest bg-forest text-parchment"
                          : "border-line bg-parchment text-ink hover:border-forest/40 hover:bg-parchment"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={handleBack}
              className="mt-6 text-sm text-ink/50 transition-colors hover:text-ink"
            >
              &larr; Back
            </button>
          </motion.div>
        )}

        {stage === "results" && (
          <ResultsScreen answers={answers} onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultsScreen({
  answers,
  onRestart,
}: {
  answers: Answers;
  onRestart: () => void;
}) {
  const { snapshot, guide } = recommendGuide(answers);

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="text-center">
        <Eyebrow className="justify-center">Your Business Snapshot</Eyebrow>
        <p className="mx-auto mt-4 max-w-lg font-display text-2xl font-medium text-ink sm:text-3xl">
          {snapshot}
        </p>
        <p className="mt-4 text-ink/60">
          Based on your responses, we&apos;d recommend starting here.
        </p>
      </div>

      <div className="mt-10 rounded-md border border-line border-t-4 border-t-forest bg-parchment-2 p-8 sm:p-10">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/50">
          Recommended Working Guide
        </span>
        <h3 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
          {guide.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-ink/50">
          Estimated completion time: {guide.timeEstimate}
        </p>

        <p className="mt-4 text-sm font-semibold text-ink">
          What you&apos;ll leave with:
        </p>
        <ul className="mt-2 flex flex-col gap-1.5">
          {guide.whatYoullLeaveWith.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-ink/70">
              <span className="text-brass">&bull;</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={guide.gumroadUrl}>Open Working Guide</Button>
          <Button href={`/guides/${guide.slug}/`} variant="ghost">
            See full guide details
          </Button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onRestart}
          className="text-sm text-ink/50 transition-colors hover:text-ink"
        >
          Retake the snapshot
        </button>
      </div>
    </motion.div>
  );
}
