import { Link as ScrollLink } from 'react-scroll';

export default function SmoothScrollLink({ href, children, onClick }) {
  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      className="py-2 px-5 block"
      tabIndex="0"
      onClick={() => {
        if (onClick) onClick()
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault()
          document.querySelector(`#${href}`)?.scrollIntoView({ behavior: "smooth" })
        }
      }}
    >
      {children}
    </ScrollLink>
  );
};