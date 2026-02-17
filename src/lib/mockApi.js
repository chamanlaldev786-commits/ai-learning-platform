// src/lib/mockApi.js

// ---------------- MOCK COURSES ----------------
export const mockCourses = [
  {
    id: "1",
    title: "React for Beginners",
    description: "Learn React from scratch",
    lessons: [
      { id: "l1", title: "Introduction to React" },
      { id: "l2", title: "Components and Props" },
    ],
  },
  {
    id: "2",
    title: "Next.js Mastery",
    description: "Complete Next.js Guide",
    lessons: [
      { id: "l1", title: "App Router" },
      { id: "l2", title: "Server Components" },
    ],
  },
];

// src/lib/mockApi.js

export const mockAnalytics = {
  totalUsers: 100,
  totalQuizzes: 20,
  averageScore: 75,
};

export const mockFAQ = [
  {
    question: "how to use platform?",
    answer: "Login and start learning. ",
  },
];
export const mockLeaderboard = [
  { name: "Chamanlal", score: 95 },
  { name: "Ali", score: 90 },
];


// This is a mock data for quizzes in your AI Learning Platform
export const mockQuizzes = [
  {
    id: "q1",
    title: "JavaScript Basics",
    description: "Test your knowledge of JavaScript fundamentals.",
    totalQuestions: 10,
    passingScore: 70,
    timeLimit: 15, // in minutes
    questions: [
      {
        id: "q1-1",
        question: "Which of the following is a JavaScript data type?",
        options: ["String", "Integer", "Float", "All of the above"],
        answer: "All of the above",
      },
      {
        id: "q1-2",
        question: "What does `typeof null` return in JavaScript?",
        options: ["null", "object", "undefined", "boolean"],
        answer: "object",
      },
      {
        id: "q1-3",
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        answer: "const",
      },
      {
        id: "q1-4",
        question: "Which method converts a JSON string to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
        answer: "JSON.parse()",
      },
      {
        id: "q1-5",
        question: "What is the correct way to write a JavaScript arrow function?",
        options: [
          "function() => {}",
          "() => {}",
          "=> function() {}",
          "function => {}",
        ],
        answer: "() => {}",
      },
    ],
  },

  {
    id: "q2",
    title: "HTML Basics",
    description: "Check your understanding of HTML structure and elements.",
    totalQuestions: 5,
    passingScore: 60,
    timeLimit: 10,
    questions: [
      {
        id: "q2-1",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Machine Language",
          "Hyperlink Text Management Language",
          "Hyper Tool Multi Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        id: "q2-2",
        question: "Which HTML tag is used to define a paragraph?",
        options: ["<p>", "<div>", "<h1>", "<span>"],
        answer: "<p>",
      },
      {
        id: "q2-3",
        question: "Which attribute is used to link a CSS file in HTML?",
        options: ["href", "src", "rel", "link"],
        answer: "href",
      },
      {
        id: "q2-4",
        question: "Which tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<hyper>", "<href>"],
        answer: "<a>",
      },
      {
        id: "q2-5",
        question: "What is the correct way to insert an image in HTML?",
        options: [
          '<img src="image.jpg" />',
          '<image src="image.jpg">',
          '<img href="image.jpg">',
          '<pic src="image.jpg" />',
        ],
        answer: '<img src="image.jpg" />',
      },
    ],
  },
];

// ---------------- MOCK USER ----------------
export const mockUser = {
  id: "u1",
  name: "Chaman Lal",
};

// ---------------- MOCK USER PROGRESS ----------------
export const mockUserProgress = [
  {
    courseId: "1",
    completedLessons: 1,
  },
  {
    courseId: "2",
    completedLessons: 0,
  },
];

// ---------------- MOCK QUESTIONS ----------------
export const mockQuestions = [
  {
    id: "q1",
    question: "What is React?",
    options: ["Library", "Framework", "Language"],
    answer: "Library",
  },
];
