import { describe, expect, it, vi } from "vitest";

vi.unmock("@/app/s/[videoId]/_i18n/da");

const { DATE_LOCALE, fromNow, t } = await import("@/app/s/[videoId]/_i18n/da");

describe("share page Danish translations", () => {
	it("translates a known string", () => {
		expect(t("Transcript")).toBe("Transskription");
	});

	it("falls back to the English text for an unknown string", () => {
		expect(t("Some string nobody translated")).toBe(
			"Some string nobody translated",
		);
	});

	it("fills placeholders in translated and fallback text", () => {
		expect(t("{n} comments", { n: 3 })).toBe("3 kommentarer");
		expect(t("Hello {name}", { name: "Mads" })).toBe("Hello Mads");
	});

	it("leaves placeholders without a value untouched", () => {
		expect(t("{n} comments")).toBe("{n} kommentarer");
		expect(t("{n} comments", { other: 1 })).toBe("{n} kommentarer");
	});

	it("formats relative and absolute dates in Danish", () => {
		const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
		expect(fromNow(twoDaysAgo)).toBe("2 dage siden");
		expect(
			new Intl.DateTimeFormat(DATE_LOCALE, {
				day: "numeric",
				month: "short",
				year: "numeric",
				timeZone: "UTC",
			}).format(new Date(Date.UTC(2026, 9, 29))),
		).toBe("29. okt. 2026");
	});
});
