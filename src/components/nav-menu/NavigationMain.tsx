import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";

const NavigationMain = () => {
  return (
    <header
      className="px-[3vw] border-b z-50 border-muted py-2 flex flex-row sticky top-0 w-full justify-between items-center bg-background"
    >
      <Link to="/">iGEM Wiki</Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/project">
              <NavigationMenuTrigger className="cursor-pointer">
                Project
              </NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-1 md:w-[400px] md:grid-cols-2 lg:w-[450px]">
                <ListItem
                  title="Description"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  href="/"
                />
                <ListItem
                  title="Design"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  href="/"
                />
                <ListItem
                  title="Implementation"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  href="/"
                />
                <ListItem
                  title="Plant"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  href="/"
                />
                <ListItem
                  title="Parts"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  href="/"
                />
                <ListItem
                  title="Judging"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  href="/"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Wet Lab</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[500px]">
                <ListItem
                  title="Engineering"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, obcaecati!"
                  href="/"
                />
                <ListItem
                  title="Notebook"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, obcaecati!"
                  href="/"
                />
                <ListItem
                  title="Protocol"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, obcaecati!"
                  href="/"
                />
                <ListItem
                  title="Results"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, obcaecati!"
                  href="/"
                />
                <ListItem
                  title="Proof of Concept"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, obcaecati!"
                  href="/"
                />
                <ListItem
                  title="Safety"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, obcaecati!"
                  href="/"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dry Lab</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[300px] gap-3 p-1">
                <ListItem
                  title="Model"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, obcaecati!"
                  href="/"
                />
                <ListItem
                  title="Hardware"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, obcaecati!"
                  href="/"
                />
                <ListItem
                  title="Sustainability"
                  desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, obcaecati!"
                  href="/"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Team
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <AlignJustify className="md:hidden hover:scale-105 transition-transform"/>
      <div className="text-transparent hidden md:block">iGEM Wiki</div>
    </header>
  );
};

export default NavigationMain;
