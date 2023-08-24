type IconDefDict = { [key: string]: { iconPath: string } };

type IconDefTheme = "dark" | "light";
const IconDefTheme: IconDefTheme[] = ["dark", "light"];
type IconDefValue = string | { [key: string]: string };
type IconDefAssignment = { [key: string]: IconDefValue };
type IconDefinitions = { dark: IconDefAssignment; light: IconDefAssignment };

interface IconDefiner {
	define(p: string[], icon: string): void;
	ext(p: string, icon?: string): void;
	fn(p: string, icon?: string): void;
	dir(p: string, icon?: string): void;
	testFile(p: string, icon?: string): void;
}

export default function generateIcons() {
	const iconDefinitions: IconDefDict = {};
	const defs: IconDefinitions = { dark: {}, light: {} };
	function defineIcon(id: string) {
		if (!iconDefinitions[id]) {
			iconDefinitions[id] = {
				iconPath: "./" + id + ".svg"
			};
		}
		return id;
	}
	function define(p: string[], icon: string) {
		for (let theme of IconDefTheme) {
			let hive = defs[theme];
			let path = p.slice(0);
			while (path.length > 1) {
				if (!hive[path[0]]) hive[path[0]] = {};

				const firstSeg = hive[path[0]];
				if (typeof firstSeg === "string") throw new Error("Malformed recipe");
				hive = firstSeg;
				path = path.slice(1);
			}
			hive[path[0]] = defineIcon(icon + "-" + theme);
		}
	}
	function ext(x: string, icon: string = x) {
		return define(["fileExtensions", x], icon);
	}
	function fn(x: string, icon: string = x) {
		return define(["fileNames", x], icon);
	}
	function dir(x: string, icon: string = x) {
		define(["folderNames", x], "folder-" + icon + "-close");
		define(["folderNamesExpanded", x], "folder-" + icon + "-open");
	}

	function testFile(x: string, icon: string = x) {
		fn("test." + x, icon + "-test");
		fn("tests." + x, icon + "-test");
		fn("spec." + x, icon + "-test");
		fn("specs." + x, icon + "-test");
		ext("test." + x, icon + "-test");
		ext("tests." + x, icon + "-test");
		ext("spec." + x, icon + "-test");
		ext("specs." + x, icon + "-test");
	}

	recipe({ define, ext, fn, dir, testFile });

	return {
		...defs.dark,
		light: defs.light,
		iconDefinitions
	};
}

function recipe($: IconDefiner) {
	const { define, ext, fn, dir, testFile } = $;

	define(["folder"], "folder-close");
	define(["file"], "file");
	define(["folderExpanded"], "folder-open");

	fn("license", "license");
	fn("licence", "license");
	fn("copying", "license");
	fn("license.txt", "license");
	fn("license.md", "license");
	fn("copying.md", "license");
	fn("licence.txt", "license");
	fn("licence.md", "license");
	fn("copying.md", "license");

	ext("txt", "text");
	ext("log", "text");
	ext("c");
	ext("h");
	ext("hpp");
	ext("hh", "hpp");
	ext("hxx", "hpp");
	ext("cpp");
	ext("cc", "cpp");
	ext("cxx", "cpp");
	ext("js");
	ext("jsx");
	ext("mjs", "js");
	ext("cjs", "js");
	ext("md");
	ext("mdx");
	ext("mkd", "md");
	ext("markdown", "md");
	ext("ts");
	ext("mts", "ts");
	ext("cts", "ts");
	ext("tsx");
	ext("d.ts", "dts");
	ext("d.mts", "dts");
	ext("d.cts", "dts");
	ext("py");
	ext("rb");
	ext("rs", "rust");
	ext("go");
	ext("hs");
	ext("ml");
	ext("mli");
	ext("idr");
	ext("json");
	ext("java");
	ext("lisp", "lambda");
	ext("cs");
	ext("fs");
	ext("fsx", "fs");
	ext("fsi", "fs");
	ext("vb");
	ext("otd", "json");
	ext("make", "config");
	ext("html", "markup");
	ext("htm", "markup");
	ext("xml", "markup");
	ext("vue");
	ext("toml");
	ext("tex");
	ext("css", "css");
	ext("styl", "stylus");
	ext("less");
	ext("sass");
	ext("scss", "sass");
	ext("ttf", "font");
	ext("otf", "font");
	ext("ttc", "font");
	ext("woff", "font");
	ext("woff2", "font");
	ext("eot", "font");
	ext("zip", "archive");
	ext("7z", "archive");
	ext("rar", "archive");
	ext("tar.gz", "archive");
	ext("tgz", "archive");
	ext("tar.bzip2", "archive");
	ext("tbz", "archive");
	ext("tar.xz", "archive");
	ext("txz", "archive");
	ext("gif", "image");
	ext("jpg", "image");
	ext("jpeg", "image");
	ext("png", "image");
	ext("psd", "image");
	ext("svg", "image-vector");
	ext("ai", "image-vector");
	ext("sketch", "image-vector");
	ext("fig", "image-vector");
	ext("sh", "shell");
	ext("bash", "shell");
	ext("zsh", "shell");
	ext("fish", "shell");
	ext("bat", "batch");
	ext("cmd", "batch");
	ext("wmf", "batch");
	ext("ps1", "batch");
	ext("yml", "yaml");
	ext("yaml", "yaml");

	fn(".gitignore", "git");
	fn(".gitattributes", "git");
	fn(".travis.yml", "travis");
	fn("azure-pipelines.yml", "azure-pipelines");
	fn("appveyor.yml", "appveyor");
	fn(".editorconfig", "config");
	fn(".clang-format", "config");
	fn("makefile", "config");
	fn(".esformatter", "config-js");
	fn(".eslintrc", "config-eslint");
	fn(".eslintrc.js", "config-eslint");
	fn(".eslintrc.json", "config-eslint");
	fn(".eslintignore", "config-eslint");
	fn(".babelrc", "config-js");
	fn("package.json", "npm");
	fn("package-lock.json", "file-npm");
	fn(".npmrc", "file-npm");
	fn(".npmignore", "file-npm");
	fn(".npmignore.json", "file-npm");
	fn(".prettierrc", "file-prettier");
	fn(".prettierrc.yaml", "file-prettier");
	fn(".prettierrc.yml", "file-prettier");
	fn(".prettierrc.json", "file-prettier");
	fn(".prettierrc.js", "file-prettier");
	fn(".vscodeignore", "file-vscode");
	fn("prettier.config.js", "file-prettier");
	fn("tslint.json", "config-tslint");
	fn("tslint.yaml", "config-tslint");
	fn("tsconfig.json", "config-ts");
	fn("tsconfig.base.json", "config-ts");
	fn("tsconfig.build.json", "config-ts");
	fn("tsconfig.prod.json", "config-ts");
	fn("tsconfig.release.json", "config-ts");
	fn("ava.config.cjs", "config-test");
	fn("ava.config.js", "config-test");
	fn("jest.config.js", "config-test");
	fn(".mocharc", "config-test");
	fn(".mocharc.json", "config-test");
	fn(".mocharc.jsonc", "config-test");
	fn(".mocharc.yml", "config-test");
	fn("jasmine.json", "config-test");

	testFile("ts");
	testFile("js");

	dir("test");
	dir("tests", "test");
	dir("spec", "test");
	dir(".vscode", "vscode");
	dir(".circleci", "circleci");
	dir(".github", "github");
}
