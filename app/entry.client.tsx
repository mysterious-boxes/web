import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

const EntryClient = () => {
  return (
    <>
      <RemixBrowser />
    </>
  );
};

hydrate(<EntryClient />, document);
