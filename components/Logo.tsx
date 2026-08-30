const Logo = ({ height = 28 }: { height?: number }) => (
  <svg
    width={(height * 68) / 32}
    height={height}
    viewBox='0 0 68 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
  >
    <text
      x='0'
      y='23'
      fontFamily='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
      fontSize='22'
      fontWeight='600'
    >
      <tspan className='fill-teal-600'>&lt;</tspan>
      <tspan className='fill-neutral-900 dark:fill-neutral-100'>JD</tspan>
      <tspan className='fill-teal-600'>/&gt;</tspan>
    </text>
  </svg>
);

export default Logo;
