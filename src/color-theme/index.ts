import { Color } from "../color/color";
import { Palette } from "../color/palette";

export default function generateColorTheme(themeName: string, palette: Palette) {
	const { fg, bg, red, yellow, orange, green, blue, cyan, coAccent, accent, coShades } = palette;

	const primaryBg = bg[0];
	const primaryFg = fg[8];
	const border = fg[3];

	// token settings
	const identifier = {
		fontStyle: "",
		foreground: primaryFg.hex()
	};
	const property = {
		fontStyle: "",
		foreground: coShades[7].hex()
	};
	const parameter = {
		fontStyle: "italic",
		foreground: primaryFg.hex()
	};
	const keyword = {
		fontStyle: "bold",
		foreground: fg[10].hex()
	};
	const storage = {
		fontStyle: "bold",
		foreground: fg[10].hex()
	};
	const operator = {
		fontStyle: "",
		foreground: accent[10].hex()
	};
	const weakOperator = {
		foreground: coShades[6].hex()
	};
	const literal = {
		foreground: accent[9].hex()
	};
	const comment = {
		foreground: fg[5].hex()
	};
	const library = {
		foreground: fg[9].hex()
	};
	const quote = {
		fontStyle: "italic",
		foreground: accent[7].hex()
	};
	const declare = {
		foreground: fg[9].hex()
	};
	const method = {
		fontStyle: "",
		foreground: fg[9].hex()
	};
	const typeName = {
		fontStyle: "",
		foreground: coAccent[8].hex()
	};
	const namespace = {
		fontStyle: "",
		foreground: coShades[9].hex()
	};
	const builtInType = {
		fontStyle: "",
		foreground: coAccent[9].hex()
	};
	const typeParameter = {
		fontStyle: "italic",
		foreground: coAccent[8].hex()
	};
	const punctuation = {
		foreground: fg[5].hex()
	};
	const invalid = {
		foreground: red[7].hex()
	};
	const access = {};

	const selectionAlpha = 5 / 16;
	const highlightAlpha = 4 / 16;
	const highlightBorderAlpha = 12 / 16;

	const uiColors = {
		focusBorder: accent[5].hex(),
		foreground: primaryFg.hex(),
		errorForeground: red[6].hex(),
		"editor.background": primaryBg.hex(),
		"editor.foreground": primaryFg.hex(),
		"editor.lineHighlightBackground": bg[1].hex(),
		"editorCursor.foreground": accent[10].hex(),
		"editorLineNumber.foreground": fg[5].hex(),
		"editorCodeLens.foreground": fg[5].hex(),
		"editorActiveLineNumber.foreground": fg[10].hex(),

		"editor.selectionBackground": accent[7].alpha(selectionAlpha).hexaa(),
		"editor.inactiveSelectionBackground": bg[7].alpha(selectionAlpha).hexaa(),
		"editor.selectionHighlightBackground": accent[4].alpha(highlightAlpha).hexaa(),
		"editor.wordHighlightBackground": bg[5].alpha(highlightAlpha).hexaa(),
		"editor.wordHighlightStrongBackground": accent[5].alpha(highlightAlpha).hexaa(),
		"editor.findMatchBackground": orange[9].alpha(selectionAlpha).hexaa(),
		"editor.findMatchHighlightBackground": orange[7].alpha(highlightAlpha).hexaa(),
		"editor.findRangeHighlightBackground": bg[4].alpha(highlightAlpha).hexaa(),
		"editorLink.activeForeground": accent[10].hex(),
		"editorBracketMatch.background": bg[4].alpha(highlightAlpha).hexaa(),
		"editorBracketMatch.border": fg[4].alpha(highlightBorderAlpha).hexaa(),

		"minimap.findMatchHighlight": orange[7].alpha(highlightAlpha).hexaa(),
		"minimap.selectionHighlight": accent[7].alpha(selectionAlpha).hexaa(),

		"editorError.foreground": red[8].hex(),
		"editorWarning.foreground": yellow[8].hex(),
		"editorInfo.foreground": blue[8].hex(),
		"editorHint.foreground": blue[8].hex(),

		"notification.errorBackground": red[4].hex(),
		"notification.errorForeground": red[8].hex(),
		"notification.infoBackground": blue[4].hex(),
		"notification.infoForeground": blue[8].hex(),
		"notification.warningBackground": yellow[4].hex(),
		"notification.warningForeground": yellow[8].hex(),

		"debugToolBar.background": bg[2].hexaa(),
		"editorWidget.background": bg[1].hexaa(),
		"editorSuggestWidget.background": primaryBg.hexaa(),

		"editorGroup.border": fg[1].hex(),
		"editorGroupHeader.noTabsBackground": primaryBg.hex(),
		"editorGroupHeader.tabsBackground": primaryBg.hex(),
		"tab.border": primaryBg.hex(),
		"tab.inactiveBackground": primaryBg.hex(),
		"tab.inactiveForeground": fg[7].hex(),
		"tab.activeBackground": primaryBg.hex(),
		"tab.activeForeground": fg[10].hex(),
		"tab.hoverBackground": bg[1].hex(),
		"tab.hoverBorder": accent[5].hex(),
		"tab.activeBorder": accent[8].hex(),

		"peekView.border": fg[2].hex(),
		"peekViewTitle.background": bg[1].hexaa(),
		"peekViewEditor.background": bg[3].alpha(1 / 6).hexaa(),

		"scrollbar.shadow": Color.rgb(0, 0, 0).alpha(0.1).hexaa(),
		"scrollbarSlider.background": bg[10].alpha(0.075).hexaa(),
		"scrollbarSlider.activeBackground": bg[10].alpha(0.15).hexaa(),
		"scrollbarSlider.hoverBackground": bg[10].alpha(0.15).hexaa(),

		"editorOverviewRuler.border": "#00000000",
		"editorGutter.modifiedBackground": cyan[4].hex(),
		"editorGutter.addedBackground": green[4].hex(),
		"editorGutter.deletedBackground": red[4].hex(),
		"editorOverviewRuler.modifiedForeground": cyan[10].alpha(0.2).hexaa(),
		"editorOverviewRuler.addedForeground": cyan[10].alpha(0.2).hexaa(),
		"editorOverviewRuler.deletedForeground": cyan[10].alpha(0.2).hexaa(),
		"editorOverviewRuler.infoForeground": blue[5].alpha(0.9).hexaa(),
		"editorOverviewRuler.warningForeground": yellow[5].alpha(0.9).hexaa(),
		"editorOverviewRuler.errorForeground": red[5].alpha(0.9).hexaa(),
		"editorOverviewRuler.findMatchForeground": orange[5].alpha(0.9).hexaa(),
		"editorOverviewRuler.bracketMatchForeground": fg[10].alpha(0.3).hexaa(),
		"editorOverviewRuler.wordHighlightForeground": fg[10].alpha(0.3).hexaa(),
		"editorOverviewRuler.wordHighlightStrongForeground": fg[10].alpha(0.3).hexaa(),
		"diffEditor.removedTextBackground": red[5].alpha(0.15).hexaa(),
		"diffEditor.insertedTextBackground": green[5].alpha(0.1).hexaa(),

		"sideBarTitle.foreground": fg[10].hex(),
		"sideBar.background": bg[1].hex(),
		"sideBarSectionHeader.background": bg[3].hex(),

		"list.highlightForeground": accent[6].hex(),
		"list.hoverBackground": bg[3].hex(),
		"list.inactiveSelectionBackground": bg[5].alpha(0.3).hexaa(),
		"list.activeSelectionBackground": accent[5].alpha(0.25).hexaa(),
		"list.focusBackground": accent[5].alpha(0.25).hexaa(),
		"list.inactiveSelectionForeground": fg[10].hex(),
		"list.activeSelectionForeground": fg[10].hex(),
		"list.focusForeground": fg[10].hex(),
		"list.errorForeground": red[8].hex(),
		"list.warningForeground": yellow[8].hex(),

		"gitDecoration.modifiedResourceForeground": cyan[8].hex(),
		"gitDecoration.addedResourceForeground": green[8].hex(),
		"gitDecoration.untrackedResourceForeground": green[8].hex(),
		"gitDecoration.deletedResourceForeground": red[8].hex(),
		"gitDecoration.conflictingResourceForeground": red[8].hex(),

		"dropdown.background": bg[1].hex(),
		"dropdown.border": border.hex(),
		"dropdown.foreground": fg[8].hex(),

		"input.background": bg[0].hex(),
		"input.border": border.hex(),
		"input.foreground": fg[8].hex(),
		"input.placeholderForeground": fg[5].hex(),

		"button.background": accent[palette.absGrade(6)].hex(),
		"button.foreground": fg[palette.absGrade(10)].hex(),
		"button.hoverBackground": accent[palette.absGrade(7)].hex(),
		"badge.background": accent[palette.absGrade(4)].hex(),
		"badge.foreground": fg[palette.absGrade(10)].hex(),
		"activityBarBadge.background": accent[palette.absGrade(4)].hex(),
		"activityBarBadge.foreground": fg[palette.absGrade(10)].hex(),
		"activityBar.background": bg[3].hex(),
		"activityBar.foreground": fg[9].hex(),

		"statusBar.background": bg[2].hex(),
		"statusBar.foreground": primaryFg.hex(),
		"statusBar.noFolderBackground": bg[2].hex(),
		"statusBar.noFolderForeground": primaryFg.hex(),
		"statusBar.debuggingBackground": bg[2].hex(),
		"statusBar.debuggingForeground": primaryFg.hex(),

		"panel.border": border.hex(),
		"panelTitle.activeBorder": accent[5].hex(),

		"titleBar.activeBackground": bg[palette.absGrade(2)].hex(),
		"titleBar.activeForeground": fg[palette.absGrade(9)].hex(),
		"titleBar.inactiveBackground": bg[palette.absGrade(3)].hex(),
		"titleBar.inactiveForeground": fg[palette.absGrade(8)].hex(),

		"breadcrumb.foreground": comment.foreground,
		"breadcrumb.focusForeground": quote.foreground,
		"breadcrumb.activeSelectionForeground": quote.foreground,
		"breadcrumbPicker.background": bg[1].hex()
	};

	const tokenColors = [
		{
			name: "Identifier",
			scope: [
				"variable",
				"meta.definition.variable.name",
				"support.variable",
				"variable.other.readwrite",
				"variable.other.constant",
				"variable.other.readonly"
			],
			settings: identifier
		},
		{
			name: "Parameter",
			scope: ["variable.parameter"],
			settings: parameter
		},
		{
			name: "Member Access",
			scope: ["variable.other.property"],
			settings: property
		},
		{
			name: "Object keys, TS grammar specific",
			scope: ["meta.object-literal.key", "meta.object-literal.key entity.name.function"],
			settings: identifier
		},
		{
			name: "Comment",
			scope: ["comment", "punctuation.comment", "punctuation.definition.comment"],
			settings: comment
		},
		{
			name: "Operator",
			scope: ["keyword.operator"],
			settings: operator
		},
		{
			name: "Punctuation",
			scope: [
				"punctuation",
				"delimiter",
				"bracket",
				"brace",
				"paren",
				"delimiter.tag",
				"punctuation.tag",
				"tag.html",
				"tag.xml",
				"meta.property-value punctuation.separator.key-value",
				"punctuation.definition.metadata.md",
				"string.link.md",
				"meta.brace"
			],
			settings: punctuation
		},
		{
			name: "JavaScript string interpolation ${}",
			scope: [
				"punctuation.definition.template-expression.begin.js",
				"punctuation.definition.template-expression.begin.ts",
				"punctuation.definition.template-expression.end.ts",
				"punctuation.definition.template-expression.end.js",
				"punctuation.section.embedded.begin.metatag.php",
				"punctuation.section.embedded.end.metatag.php",
				"punctuation.definition.typeparameters"
			],
			settings: weakOperator
		},
		{
			name: "String",
			scope: [
				"string",
				"meta.property-value.string",
				"support.constant.property-value.string",
				"meta.structure.dictionary.value.json string.quoted.double.json",
				"meta.structure.dictionary.json string.quoted.double.json",
				"meta.preprocessor string"
			],
			settings: quote
		},
		{
			scope: ["meta.template.expression.ts"],
			settings: { fontStyle: "" }
		},
		{
			name: "Primitive Literals",
			scope: [
				"constant.numeric",
				"meta.property-value.numeric",
				"support.constant.property-value.numeric",
				"meta.property-value.color",
				"support.constant.property-value.color",
				"constant.language"
			],
			settings: literal
		},
		{
			name: "Namespace",
			scope: ["entity.name.namespace", "entity.name.type.module"],
			settings: namespace
		},
		{
			name: "Type name",
			scope: ["entity.name.type"],
			settings: typeName
		},
		{
			name: "Built-in type name",
			scope: ["support.type"],
			settings: builtInType
		},
		{
			name: "Type parameter",
			scope: ["entity.name.type.parameter"],
			settings: typeParameter
		},
		{
			name: "User names",
			scope: [
				"constant.character",
				"constant.other",
				"entity.name",
				"entity.name.class",
				"entity.name.function",
				"entity.other.inherited-class",
				"entity.other.attribute-name",
				"entity.other.attribute-name",
				"entity.other.attribute-name.html",
				"support.type.property-name",
				"entity.name.tag.table",
				"meta.structure.dictionary.json string.quoted.double.json"
			],
			settings: declare
		},
		{
			name: "Methods",
			scope: ["entity.name.function.member"],
			settings: method
		},
		{
			name: "Keyword",
			scope: [
				"keyword",
				"meta.property-value.keyword",
				"support.constant.property-value.keyword",
				"meta.preprocessor.keyword",
				"keyword.other.use",
				"keyword.other.function.use",
				"keyword.other.namespace",
				"keyword.other.new",
				"keyword.other.special-method",
				"keyword.other.unit",
				"keyword.other.use-as"
			],
			settings: keyword
		},
		{
			name: "Storage",
			scope: [
				"storage",
				"storage.type",
				"storage.type.ts",
				"storage.type.var.ts",
				"storage.type.js",
				"storage.type.var.js",
				"storage.type.const.ts",
				"storage.type.let.ts",
				"storage.type.let.js",
				"storage.type.const.js",
				"entity.name.tag"
			],
			settings: storage
		},
		{
			name: "Pointer, access, etc",
			scope: ["meta.ptr", "meta.pointer", "meta.address", "meta.array.cxx"],
			settings: access
		},
		{
			name: "Preprocessor",
			scope: "meta.preprocessor",
			settings: declare
		},

		{
			name: "Library",
			scope: [
				"support.class",
				"support.function",
				"support.constant",
				"variable.language.this"
			],
			settings: library
		},
		{
			name: "Invalid",
			scope: "invalid",
			settings: invalid
		},
		{
			name: "Invalid deprecated",
			scope: ["invalid.deprecated"],
			settings: invalid
		},
		{
			name: "Markdown Title Hash",
			scope: [
				"punctuation.definition.heading.md",
				"entity.name.type.md",
				"beginning.punctuation"
			],
			settings: declare
		},
		{
			name: "Markdown titles",
			scope: ["markup.heading", "entity.name.section"],
			settings: keyword
		},
		{
			name: "Markdown Raw",
			scope: ["markup.raw", "markup.inline.raw", "markup.fenced", "markup.fenced_code"],
			settings: quote
		},
		{
			name: "Markdown link",
			scope: [
				"markup.link",
				"string.other.link.title",
				"string.other.link.description",
				"meta.link.inline",
				"meta.image.inline"
			],
			settings: declare
		},
		{
			name: "Makefile Variables",
			scope: ["variable.language.makefile", "variable.other.makefile"],
			settings: declare
		},
		{
			scope: ["markup.italic"],
			settings: {
				fontStyle: "italic"
			}
		},
		{
			scope: ["markup.bold"],
			settings: {
				fontStyle: "bold"
			}
		},
		{
			name: "CSS Class",
			scope: ["entity.other.attribute-name.class.css"],
			settings: library
		},
		{
			name: "CSS Tag name",
			scope: ["entity.name.tag.css"],
			settings: keyword
		},
		{
			name: "CSS Property",
			scope: ["meta.property-name.css"],
			settings: declare
		}
	];

	return {
		$schema: "vscode://schemas/color-theme",
		name: themeName,
		colors: uiColors,
		tokenColors,
		semanticHighlighting: true
	};
}
