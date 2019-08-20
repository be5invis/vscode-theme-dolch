import { GradeSteps } from "../util";

import { lab2rgb, rgb2lab } from "./convert";

export class Color {
	private constructor(
		readonly r: number,
		readonly g: number,
		readonly b: number,
		readonly L: number,
		readonly A: number,
		readonly B: number,
		readonly opacity: number
	) {}

	get C() {
		return Math.hypot(this.A, this.B);
	}
	get H() {
		return Math.atan2(this.B, this.A);
	}

	// chaining
	public alpha(o: number) {
		return new Color(this.r, this.g, this.b, this.L, this.A, this.B, o * this.opacity);
	}

	// ctor
	public static rgb(r: number, g: number, b: number) {
		const [L, A, B] = rgb2lab([r, g, b]);
		return new Color(r, g, b, L, A, B, 0xff);
	}
	public static lab(L: number, A: number, B: number) {
		const [r, g, b] = lab2rgb([L, A, B]);
		return new Color(r, g, b, L, A, B, 0xff);
	}
	public static lch(L: number, C: number, H: number) {
		const A = C * Math.cos(H);
		const B = C * Math.sin(H);
		const [r, g, b] = lab2rgb([L, A, B]);
		return new Color(r, g, b, L, A, B, 0xff);
	}
	public static hex(input: string) {
		let m = input.match(/^#([0-9a-f]{6})$/i);
		if (m) {
			return Color.rgb(
				parseInt(m[1].substr(0, 2), 16),
				parseInt(m[1].substr(2, 2), 16),
				parseInt(m[1].substr(4, 2), 16)
			);
		} else {
			throw new Error("format mistake");
		}
	}

	// mix
	public mix(scale: number, other: Color) {
		const L1 = this.lerp(this.L, scale, other.L);
		const A1 = this.lerp(this.A, scale, other.A);
		const B1 = this.lerp(this.B, scale, other.B);
		const opacity1 = this.opacity + (other.opacity - this.opacity) * scale;
		const [r1, g1, b1] = lab2rgb([L1, A1, B1]);
		return new Color(r1, g1, b1, L1, A1, B1, opacity1);
	}
	private lerp(a: number, s: number, b: number) {
		return a + s * (b - a);
	}
	private lerpGamma(a: number, s: number, b: number, g: number) {
		return this.gamma(this.lerp(this.unGamma(a, g), s, this.unGamma(b, g)), g);
	}
	private unGamma(x: number, gamma: number) {
		return Math.pow(x / 0xff, gamma);
	}
	private gamma(x: number, gamma: number) {
		return Math.pow(x, 1 / gamma) * 0xff;
	}
	public mixRGB(scale: number, other: Color, g = 2.2) {
		const r1 = this.lerpGamma(this.r, scale, other.r, g);
		const g1 = this.lerpGamma(this.g, scale, other.g, g);
		const b1 = this.lerpGamma(this.b, scale, other.b, g);
		const opacity1 = this.opacity + (other.opacity - this.opacity) * scale;
		const [L1, A1, B1] = rgb2lab([r1, g1, b1]);
		return new Color(r1, g1, b1, L1, A1, B1, opacity1);
	}

	// logging
	private chan(n: number) {
		let x = Math.min(0xff, Math.max(0, Math.round(n))).toString(16);
		while (x.length < 2) x = "0" + x;
		return x;
	}
	public hex() {
		return `#${this.chan(this.r)}${this.chan(this.g)}${this.chan(this.b)}`;
	}
	public hexaa() {
		return `${this.hex()}${this.chan(this.opacity)}`;
	}
	public ansiBlock() {
		const red = 0 | this.r;
		const green = 0 | this.g;
		const blue = 0 | this.b;
		return `\x1b[48;2;${red};${green};${blue}m   \x1b[0m`;
	}

	// Grades
	public static grades(steps: number, a: Color, b: Color, power: number = 1) {
		return GradeSteps(0, steps).map(s => a.mix(Math.pow(s / steps, power), b));
	}
}
