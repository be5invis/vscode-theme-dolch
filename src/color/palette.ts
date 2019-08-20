import { Color } from "./color";
import { getColorGrades, Grade } from "./grade";

export interface PaletteProps {
	shades: Grade;
	// Accent
	accent?: Grade;
	coAccent?: Grade;
	// Munsell
	munsell?: Grade;
	red?: Grade;
	yellow?: Grade;
	green?: Grade;
	cyan?: Grade;
	blue?: Grade;
	purple?: Grade;
}

const GRADES = 10;

type PaletteKeys =
	| "shades"
	| "accent"
	| "coAccent"
	| "red"
	| "yellow"
	| "green"
	| "cyan"
	| "blue"
	| "purple";
const PaletteKeys: PaletteKeys[] = [
	"shades",
	"accent",
	"coAccent",
	"red",
	"yellow",
	"green",
	"cyan",
	"blue",
	"purple"
];

export class Palette {
	public shades: Color[];
	public accent: Color[];
	public coAccent: Color[];
	public red: Color[];
	public yellow: Color[];
	public green: Color[];
	public cyan: Color[];
	public blue: Color[];
	public purple: Color[];

	constructor(props: PaletteProps) {
		this.shades = getColorGrades(GRADES, props.shades);
		this.accent = getColorGrades(GRADES, { ...props.shades, ...props.accent });
		this.coAccent = getColorGrades(GRADES, { ...props.shades, ...props.coAccent });

		// "Munsell" common colors
		const mnCommon = { ...props.shades, ...props.accent, ...props.munsell };
		this.red = getColorGrades(GRADES, { ...mnCommon, ...props.red });
		this.yellow = getColorGrades(GRADES, { ...mnCommon, ...props.yellow });
		this.green = getColorGrades(GRADES, { ...mnCommon, ...props.green });
		this.cyan = getColorGrades(GRADES, { ...mnCommon, ...props.cyan });
		this.blue = getColorGrades(GRADES, { ...mnCommon, ...props.blue });
		this.purple = getColorGrades(GRADES, { ...mnCommon, ...props.purple });
	}

	public print() {
		for (const k of PaletteKeys) {
			let kn: string = k;
			while (kn.length < 12) kn = " " + kn;
			console.log(kn, ":", this[k].map(c => c.ansiBlock()).join(""));
		}
	}
}

export function StandardMunsell(angle: number) {
	return {
		red: { hue: angle + 0 },
		yellow: { hue: angle + 60 },
		green: { hue: angle + 120 },
		cyan: { hue: angle + 180 },
		blue: { hue: angle + 240 },
		purple: { hue: angle + 300 }
	};
}
