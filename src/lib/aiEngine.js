export function getAIRecommendation({ score, progress }) {
  if (score < 2) {
    return {
      level: "Weak",
      message: "You should revise basics before moving forward.",
      action: "Repeat lessons 1–3",
      recommendations: [
        {
          title: "JavaScript Fundamentals",
          desc: "Start with the basics to build a strong foundation"
        },
        {
          title: "Practice Daily",
          desc: "Consistency is key to mastering programming"
        },
        {
          title: "Join Study Groups",
          desc: "Learn together with other beginners"
        }
      ]
    };
  }

  if (progress < 50) {
    return {
      level: "Average",
      message: "You are doing good. Increase consistency.",
      action: "Practice quizzes daily",
      recommendations: [
        {
          title: "React.js Essentials",
          desc: "Take your skills to the next level"
        },
        {
          title: "Build Projects",
          desc: "Apply what you've learned in real projects"
        },
        {
          title: "Code Reviews",
          desc: "Get feedback on your code from experts"
        }
      ]
    };
  }

  return {
    level: "Strong",
    message: "Excellent performance. You are ready for advanced topics.",
    action: "Start advanced modules",
    recommendations: [
      {
        title: "Advanced Web Development",
        desc: "Master performance optimization and scalability"
      },
      {
        title: "System Design",
        desc: "Learn to architect large-scale applications"
      },
      {
        title: "Contribute to Open Source",
        desc: "Share your knowledge with the community"
      }
    ]
  };
}
