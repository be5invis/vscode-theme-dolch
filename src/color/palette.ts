import { Color } from "./color";
import { getColorGrades, Grade } from "./grade";

export interface PaletteProps {
	// Shades
	shades: Grade;
	coShades?: Grade;

	// Accent
	accent?: Grade;
	coAccent?: Grade;

	// Color ring
	ring?: Grade;

	// We define 12 "ring" colors uniformly lies on LCH cylinder
	red?: Grade;
	orange?: Grade;
	yellow?: Grade;
	chartreuse?: Grade;
	green?: Grade;
	spring?: Grade;
	cyan?: Grade;
	azure?: Grade;
	blue?: Grade;
	violet?: Grade;
	magenta?: Grade;
	rose?: Grade;
}

const GRADES = 10;

type PaletteKeys =
	| "shades"
	| "coShades"
	| "accent"
	| "coAccent"
	| "red"
	| "orange"
	| "yellow"
	| "chartreuse"
	| "green"
	| "spring"
	| "cyan"
	| "azure"
	| "blue"
	| "violet"
	| "magenta"
	| "rose";
const PaletteKeys: PaletteKeys[] = [
	"shades",
	"coShades",
	"accent",
	"coAccent",
	"red",
	"orange",
	"yellow",
	"chartreuse",
	"green",
	"spring",
	"cyan",
	"azure",
	"blue",
	"violet",
	"magenta",
	"rose"
];

export class Palette {
	public shades: Color[];
	public accent: Color[];
	public coShades: Color[];
	public coAccent: Color[];
	public red: Color[];
	public orange: Color[];
	public yellow: Color[];
	public chartreuse: Color[];
	public green: Color[];
	public spring: Color[];
	public cyan: Color[];
	public azure: Color[];
	public blue: Color[];
	public violet: Color[];
	public magenta: Color[];
	public rose: Color[];

	private isDark: boolean;

	constructor(props: PaletteProps) {
		this.shades = getColorGrades(GRADES, props.shades);
		this.coShades = getColorGrades(GRADES, { ...props.shades, ...props.coShades });
		this.accent = getColorGrades(GRADES, { ...props.shades, ...props.accent });
		this.coAccent = getColorGrades(GRADES, { ...props.shades, ...props.coAccent });

		const ringCommon = { ...props.shades, ...props.accent, ...props.ring };
		this.red = getColorGrades(GRADES, { ...ringCommon, ...props.red });
		this.orange = getColorGrades(GRADES, { ...ringCommon, ...props.orange });
		this.yellow = getColorGrades(GRADES, { ...ringCommon, ...props.yellow });
		this.chartreuse = getColorGrades(GRADES, { ...ringCommon, ...props.chartreuse });
		this.green = getColorGrades(GRADES, { ...ringCommon, ...props.green });
		this.spring = getColorGrades(GRADES, { ...ringCommon, ...props.spring });
		this.cyan = getColorGrades(GRADES, { ...ringCommon, ...props.cyan });
		this.azure = getColorGrades(GRADES, { ...ringCommon, ...props.azure });
		this.blue = getColorGrades(GRADES, { ...ringCommon, ...props.blue });
		this.violet = getColorGrades(GRADES, { ...ringCommon, ...props.violet });
		this.magenta = getColorGrades(GRADES, { ...ringCommon, ...props.magenta });
		this.rose = getColorGrades(GRADES, { ...ringCommon, ...props.rose });

		this.isDark = this.shades[0].L < this.shades[GRADES].L;
	}

	public print() {
		for (const k of PaletteKeys) {
			let kn: string = k;
			while (kn.length < 12) kn = " " + kn;
			console.log(kn, ":", this[k].map((c) => c.ansiBlock()).join(""));
		}
	}

	public absGrade(grade: number) {
		if (this.isDark) return grade;
		else return GRADES - grade;
	}
}

export function StandardRing(angle: number) {
	return {
		red: { hue: angle + 0 },
		orange: { hue: angle + 30 },
		yellow: { hue: angle + 60 },
		chartreuse: { hue: angle + 90 },
		green: { hue: angle + 120 },
		spring: { hue: angle + 150 },
		cyan: { hue: angle + 180 },
		azure: { hue: angle + 210 },
		blue: { hue: angle + 240 },
		violet: { hue: angle + 270 },
		magenta: { hue: angle + 300 },
		rose: { hue: angle + 330 }
	};
}
