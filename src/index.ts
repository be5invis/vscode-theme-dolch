import * as fs from "fs";
import * as path from "path";

import generateColorTheme from "./color-theme";
import { Palette, StandardRing } from "./color/palette";
import generateIcons from "./icons";

const Dark = new Palette({
	shades: { luma: [6, 90], chroma: 2, hue: 240 },
	coShades: { luma: [6, 90], chroma: 16, hue: 240 },
	accent: { luma: [6, 90], chroma: [42, 36], hue: 227 },
	coAccent: { luma: [6, 90], chroma: [42, 36], hue: 195 },
	ring: { chroma: [32, 56] },
	...StandardRing(+32)
});

const Light = new Palette({
	shades: { power: 1.2, luma: [96, 10], chroma: 2, hue: 240 },
	coShades: { power: 1.2, luma: [96, 10], chroma: 16, hue: 240 },
	accent: { power: 1, luma: [95, 30], chroma: [15, 42], hue: 227 },
	coAccent: { power: 1, luma: [95, 30], chroma: [15, 42], hue: 195 },
	ring: { chroma: [32, 56] },
	...StandardRing(+32)
});

console.log("\nDolch Dark Grades"), Dark.print();
console.log("\nDolch Light Grades"), Light.print();

fs.writeFileSync(
	path.join(__dirname, "../themes", "dolch.json"),
	JSON.stringify(generateColorTheme("Dolch", Dark), null, "\t")
);
fs.writeFileSync(
	path.join(__dirname, "../themes", "dolch-light.json"),
	JSON.stringify(generateColorTheme("Dolch Light", Light), null, "\t")
);

fs.writeFileSync(
	path.join(__dirname, "../icons/theme.json"),
	JSON.stringify(generateIcons(), null, "\t")
);
