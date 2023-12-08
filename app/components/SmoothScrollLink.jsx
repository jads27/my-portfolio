import { Link as ScrollLink } from 'react-scroll';

export default function SmoothScrollLink({ href, children }) {
  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      className="py-2 px-5 block"
    >
      {children}
    </ScrollLink>
  );
};