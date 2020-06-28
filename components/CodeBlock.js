import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = ({ children, className = "language-javascript" }) => {
  const language = className.replace(/language-/, "");

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
