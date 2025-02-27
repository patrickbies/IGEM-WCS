import { Link } from "react-router-dom";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const ListItem = ({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link to={href} className="p-3 gap-1.5">
          <h1 className="text-sm font-medium leading-none">{title}</h1>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {desc}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default ListItem;
