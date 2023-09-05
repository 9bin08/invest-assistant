import * as icons from '@constants/icons';

type IconName = keyof typeof icons;
interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ name, size = 24, className, onClick, ...rest }: IconProps) => {
  const iconSrc = icons[name];
  const altText = String(name);

  return (
    <img alt={altText} src={iconSrc} width={size} height="auto" onClick={onClick} className={className} {...rest} />
  );
};

export default Icon;
