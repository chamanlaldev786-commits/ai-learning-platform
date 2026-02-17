export function speak(text) {
  if (!window.speechSynthesis) return;

  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  msg.rate = 0.9;
  speechSynthesis.speak(msg);
}
