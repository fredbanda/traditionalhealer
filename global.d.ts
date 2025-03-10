export {}; // Ensure it is treated as a module

declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    gtag?: (...args: any[]) => void;
  }
}
