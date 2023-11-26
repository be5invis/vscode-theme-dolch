import * as fs from "fs";
import * as path from "path";

import generateColorTheme from "./color-theme";
import { Palette, PaletteProps, StandardRing } from "./color/palette";
import generateIcons from "./icons";

function buildColorTheme(name: string, jsonFilename: string, config: PaletteProps) {
	const palette = new Palette(config);
	console.log(name, "Grades"), palette.print();
	fs.writeFileSync(
		path.join(__dirname, "../themes", jsonFilename + ".json"),
		JSON.stringify(generateColorTheme(name, palette), null, "\t")
	);
}

buildColorTheme("Dolch", "dolch", {
	fg: { luma: [6, 90], chroma: 2, hue: 240 },
	bg: { luma: [6, 90], chroma: 2, hue: 240 },
	coShades: { luma: [6, 90], chroma: 16, hue: 240 },
	accent: { luma: [6, 90], chroma: [42, 36], hue: 227 },
	coAccent: { luma: [6, 90], chroma: [42, 36], hue: 195 },
	ring: { chroma: [32, 56] },
	...StandardRing(+32)
});
buildColorTheme("Dolch Alter", "dolch-alter", {
	fg: { luma: [6, 90], chroma: 2, hue: 240 - 180 },
	bg: { luma: [6, 90], chroma: 2, hue: 240 - 180 },
	coShades: { luma: [6, 90], chroma: 16, hue: 240 - 180 },
	accent: { luma: [6, 90], chroma: [42, 36], hue: 227 - 150 },
	coAccent: { luma: [6, 90], chroma: [42, 36], hue: 195 - 150 },
	ring: { chroma: [32, 56] },
	...StandardRing(+32)
});
buildColorTheme("Dolch Light", "dolch-light", {
	fg: { power: 1, luma: [92, 10], chroma: 2, hue: 240 },
	bg: { power: 1.25, luma: [95, 10], chroma: 2, hue: 240 },
	coShades: { power: 1, luma: [92, 10], chroma: 16, hue: 240 },
	accent: { power: 1, luma: [92, 30], chroma: [15, 42], hue: 227 },
	coAccent: { power: 1, luma: [92, 30], chroma: [15, 42], hue: 195 },
	ring: { chroma: [32, 56] },
	...StandardRing(+32)
});
buildColorTheme("Dolch Light Alter", "dolch-light-alter", {
	fg: { power: 1, luma: [92, 10], chroma: 2, hue: 240 - 180 },
	bg: { power: 1.25, luma: [95, 10], chroma: 2, hue: 240 - 180 },
	coShades: { power: 1, luma: [92, 10], chroma: 16, hue: 240 - 180 },
	accent: { power: 1, luma: [92, 30], chroma: [15, 42], hue: 227 - 150 },
	coAccent: { power: 1, luma: [92, 30], chroma: [15, 42], hue: 195 - 150 },
	ring: { chroma: [32, 56] },
	...StandardRing(+32)
});

fs.writeFileSync(
	path.join(__dirname, "../icons/theme.json"),
	JSON.stringify(generateIcons(), null, "\t")
);
