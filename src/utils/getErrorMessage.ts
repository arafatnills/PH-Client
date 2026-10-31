import type { FetchError } from "ofetch";

function formatTime(totalSeconds: number) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    if (m === 0) return `${s}s`;
    if (s === 0) return `${m}m`;
    return `${m}m ${s}s`;
}
export function getErrorMessage(err: unknown, fallback = "Something went wrong") {
    const e = err as FetchError;

    if (e?.response?.status === 429) {
        const retryAfter = Number(e.response.headers.get("retry-after"));
        if (retryAfter > 0) {
            return `Too many attempts. Try again in ${formatTime(retryAfter)}`;
        }
    }

    return e?.data?.message ?? e?.message ?? fallback;
}