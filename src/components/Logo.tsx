import CustomLink from "./CustomLink";

const Logo: React.FC = () => {
  return (
    <CustomLink
      className="font-display text-2xl font-bold hover:underline hover:underline-offset-8"
      to="/"
    >
      Nico Perez.
    </CustomLink>
  );
};

export default Logo;
