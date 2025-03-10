import NavigationMain from "@/components/nav-menu/NavigationMain";

const Home = () => {
  return (
    <div className="bg-background">
      <NavigationMain />
      <div className="h-screen fade-in text-center flex flex-col gap-3 justify-center">
        <div className="text-3xl font-bold text-foreground">
          iGEM uOttawa Wiki
        </div>
        <div className="text-2xl font-medium text-foreground/80">
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>
    </div>
  );
};

export default Home;
