import React, { useState } from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import FeedbackTypeStep from './Steps/FeedbackTypeStep';
import FeedbackContentStep from './Steps/FeedbackContentStep';
import FeedbackSuccessStep from './Steps/FeedbackSuccessStep';


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamento',
    }
  },
};


export type FeedBackType = keyof typeof feedbackTypes;

const WidgetForm: React.FC = () => {
  const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);
  const [feedbackSent, setFeedBackSent] = useState(false);


  const handleRestartFeedback = () => {
    setFeedBackSent(false);
    setFeedBackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedBackType ? (
            <FeedbackTypeStep
              onFeedbackTypeChanged={setFeedBackType}
            />
          ) : (
            <FeedbackContentStep
              feedbackType={feedBackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedBackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        astro
      </footer>
    </div>
  );
}

export default WidgetForm;