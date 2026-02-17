// ===============================
// MOCK USER DATA
// ===============================

export const mockUser = {
  id: 1,
  name: "Muhammad Ali",
  email: "ali@example.com",
  joined: "January 2024",
  bio: "Passionate AI learner. Love building modern web apps with Next.js and exploring machine learning concepts.",
  avatar: "/avatar.png",
  progress: 72,
  rank: 4,
  totalPoints: 1450,
};



// ===============================
// MOCK QUIZZES DATA
// ===============================

export const mockQuizzes = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Test your knowledge of React basics including hooks and components.",
    image: "/quiz/react.png",
    difficulty: "Beginner",
    questions: 10,
  },
  {
    id: 2,
    title: "Next.js Advanced",
    description: "Server components, routing, layouts and optimization.",
    image: "/quiz/next.png",
    difficulty: "Intermediate",
    questions: 12,
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    description: "Deep dive into ES6+, closures, async/await.",
    image: "/quiz/js.png",
    difficulty: "Intermediate",
    questions: 15,
  },
  {
    id: 4,
    title: "AI Basics",
    description: "Understand AI, ML and neural networks fundamentals.",
    image: "/quiz/ai.png",
    difficulty: "Beginner",
    questions: 8,
  },
  {
    id: 5,
    title: "Machine Learning",
    description: "Supervised vs unsupervised learning concepts.",
    image: "/quiz/ml.png",
    difficulty: "Advanced",
    questions: 14,
  },
  {
    id: 6,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework mastery.",
    image: "/quiz/tailwind.png",
    difficulty: "Beginner",
    questions: 9,
  },
];



// ===============================
// MOCK QUIZ QUESTIONS
// ===============================

export const mockQuestions = {
  1: [
    {
      id: 1,
      question: "What is React?",
      options: [
        "Library",
        "Framework",
        "Database",
        "Programming Language"
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "Which hook is used for state?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      correctAnswer: 1,
    },
  ],
};



// ===============================
// MOCK FAQ DATA
// ===============================

export const mockFAQ = [
  {
    question: "How do I start a quiz?",
    answer: "Go to the Quiz section and choose any available quiz."
  },
  {
    question: "How is my progress tracked?",
    answer: "Your progress is automatically saved after each completed quiz."
  },
  {
    question: "Can I retake quizzes?",
    answer: "Yes! You can retake quizzes anytime to improve your score."
  },
  {
    question: "Is this platform free?",
    answer: "Yes, currently all features are free for learning purposes."
  },
];



// ===============================
// MOCK LEADERBOARD
// ===============================

export const mockLeaderboard = [
  { id: 1, name: "Ali", points: 2000 },
  { id: 2, name: "Ahmed", points: 1800 },
  { id: 3, name: "Fatima", points: 1600 },
  { id: 4, name: "Zain", points: 1500 },
  { id: 5, name: "Ayesha", points: 1400 },
];



// ===============================
// MOCK ANALYTICS DATA
// ===============================

export const mockAnalytics = {
  completedQuizzes: 12,
  averageScore: 85,
  studyHours: 42,
  weeklyProgress: [65, 70, 75, 80, 85, 90],
};



// ===============================
// MOCK AI RECOMMENDATIONS
// ===============================

export const mockRecommendations = [
  "Practice more advanced React hooks.",
  "Improve JavaScript async concepts.",
  "Revise machine learning basics.",
];



// ===============================
// MOCK AI PREDICTION DATA
// ===============================

export const mockPrediction = {
  nextScorePrediction: 92,
  improvementRate: "15%",
  recommendation: "Focus on solving more intermediate quizzes.",
};
