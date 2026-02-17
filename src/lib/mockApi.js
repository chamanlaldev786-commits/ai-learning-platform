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
