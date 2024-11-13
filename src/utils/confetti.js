// src/utils/confetti.js
import confetti from 'canvas-confetti';

export function launchConfettiFromElement(element) {
  if (!element) return;

  // Get the bounding rectangle of the element
  const rect = element.getBoundingClientRect();

  // Calculate the origin position based on the element's center
  const originX = (rect.left + rect.right) / 2 / window.innerWidth;
  const originY = (rect.top + rect.bottom) / 2 / window.innerHeight;

  const duration = 4 * 1000; // Duration: 4 seconds
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: originX,
        y: originY,
      },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
