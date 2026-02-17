// Centralized data file for the AI Learning Platform

// 📚 COURSES DATA
export const coursesData = [
  {
    id: "javascript",
    title: "JavaScript Fundamentals",
    description: "Learn JavaScript from basics to advanced level. Master variables, loops, functions, and core JavaScript concepts.",
    category: "Programming",
    level: "Beginner",
    progress: 40,
    image: "/images/js.png",
    lessons: [
      {
        id: "variables",
        title: "Variables & Data Types",
        duration: "20 min",
        content: "Learn about var, let, const and different data types in JavaScript."
      },
      {
        id: "loops",
        title: "Loops & Conditions",
        duration: "30 min",
        content: "Master for, while loops and if-else conditions."
      },
      {
        id: "functions",
        title: "Functions & Scope",
        duration: "25 min",
        content: "Understand function declarations, expressions, and scope."
      },
    ],
  },
  {
    id: "react",
    title: "React.js Essentials",
    description: "Build modern UI using components, hooks, and state management. Learn React from scratch.",
    category: "Frontend",
    level: "Intermediate",
    progress: 20,
    image: "/images/react.png",
    lessons: [
      {
        id: "components",
        title: "React Components",
        duration: "30 min",
        content: "Learn about functional and class components."
      },
      {
        id: "hooks",
        title: "React Hooks",
        duration: "35 min",
        content: "Master useState, useEffect, and custom hooks."
      },
      {
        id: "state",
        title: "State Management",
        duration: "40 min",
        content: "Understand state management with Context API."
      },
    ],
  },
  {
    id: "ai-basics",
    title: "AI Fundamentals",
    description: "Understand how AI works and how it is used in real products. Introduction to machine learning.",
    category: "AI & ML",
    level: "Beginner",
    progress: 0,
    image: "/images/ai.png",
    lessons: [
      {
        id: "intro",
        title: "Introduction to AI",
        duration: "25 min",
        content: "What is AI and how does it work?"
      },
      {
        id: "ml",
        title: "Machine Learning Basics",
        duration: "40 min",
        content: "Introduction to supervised and unsupervised learning."
      },
      {
        id: "applications",
        title: "AI Applications",
        duration: "30 min",
        content: "Real-world applications of AI in various industries."
      },
    ],
  },
  {
    id: "web-advanced",
    title: "Advanced Web Development",
    description: "Performance, optimization, and production-ready techniques for modern web applications.",
    category: "Web Development",
    level: "Advanced",
    progress: 10,
    image: "/images/web.png",
    lessons: [
      {
        id: "performance",
        title: "Web Performance",
        duration: "45 min",
        content: "Optimize loading speed and runtime performance."
      },
      {
        id: "security",
        title: "Web Security",
        duration: "50 min",
        content: "Best practices for secure web applications."
      },
      {
        id: "deployment",
        title: "Deployment Strategies",
        duration: "35 min",
        content: "Deploy and scale web applications."
      },
    ],
  },
];

// Alias for backward compatibility
export const mockCourses = coursesData;

// 📝 QUIZZES DATA
export const quizzesData = [
  {
    id: "javascript",
    courseId: "javascript",
    title: "JavaScript Quiz",
    description: "Test your JavaScript knowledge with 15 questions",
    questions: 15,
    difficulty: "Beginner",
    image: "/images/quiz-js.png",
  },
  {
    id: "react",
    courseId: "react",
    title: "React.js Quiz",
    description: "Test your React knowledge with 12 questions",
    questions: 12,
    difficulty: "Intermediate",
    image: "/images/quiz-react.png",
  },
  {
    id: "ai-basics",
    courseId: "ai-basics",
    title: "AI Fundamentals Quiz",
    description: "Test your AI knowledge with 10 questions",
    questions: 10,
    difficulty: "Beginner",
    image: "/images/quiz-ai.png",
  },
];

// 👤 USER PROFILE DATA
export const mockUser = {
  id: 1,
  name: "Chaman Lal",
  email: "chaman@example.com",
  role: "Student",
  avatar: "/avatar.png",
  bio: "Frontend Developer | AI Learner | Future SaaS Builder",
  joined: "January 2025",
  stats: {
    courses: 12,
    quizzes: 34,
    avgScore: 87,
    completedCourses: 4,
    hoursLearned: 156,
  },
};

// ❓ FAQ DATA
export const faqData = [
  {
    id: 1,
    question: "How do I start a course?",
    answer: "Simply navigate to the Courses page, browse available courses, and click on any course to start learning. You can track your progress as you complete lessons.",
  },
  {
    id: 2,
    question: "How are quizzes scored?",
    answer: "Quizzes are automatically scored based on correct answers. You'll receive instant feedback and can see your score immediately after completion.",
  },
  {
    id: 3,
    question: "Can I access courses on mobile devices?",
    answer: "Yes! Our platform is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktops.",
  },
  {
    id: 4,
    question: "How does the AI recommendation system work?",
    answer: "Our AI analyzes your learning patterns, quiz scores, and progress to recommend personalized courses and learning paths tailored to your needs.",
  },
  {
    id: 5,
    question: "Is there a certificate upon course completion?",
    answer: "Yes, you'll receive a digital certificate upon successfully completing a course and passing the final assessment.",
  },
];

// 📊 LEVEL COLORS
export const levelColors = {
  Beginner: "bg-green-500/20 text-green-700 border-green-500",
  Intermediate: "bg-yellow-500/20 text-yellow-700 border-yellow-500",
  Advanced: "bg-red-500/20 text-red-700 border-red-500",
};

// 🎯 CATEGORIES
export const categories = [
  { id: "programming", name: "Programming", icon: "💻", count: 45 },
  { id: "frontend", name: "Frontend", icon: "🎨", count: 32 },
  { id: "backend", name: "Backend", icon: "⚙️", count: 28 },
  { id: "ai-ml", name: "AI & ML", icon: "🤖", count: 24 },
  { id: "web-dev", name: "Web Development", icon: "🌐", count: 38 },
  { id: "mobile", name: "Mobile Dev", icon: "📱", count: 18 },
];
