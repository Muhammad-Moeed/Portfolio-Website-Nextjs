// react-animated-numbers.d.ts
declare module 'react-animated-numbers' {
    import * as React from 'react';
  
    interface AnimatedNumbersProps {
      includeComma?: boolean;
      animateToNumber: number;
      locale?: string;
      className?: string;
      configs: (value: any, index: number) => {
        mass: number;
        friction: number;
        tensions: number;
      };
    }
  
    const AnimatedNumbers: React.FC<AnimatedNumbersProps>;
    export default AnimatedNumbers;
  }
  