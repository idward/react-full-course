import React, { FC } from 'react';

interface ISvgCrownProps {
  [key: string]: any;
}

const SvgCrown: FC<ISvgCrownProps> = props => (
  <svg width={50} height={39} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#808282" d="M3 14l22 12.5L47 14l-6.145 25H9.085z" />
      <path fillOpacity={0.263} fill="#101A1A" d="M25 8l15 31H10z" />
      <circle fill="#5E6363" cx={2} cy={9} r={2} />
      <circle fill="#5E6363" cx={25} cy={2} r={2} />
      <circle fill="#5E6363" cx={48} cy={9} r={2} />
    </g>
  </svg>
);

export default SvgCrown;
