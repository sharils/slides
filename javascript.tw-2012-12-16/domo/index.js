HTML(
	HEAD(
		TITLE("Domo"),
		LINK({ rel: "stylesheet", href: "index.css" }),
		STYLE({ type: "text/css" },
			STYLE.on("h2",
			{
				textDecoration: "overline underline"
			}),
			STYLE.on("ul",
			{
				listStyle: "none",
				padding: 0
			})
		)
	),
	BODY(
		H1("Domo"),
		H2("Capabilities"),
		UL(
			LI("eliminate coding style switch"),
			LI("prevent script injection"),
			LI("replace css with javascript"),
			LI("replace html with javascript")
		)
	)
);
