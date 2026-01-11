import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Akash Gokuldas Kamble.
      </p>
    </footer>
  );
};

export default Footer;