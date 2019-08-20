import { DEGREE } from "../util";

import { Color } from "./color";

export type GradeRange = null | undefined | number | [number, number];
export function r0(gr: GradeRange) {
	if (gr == null) return 0;
	else if (typeof gr === "number") return gr;
	else return gr[0];
}
export function r1(gr: GradeRange) {
	if (gr == null) return 0;
	else if (typeof gr === "number") return gr;
	else return gr[1];
}

export type Grade = {
	power?: number;
	luma?: GradeRange;
	chroma?: GradeRange;
	hue?: GradeRange;
};

function mix(a: number, s: number, b: number) {
	return a + s * (b - a);
}

export function getColorGrades(steps: number, grade: Grade): Color[] {
	let colors: Color[] = [];
	for (let step = 0; step <= steps; step++) {
		const scale = Math.pow(step / steps, grade.power || 1);
		const luma = mix(r0(grade.luma), scale, r1(grade.luma));
		const chroma = mix(r0(grade.chroma), scale, r1(grade.chroma));
		const hue = mix(r0(grade.hue), scale, r1(grade.hue)) * DEGREE;
		colors.push(Color.lch(luma, chroma, hue));
	}
	return colors;
}
