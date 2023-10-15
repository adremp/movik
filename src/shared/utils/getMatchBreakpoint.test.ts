import getMatchBreakpoint from "./getMatchBreakpoint";

describe("main", () => {
	test("smallest breakpoint", () => {
		expect(getMatchBreakpoint('xs', {xs: "0px", sm: "1px"})).toBe("0px");
		expect(getMatchBreakpoint('xs', {xs: "0px", md: "1px"})).toBe("0px");
		expect(getMatchBreakpoint('xs', {sm: "1px"})).toBeUndefined()
	})

	test("max breakpoint", () => {
		expect(getMatchBreakpoint('2xl', {'2xl': "0px"})).toBe("0px")
		expect(getMatchBreakpoint('2xl', {sm: "1px", "md": "2px"})).toBe('2px')
		expect(getMatchBreakpoint('2xl', {xs: "0px"})).toBe('0px')
	})

	test("other breakpoint", () => {
		expect(getMatchBreakpoint('md', {'lg': "0px", "2xl": "1px"})).toBeUndefined()
		expect(getMatchBreakpoint('md', {md: "1px", "sm": "2px"})).toBe('1px')
		expect(getMatchBreakpoint('md', {xs: "0px"})).toBe('0px')
	})
});
