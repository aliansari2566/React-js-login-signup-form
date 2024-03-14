import React from 'react';
import { Steps } from 'antd';

export const Step = ({
  currentStep,
  stepTitles = [],
  customIconSize,
  finishIconBorderColor,
  dotSize,
  titleLineHeight,
}) => (
  <Steps
    direction="vertical"
    current={currentStep}
    items={stepTitles.map(title => ({ title }))}
    customIconSize={customIconSize}
    finishIconBorderColor={finishIconBorderColor}
    dotSize={dotSize}
    titleLineHeight={titleLineHeight}
  />
);
