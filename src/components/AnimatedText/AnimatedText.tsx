type AnimatedTextProps = {
  prefix?: string;
  textContent: string;
};

/**
 * AnimatedText component to display animated text which simulates a typing effect
 * with an optional prefix that is not animated.
 *
 * Note: This component relies on CSS classes defined in the package's global stylesheet.
 * Note: CSS animations are handled via the `ds-animated-text-container` class.
 *
 * @param prefix - Optional static text prefix (not animated)
 * @param textContent - Main text content to be animated (up to 6 characters)
 */
export function AnimatedText({ prefix, textContent }: AnimatedTextProps) {
  return (
    <div className="ds-animated-text-container">
      {prefix ? <span className="text first-text">{prefix}</span> : null}
      <span className="text sec-text">{textContent}</span>
    </div>
  );
}
