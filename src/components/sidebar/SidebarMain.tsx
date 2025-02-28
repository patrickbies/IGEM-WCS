import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

const SidebarMain = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById("header");
      if (header) {
        setHeaderHeight(header.clientHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <div
      style={{ top: `${headerHeight}px` }}
      className={`fixed bg-accent/40 h-full ${open ? "w-[50vw] md:w-[30vw] lg:w-[20vw] border-r border-muted" : "w-0"} transition-all`}
    >
      <button
        className="absolute left-[100%] p-1 m-1 hover:bg-border rounded-md items-center cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ChevronLeft
          size={20}
          style={{ color: "var(--foreground)" }}
          className={`transform transition-transform duration-300 ${
            open ? "scale-[-1]" : "scale-[1]"
          }`}
        />
      </button>
    </div>
  );
};

export default SidebarMain;