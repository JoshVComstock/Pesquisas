import { forwardRef } from "react";

const NextInput = forwardRef(({ onKeyDown, ...rest }, ref) => {
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      ref.current?.nextElementSibling?.focus();
      onKeyDown?.(event);
    }
  }

  return <input {...rest} ref={ref} onKeyDown={handleKeyDown} />;
});

export default NextInput;
