import './TabButton.scss';

interface TabButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  [key: string]: any;
}

export default function TabButton({children, isActive, ...props}: TabButtonProps) {

  return (
    <li>
      <button className={isActive ? 'active' : undefined} {...props}>{children}</button>
    </li>
  );
}