export type ColorChannels = [number, number, number];

const DELTA = 6 / 29;
// D65 normalization point
const XN = 0.95047;
const YN = 1.0;
const ZN = 1.08883;

export function lab2rgb(lab: ColorChannels): ColorChannels {
	let y = (lab[0] + 16) / 116,
		x = lab[1] / 500 + y,
		z = y - lab[2] / 200;

	x = XN * labFN(x);
	y = YN * labFN(y);
	z = ZN * labFN(z);

	const r = x * 3.2406 + y * -1.5372 + z * -0.4986;
	const g = x * -0.9689 + y * 1.8758 + z * 0.0415;
	const b = x * 0.0557 + y * -0.204 + z * 1.057;

	return [rgbGamma(r) * 255, rgbGamma(g) * 255, rgbGamma(b) * 255];
}

function rgbGamma(r: number): number {
	const r1 = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r;
	return Math.max(0, Math.min(1, r1));
}
function labFN(x: number) {
	return x > DELTA ? x * x * x : 3 * DELTA * DELTA * (x - 4 / 29);
}

export function rgb2lab(rgb: ColorChannels): ColorChannels {
	const r = rgbDeGamma(rgb[0] / 255);
	const g = rgbDeGamma(rgb[1] / 255);
	const b = rgbDeGamma(rgb[2] / 255);

	const x = labF((r * 0.4124 + g * 0.3576 + b * 0.1805) / XN);
	const y = labF((r * 0.2126 + g * 0.7152 + b * 0.0722) / YN);
	const z = labF((r * 0.0193 + g * 0.1192 + b * 0.9505) / ZN);

	return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}

function rgbDeGamma(r: number): number {
	return r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
}
function labF(x: number): any {
	return x > DELTA * DELTA * DELTA ? Math.pow(x, 1 / 3) : x / (3 * DELTA * DELTA) + 4 / 29;
}
