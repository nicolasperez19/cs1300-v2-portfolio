import CustomLink from "./CustomLink";

const Logo: React.FC = () => {
    return (
        <CustomLink className="text-2xl font-display font-bold hover:underline hover:underline-offset-8" to="/cs1300-v2-portfolio">
             Nico Perez.
        </CustomLink>
    );
}

export default Logo;