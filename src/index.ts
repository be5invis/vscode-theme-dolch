import * as fs from "fs";
import * as path from "path";

import generateColorTheme, { ThemeOptions } from "./color-theme";
import { Palette, PaletteProps, StandardRing } from "./color/palette";
import generateIcons from "./icons";

function buildColorTheme(name: string, jsonFilename: string, config: PaletteProps & ThemeOptions) {
	const palette = new Palette(config);
	console.log(name, "Grades"), palette.print();
	fs.writeFileSync(
		path.join(__dirname, "../themes", jsonFilename + ".json"),
		JSON.stringify(generateColorTheme(name, palette, config), null, "\t")
	);
}

const ALTER_SHADE_ANGLE = 180;
const ALTER_ACCENT_ANGLE = 150;

buildColorTheme("Dolch", "dolch", {
	fg: { luma: [6, 90], chroma: 2, hue: 240 },
	bg: { luma: [6, 90], chroma: 2, hue: 240 },
	coShades: { luma: [6, 90], chroma: 16, hue: 240 },
	accent: { luma: [6, 90], chroma: [42, 36], hue: 227 },
	coAccent: { luma: [6, 90], chroma: [42, 36], hue: 195 },
	ring: { chroma: [32, 56] },
	bracketGrades: ["azure", "spring", "chartreuse", "orange", "rose", "violet"],
	...StandardRing(+32)
});
buildColorTheme("Dolch Alter", "dolch-alter", {
	fg: { luma: [6, 90], chroma: 2, hue: 240 - ALTER_SHADE_ANGLE },
	bg: { luma: [6, 90], chroma: 2, hue: 240 - ALTER_SHADE_ANGLE },
	coShades: { luma: [6, 90], chroma: 16, hue: 240 - ALTER_SHADE_ANGLE },
	accent: { luma: [6, 90], chroma: [75, 45], hue: 227 - ALTER_ACCENT_ANGLE },
	coAccent: { luma: [6, 90], chroma: [75, 45], hue: 195 - ALTER_ACCENT_ANGLE },
	ring: { chroma: [32, 56] },
	bracketGrades: ["yellow", "green", "cyan", "blue", "magenta", "red"],
	...StandardRing(+0)
});
buildColorTheme("Dolch Light", "dolch-light", {
	fg: { power: 1, luma: [92, 10], chroma: 2, hue: 240 },
	bg: { power: 1.25, luma: [95, 10], chroma: 2, hue: 240 },
	coShades: { power: 1, luma: [92, 10], chroma: 16, hue: 240 },
	accent: { power: 1, luma: [92, 30], chroma: [15, 42], hue: 227 },
	coAccent: { power: 1, luma: [92, 30], chroma: [15, 42], hue: 195 },
	ring: { chroma: [32, 56] },
	bracketGrades: ["azure", "spring", "chartreuse", "orange", "rose", "violet"],
	...StandardRing(+32)
});
buildColorTheme("Dolch Light Alter", "dolch-light-alter", {
	fg: { power: 1, luma: [92, 10], chroma: 2, hue: 240 - ALTER_SHADE_ANGLE },
	bg: { power: 1.25, luma: [95, 10], chroma: 2, hue: 240 - ALTER_SHADE_ANGLE },
	coShades: { power: 1, luma: [92, 10], chroma: 16, hue: 240 - ALTER_SHADE_ANGLE },
	accent: { power: 1, luma: [92, 30], chroma: [45, 80], hue: 227 - ALTER_ACCENT_ANGLE },
	coAccent: { power: 1, luma: [92, 30], chroma: [45, 80], hue: 195 - ALTER_ACCENT_ANGLE },
	ring: { chroma: [32, 56] },
	bracketGrades: ["yellow", "green", "cyan", "blue", "magenta", "red"],
	...StandardRing(+0)
});

fs.writeFileSync(
	path.join(__dirname, "../icons/theme.json"),
	JSON.stringify(generateIcons(), null, "\t")
);
