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

const NavigationMain = () => {
  return (
    <header
      className="px-[3vw] border-b border-muted py-2 flex flex-row fixed top-0 w-full justify-between items-center
                    bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      iGEM Wiki
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Project</NavigationMenuTrigger>
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
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/">Team</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/">Community</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default NavigationMain;
