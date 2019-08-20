import { Color } from "../color/color";

export function GradeSteps(start: number, end: number) {
	let a: number[] = [];
	for (let s = start; s <= end; s++) a.push(s);
	return a;
}

export const DEGREE = Math.PI / 180;

export function inspectColor(hex: string) {
	const c = Color.hex(hex);
	let hueAngle = c.H / DEGREE;
	while (hueAngle < 0) hueAngle += 360;
	console.log(c.hex(), c.ansiBlock(), Math.round(c.L), Math.round(c.C), Math.round(hueAngle));
}
