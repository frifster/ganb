const BREAK_POINTS = [
  1920, // 0
  1440, // 1
  1280, // 2
  1024, // 3
  992, // 4
  768, // 5
  600, // 6
  375, // 7
];

export default BREAK_POINTS.map((bp) => `@media (max-width: ${bp}px)`);
