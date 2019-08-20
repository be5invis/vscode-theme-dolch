import * as fs from "fs";
import * as path from "path";

import generateColorTheme from "./color-theme";
import { Palette, StandardMunsell } from "./color/palette";
import { inspectColor } from "./util";

const palette = new Palette({
	shades: { luma: [6, 90], chroma: 2, hue: 188 },
	accent: { luma: [6, 90], chroma: [17, 64], hue: 212 },
	coAccent: { luma: [6, 90], chroma: 8, hue: 188 },
	// Fixed hue colors
	munsell: { chroma: [10, 48] },
	...StandardMunsell(30)
});

palette.print();

fs.writeFileSync(
	path.join(__dirname, "../themes", "dolch.json"),
	JSON.stringify(generateColorTheme("Dolch", palette), null, "\t")
);
