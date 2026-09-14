import { describe, expect, it } from "bun:test";
import { modalWidth, overlayWidth } from "./pretty.ts";

describe("overlayWidth", () => {
	it("asks for the whole terminal when it is narrower than the widest modal", () => {
		expect(overlayWidth(150)).toBe(150);
		expect(modalWidth(overlayWidth(150))).toBe(146);
	});

	it("stops growing once the modal is at its maximum", () => {
		expect(overlayWidth(300)).toBe(164);
		expect(modalWidth(overlayWidth(300))).toBe(160);
	});

	it("never asks for less than the minimum modal plus margin", () => {
		expect(overlayWidth(30)).toBe(44);
	});
});
