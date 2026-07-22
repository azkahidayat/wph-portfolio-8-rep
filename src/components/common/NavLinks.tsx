import { navPath } from '@/data/navLinks';

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return navPath.map((link) => (
    <li key={link.id}>
      <a
        href={link.path}
        className='text-neutral-25 hover:text-primary-200 hover:underline'
        onClick={onClick}
      >
        {link.name}
      </a>
    </li>
  ));
};

export default NavLinks;
