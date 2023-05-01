const BREAK_POINTS = [
  1921, // 0
  1441, // 1
  1281, // 2
  1025, // 3
  992, // 4
  769, // 5
  601, // 6
  376, // 7
];

export default BREAK_POINTS.map((bp) => `@media (max-width: ${bp}px)`);
