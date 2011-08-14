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
							h: 124
						},
						{
							name: "bummer",
							ontap: "bummerTap",
							label: "The social experiment is over.  Jonathan's card has been deactivated as of Aug. 12, 2011.",
							type: "Palm.Mojo.Label",
							l: 0,
							t: 124,
							h: 87,
							hAlign: "center",
							styles: {
								underline: true,
								textColor: "#00FF00",
								textAlign: "center"
							}
						},
						{
							name: "caffePagato",
							ontap: "caffePagatoTap",
							disabled: undefined,
							label: "Learn about Caffe pagato",
							type: "Palm.Mojo.Button",
							l: 0,
							t: 229
						},
						{
							name: "fraud",
							ontap: "fraudTap",
							disabled: undefined,
							label: "Jonathan's Card Fraud",
							type: "Palm.Mojo.Button",
							l: 0,
							t: 297,
							styles: {
								opacity: 1
							}
						},
						{
							name: "twitter",
							ontap: "twitterTap",
							disabled: undefined,
							label: "Jonathan's Card on Twitter",
							type: "Palm.Mojo.Button",
							l: 0,
							t: 357
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
						}
					]
				},
				{
					name: "row2",
					dropTarget: true,
					rowType: "last",
					type: "Palm.Mojo.Row",
					l: 0,
					t: 408,
					h: "auto"
				}
			]
		}
	]
});