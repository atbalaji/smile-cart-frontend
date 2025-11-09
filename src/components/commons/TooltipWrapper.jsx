import { Tooltip } from "neetoui";

const TooltipWrapper = ({ showToolTip, children, ...tooltipProps }) => {
  if (!showToolTip) return children;

  return (
    <Tooltip {...tooltipProps}>
      <div>{children}</div>
    </Tooltip>
  );
};

export default TooltipWrapper;
