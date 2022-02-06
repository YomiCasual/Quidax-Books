import { Helmet } from "react-helmet-async";

const DocumentHeader = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}): JSX.Element => (
  <Helmet
    titleTemplate="%s | Quidax Books"
    defaultTitle="QuidaxBooks"
    defer={false}
  >
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="description" content={description || "Quidax Books"} />
    <link rel="canonical" href={window.location.href} />
  </Helmet>
);

export default DocumentHeader;
