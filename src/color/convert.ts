export type ColorChannels = [number, number, number];

export function lab2rgb(lab: ColorChannels): ColorChannels {
	let y = (lab[0] + 16) / 116,
		x = lab[1] / 500 + y,
		z = y - lab[2] / 200;

	x = 0.95047 * xyzCalibrate(x);
	y = 1.0 * xyzCalibrate(y);
	z = 1.08883 * xyzCalibrate(z);

	let r = x * 3.2406 + y * -1.5372 + z * -0.4986;
	let g = x * -0.9689 + y * 1.8758 + z * 0.0415;
	let b = x * 0.0557 + y * -0.204 + z * 1.057;

	return [
		Math.max(0, Math.min(1, rgbGamma(r))) * 255,
		Math.max(0, Math.min(1, rgbGamma(g))) * 255,
		Math.max(0, Math.min(1, rgbGamma(b))) * 255
	];
}

function rgbGamma(r: number): number {
	return r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r;
}

function xyzCalibrate(x: number) {
	return x * x * x > 0.008856 ? x * x * x : (x - 16 / 116) / 7.787;
}

export function rgb2lab(rgb: ColorChannels): ColorChannels {
	let r = rgb[0] / 255,
		g = rgb[1] / 255,
		b = rgb[2] / 255,
		x,
		y,
		z;

	r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
	g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
	b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

	x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
	y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
	z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

	return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}
