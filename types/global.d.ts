export {};

declare global {
  interface Window {
    gtag?: (
      event: string,
      action: string,
      params: { [key: string]: any }
    ) => void;
  }
}