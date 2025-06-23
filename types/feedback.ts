export interface QuestionEvaluation {
    score: number;
    coverage: string;
    missed_points: string[];
    depth: string;
  }
  
  export interface QuestionFeedback {
    question_id: number;
    question: string;
    candidate_answer: string;
    candidate_answer_summary?: string;
    expected_ideal_points: string[];
    evaluation: QuestionEvaluation;
    recommendation: string;
    actual_answer?: string;
  }
  
  export interface ScoreItem {
    score: number;
    commentary: string;
  }
  
  export interface Scorecard {
    technical_skills: ScoreItem;
    problem_solving: ScoreItem;
    communication: ScoreItem;
    confidence: ScoreItem;
  }