const htmlPage = ({
  children,
  props: { background = "#f0f0f0", title = "" },
}) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
      />
      <link rel="stylesheet" href="/css/style.css" />
      <title>
        {title}
      </title>
    </head>
    <body>
    {children}
    </body>
  </html>
);

export default htmlPage;
