import dynamic from 'next/dynamic';

const DotsSVGDynamic = dynamic(() => import('./DotsSVG'), {
  ssr: false,
  loading: () => (
    <svg
      className="h-20 w-20"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill="#282c33" />
      <circle cx="22" cy="2" r="2" fill="#282c33" />
      <circle cx="42" cy="2" r="2" fill="#282c33" />
      <circle cx="62" cy="2" r="2" fill="#282c33" />
      <circle cx="82" cy="2" r="2" fill="#282c33" />
    </svg>
  ),
});

export default DotsSVGDynamic;
