export function checkCertificate(progress) {
  if (progress >= 100) {
    return "🎉 Certificate Unlocked!";
  }
  return "❌ Complete course to unlock certificate";
}
