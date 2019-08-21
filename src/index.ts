import * as fs from "fs";
import * as path from "path";

import generateColorTheme from "./color-theme";
import { Palette, StandardRing } from "./color/palette";
import generateIcons from "./icons";
import { inspectColor } from "./util";

const Dark = new Palette({
	shades: { luma: [6, 92], chroma: 2, hue: 188 },
	accent: { luma: [6, 90], chroma: [42, 36], hue: 212 },
	// Fixed hue colors ("Ring")
	ring: { chroma: [32, 56] },
	...StandardRing(+32)
});
const Light = new Palette({
	shades: { power: 1.5, luma: [98, 15], chroma: 2, hue: 188 },
	accent: { power: 1, luma: [97, 30], chroma: [15, 42], hue: 212 },
	// Fixed hue colors ("Ring")
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
