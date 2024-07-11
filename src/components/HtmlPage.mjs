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
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
      {/* <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      */}
      <link rel="stylesheet" href="/css/style.css" />
      <link rel="stylesheet" href="/css/photoswipe.css" />
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
