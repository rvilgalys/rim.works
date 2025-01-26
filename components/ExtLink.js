const ExtLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener" className="border-b border-mtn">
    {children}
  </a>
);

export default ExtLink;
