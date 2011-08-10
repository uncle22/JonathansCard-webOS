opus.Gizmo({
	name: "main",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "group1",
			dropTarget: true,
			label: "Jonathan's Card ",
			type: "Palm.Mojo.Group",
			l: 0,
			t: 0,
			h: "100%",
			styles: {
				bgColor: "#000000"
			},
			controls: [
				{
					name: "scroller1",
					scrollPosition: {
						left: 0,
						top: 0
					},
					type: "Palm.Mojo.Scroller",
					l: 0,
					t: 276,
					h: "100%",
					styles: {
						cursor: "move",
						overflow: "hidden"
					},
					controls: [
						{
							name: "jcardImage",
							src: "images/sbux-barcode.png",
							ontap: "jcardImageTap",
							type: "Palm.Picture",
							l: 0,
							r: 1,
							w: 301,
							t: 0,
							h: 149
						},
						{
							name: "panel1",
							layoutKind: "hbox",
							dropTarget: true,
							type: "Palm.Mojo.Panel",
							l: 0,
							w: 303,
							t: 205,
							h: 59,
							controls: [
								{
									name: "lblBalance",
									label: "Balance:",
									type: "Palm.Mojo.Label",
									l: 0,
									w: 81,
									t: 0,
									styles: {
										oneLine: true,
										textColor: "#ffffff"
									}
								},
								{
									name: "checkTwitter",
									ontap: "checkTwitterTap",
									disabled: undefined,
									label: "Check Twitter",
									type: "Palm.Mojo.Button",
									l: 81,
									w: 220,
									t: 0
								},
								{
									name: "updatedBalance",
									showing: false,
									label: "Tap card to update!",
									type: "Palm.Mojo.Label",
									l: 0,
									t: 0,
									styles: {
										textColor: "#1cd100",
										textAlign: "center",
										oneLine: true
									}
								}
							]
						},
						{
							name: "panel2",
							showing: false,
							layoutKind: "hbox",
							dropTarget: true,
							type: "Palm.Mojo.Panel",
							l: 0,
							t: 251,
							h: 42,
							controls: [
								{
									name: "lblTime",
									label: "Last update:",
									type: "Palm.Mojo.Label",
									l: 0,
									w: 120,
									t: 0,
									styles: {
										oneLine: true,
										textColor: "#ffffff"
									}
								},
								{
									name: "updatedTime",
									label: "Tap card to update!",
									type: "Palm.Mojo.Label",
									l: 101,
									t: -1,
									styles: {
										textColor: "#1cd100",
										textAlign: "center",
										oneLine: true
									}
								}
							]
						},
						{
							name: "lblgiveCoffee",
							ontap: "giveCoffeeTap",
							label: "Like the app?  Give some coffee!",
							type: "Palm.Mojo.Label",
							l: 0,
							t: 325,
							h: 33,
							styles: {
								textColor: "#1cd100",
								textAlign: "center"
							}
						},
						{
							name: "btnGiveCoffee",
							ontap: "btnGiveCoffeeTap",
							disabled: undefined,
							label: "Give Coffee!",
							type: "Palm.Mojo.Button",
							l: 0,
							t: 374
						}
					]
				},
				{
					name: "row1",
					dropTarget: true,
					rowType: "last",
					type: "Palm.Mojo.Row",
					l: 0,
					t: 409,
					h: "auto"
				}
			]
		}
	]
});