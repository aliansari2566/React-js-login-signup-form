import React from 'react';
import { Steps as AntSteps } from 'antd';

const CustomSteps = ({
  currentStep,
  stepTitles = [],
  customIconSize,
  finishIconBorderColor,
  dotSize,
  titleLineHeight,
}) => (
  <AntSteps
    direction="vertical"
    current={currentStep}
    items={stepTitles.map(title => ({ title }))}
    customIconSize={customIconSize}  // This prop is not supported by Ant Design Steps
    finishIconBorderColor={finishIconBorderColor} // This prop is not supported by Ant Design Steps
    dotSize={dotSize} // This prop is not supported by Ant Design Steps
    titleLineHeight={titleLineHeight} // This prop is not supported by Ant Design Steps
  />
);

export default CustomSteps;
