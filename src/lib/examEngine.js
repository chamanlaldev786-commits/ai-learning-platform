export function evaluateExam(score) {
  if (score >= 80) return "PASS 🟢";
  if (score >= 50) return "AVERAGE 🟡";
  return "FAIL 🔴";
}
