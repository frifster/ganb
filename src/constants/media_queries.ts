const small_mobile_breakpoint = 375;
const mobile_breakpoint = 576;
const tablet_breakpoint = 768;
const desktop_breakpoint = 992;
const medium_desktop_breakpoint = 1200;
const large_desktop_breakpoint = 1440;
const extra_large_desktop_breakpoint = 1920;

const BREAK_POINTS = [
  small_mobile_breakpoint,
  mobile_breakpoint,
  tablet_breakpoint,
  desktop_breakpoint,
  medium_desktop_breakpoint,
  large_desktop_breakpoint,
  extra_large_desktop_breakpoint,
];

export default BREAK_POINTS.map((bp) => `@media (min-width: ${bp}px)`);
