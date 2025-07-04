import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NavButton.css';

export default function NavButton({ to, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, color: "#000" }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        {children}
      </NavLink>
    </motion.div>
  );
}
