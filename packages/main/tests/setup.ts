// Global test setup for Vitest (jsdom)
import { vi } from "vitest";

// Track stubs we've applied without using any-casts
type AnyFn = (...args: unknown[]) => unknown;
const stubbed = new WeakSet<AnyFn>();

// Stub HTMLMediaElement.load to avoid jsdom "not implemented" errors
if (
  !HTMLMediaElement.prototype.load ||
  !stubbed.has(HTMLMediaElement.prototype.load)
) {
  const stub = vi.fn();
  Object.defineProperty(HTMLMediaElement.prototype, "load", {
    configurable: true,
    writable: true,
    value: stub,
  });
  stubbed.add(HTMLMediaElement.prototype.load);
}

// Provide a minimal getContext implementation for canvas
if (
  !HTMLCanvasElement.prototype.getContext ||
  !stubbed.has(HTMLCanvasElement.prototype.getContext as unknown as AnyFn)
) {
  const stub = vi.fn().mockReturnValue({
    fillStyle: "#000",
    fillRect: vi.fn(),
  });
  Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
    configurable: true,
    writable: true,
    value: stub,
  });
  stubbed.add(HTMLCanvasElement.prototype.getContext as unknown as AnyFn);
}

// Audio methods
if (
  !HTMLMediaElement.prototype.play ||
  !stubbed.has(HTMLMediaElement.prototype.play)
) {
  const stub = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(HTMLMediaElement.prototype, "play", {
    configurable: true,
    writable: true,
    value: stub,
  });
  stubbed.add(HTMLMediaElement.prototype.play);
}
if (
  !HTMLMediaElement.prototype.pause ||
  !stubbed.has(HTMLMediaElement.prototype.pause)
) {
  const stub = vi.fn();
  Object.defineProperty(HTMLMediaElement.prototype, "pause", {
    configurable: true,
    writable: true,
    value: stub,
  });
  stubbed.add(HTMLMediaElement.prototype.pause);
}

// URL.createObjectURL polyfill for Blob/Object URLs used in recording & downloads
if (typeof URL !== "undefined" && !("createObjectURL" in URL)) {
  // @ts-expect-error runtime polyfill
  URL.createObjectURL = vi.fn(() => "blob:mock");
}
if (typeof URL !== "undefined" && !("revokeObjectURL" in URL)) {
  // @ts-expect-error runtime polyfill
  URL.revokeObjectURL = vi.fn();
}
