export function aiTutor(question, courseTitle) {
  const q = question.toLowerCase();
  if (q.includes("what")) {
    return `In ${courseTitle}, this concept means understanding the basics clearly.`;
  }
  if (q.includes("why")) {
    return `This is important in ${courseTitle} because it builds your foundation.`;
  }
  return `Good question! Keep exploring ${courseTitle} step by step.`;
}
