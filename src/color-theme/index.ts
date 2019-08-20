import { Palette } from "../color/palette";

export default function generateColorTheme(themeName: string, palette: Palette) {
	const { shades, red, yellow, green, blue, cyan, accent } = palette;

	const bg = shades[0];
	const fg = shades[8];
	const border = shades[3];
	// token settings
	const variable = {
		foreground: fg.hex()
	};
	const keyword = {
		fontStyle: "bold",
		foreground: shades[10].hex()
	};
	const storage = {
		fontStyle: "bold",
		foreground: shades[10].hex()
	};
	const operator = {
		fontStyle: "",
		foreground: accent[10].hex()
	};
	const weakOperator = {
		foreground: shades[10].hex()
	};
	const literal = {
		foreground: accent[9].hex()
	};
	const comment = {
		foreground: shades[6].hex()
	};
	const library = {
		foreground: shades[9].hex()
	};
	const quote = {
		fontStyle: "italic",
		foreground: accent[7].hex()
	};
	const declare = {
		foreground: shades[9].hex()
	};
	const punctuation = {
		foreground: shades[5].hex()
	};
	const invalid = {
		foreground: red[7].hex()
	};
	const access = {};

	return {
		$schema: "vscode://schemas/color-theme",
		name: themeName,
		colors: {
			focusBorder: accent[5].hex(),
			foreground: fg.hex(),
			errorForeground: red[6].hex(),
			"editor.background": bg.hex(),
			"editor.foreground": fg.hex(),
			"editor.lineHighlightBackground": shades[1].hex(),
			"editorCursor.foreground": accent[10].hex(),
			"editorLineNumber.foreground": shades[5].hex(),
			"editorActiveLineNumber.foreground": shades[10].hex(),

			"editor.selectionBackground": accent[9].alpha(1 / 4).hexaa(),
			"editor.selectionHighlightBackground": accent[1].hexaa(),
			"editor.inactiveSelectionBackground": shades[9].alpha(1 / 4).hexaa(),

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

			"debugToolBar.background": shades[2].hexaa(),
			"editorWidget.background": shades[2].hexaa(),
			"editorSuggestWidget.background": bg.hexaa(),

			"editorGroup.border": border.hex(),
			"editorGroupHeader.noTabsBackground": bg.hex(),
			"editorGroupHeader.tabsBackground": shades[2].hex(),
			"tab.border": border.hex(),
			"tab.inactiveBackground": shades[2].hex(),
			"tab.inactiveForeground": shades[7].hex(),
			"tab.activeBackground": bg.hex(),
			"tab.activeForeground": shades[10].hex(),

			"peekViewEditor.background": shades[3].alpha(1 / 3).hexaa(),
			"peekViewTitle.background": shades[0].hexaa(),
			"peekView.border": border.hex(),

			"scrollbar.shadow": shades[10].alpha(0.1).hexaa(),
			"scrollbarSlider.background": shades[10].alpha(0.075).hexaa(),
			"scrollbarSlider.activeBackground": shades[10].alpha(0.15).hexaa(),
			"scrollbarSlider.hoverBackground": shades[10].alpha(0.15).hexaa(),

			"editorOverviewRuler.border": "#00000000",
			"editorGutter.modifiedBackground": cyan[3].hex(),
			"editorGutter.addedBackground": green[3].hex(),
			"editorGutter.deletedBackground": red[3].hex(),
			"editorOverviewRuler.modifiedForeground": cyan[3].hex(),
			"editorOverviewRuler.addedForeground": green[3].hex(),
			"editorOverviewRuler.deletedForeground": red[3].hex(),
			"editorOverviewRuler.infoForeground": blue[5].hex(),
			"editorOverviewRuler.warningForeground": yellow[5].hex(),
			"editorOverviewRuler.errorForeground": red[5].hex(),
			"diffEditor.removedTextBackground": red[5].alpha(0.15).hexaa(),
			"diffEditor.insertedTextBackground": green[5].alpha(0.1).hexaa(),

			"sideBarTitle.foreground": shades[10].hex(),
			"sideBar.background": shades[1].hex(),
			"sideBarSectionHeader.background": shades[3].hex(),

			"list.highlightForeground": accent[6].hex(),
			"list.hoverBackground": shades[3].hex(),
			"list.inactiveSelectionBackground": shades[5].alpha(0.3).hexaa(),
			"list.activeSelectionBackground": accent[5].alpha(0.25).hexaa(),
			"list.focusBackground": accent[5].alpha(0.25).hexaa(),
			"list.inactiveSelectionForeground": shades[10].hex(),
			"list.activeSelectionForeground": shades[10].hex(),
			"list.focusForeground": shades[10].hex(),
			"list.errorForeground": red[8].hex(),
			"list.warningForeground": yellow[8].hex(),

			"gitDecoration.modifiedResourceForeground": cyan[8].hex(),
			"gitDecoration.addedResourceForeground": green[8].hex(),
			"gitDecoration.untrackedResourceForeground": green[8].hex(),
			"gitDecoration.deletedResourceForeground": red[8].hex(),
			"gitDecoration.conflictingResourceForeground": red[8].hex(),

			"dropdown.background": shades[2].hex(),
			"dropdown.border": border.hex(),
			"dropdown.foreground": shades[8].hex(),

			"input.background": shades[0].hex(),
			"input.border": border.hex(),
			"input.foreground": shades[8].hex(),
			"input.placeholderForeground": shades[5].hex(),

			"button.background": accent[palette.absGrade(6)].hex(),
			"button.foreground": shades[palette.absGrade(10)].hex(),
			"button.hoverBackground": accent[palette.absGrade(7)].hex(),
			"badge.background": accent[palette.absGrade(4)].hex(),
			"badge.foreground": shades[palette.absGrade(10)].hex(),
			"activityBarBadge.background": accent[palette.absGrade(4)].hex(),
			"activityBarBadge.foreground": shades[palette.absGrade(10)].hex(),
			"activityBar.background": shades[3].hex(),
			"activityBar.foreground": shades[9].hex(),

			"statusBar.background": shades[2].hex(),
			"statusBar.foreground": fg.hex(),
			"statusBar.noFolderBackground": shades[2].hex(),
			"statusBar.noFolderForeground": fg.hex(),
			"statusBar.debuggingBackground": shades[2].hex(),
			"statusBar.debuggingForeground": fg.hex(),

			"panel.border": border.hex(),
			"panelTitle.activeBorder": accent[5].hex(),

			"titleBar.activeBackground": shades[palette.absGrade(2)].hex(),
			"titleBar.activeForeground": shades[palette.absGrade(9)].hex(),
			"titleBar.inactiveBackground": shades[palette.absGrade(3)].hex(),
			"titleBar.inactiveForeground": shades[palette.absGrade(8)].hex(),

			"breadcrumb.foreground": comment.foreground,
			"breadcrumb.focusForeground": quote.foreground,
			"breadcrumb.activeSelectionForeground": quote.foreground,
			"breadcrumbPicker.background": shades[1].hex()
		},
		tokenColors: [
			{
				name: "Variable and parameter name",
				scope: ["variable", "meta.definition.variable.name", "support.variable"],
				settings: variable
			},
			{
				name: "Object keys, TS grammar specific",
				scope: ["meta.object-literal.key", "meta.object-literal.key entity.name.function"],
				settings: variable
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
					"punctuation.section.embedded.end.metatag.php"
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
				name: "User names",
				scope: [
					"constant.character",
					"constant.other",
					"entity.name.function",
					"entity.name.class",
					"entity.other.inherited-class",
					"entity.other.attribute-name",
					"entity.name",
					"entity.other.attribute-name",
					"entity.other.attribute-name.html",
					"support.type.property-name",
					"entity.name.tag.table",
					"meta.structure.dictionary.json string.quoted.double.json"
				],
				settings: declare
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
				scope: ["support.type", "support.class", "support.function", "support.constant"],
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
		]
	};
}
