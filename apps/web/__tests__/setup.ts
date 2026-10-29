import { afterEach, beforeEach, vi } from "vitest";

// The share page's Danish copy (Mahope patch) is covered by
// share-i18n-da.test.ts; every other test keeps asserting the upstream English.
vi.mock("@/app/s/[videoId]/_i18n/da", async (importOriginal) => {
	const actual =
		await importOriginal<typeof import("@/app/s/[videoId]/_i18n/da")>();
	return { ...actual, t: actual.fillPlaceholders };
});

beforeEach(() => {
	vi.clearAllMocks();
});

afterEach(() => {
	vi.restoreAllMocks();
});
