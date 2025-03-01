import { ChevronLeft } from "lucide-react";
import { JSX, useEffect, useState } from "react";
import Footer from "../Footer";

const ContentArea = ({ children }: { children: JSX.Element }) => {
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
    <div>
      <div
        className="container flex"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        {/* Sidebar Container */}
        <div
          className={`border-grid fixed hidden z-30 h-[calc(100vh-3.5rem)] shrink-0 md:sticky md:block overflow-y-scroll ${
            open ? "w-[20vw] border-r" : "w-0"
          } transition-all duration-1000`}
          style={{ top: 53, scrollbarWidth: "none" }}
        >
          <button
            onMouseDown={() => setOpen(!open)}
            className={`fixed hover:bg-border rounded-md ${
              open ? "left-[20vw] scale-[1]" : "left-0 scale-[-1]"
            } p-1 m-1 transition-all duration-1000`}
          >
            <ChevronLeft />
          </button>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem fugiat voluptatem dolore, omnis repudiandae voluptate
          corrupti error autem officiis accusamus vel natus illum, quas ullam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sunt
          non sequi facilis quos officia omnis similique ipsa natus molestias
          autem voluptate veritatis accusamus aliquid voluptatum eaque iure
          maiores veniam quis quo praesentium dolore molestiae inventore.
          Adipisci fugit quae, eveniet reprehenderit repellendus fuga sequi
          ipsum incidunt perspiciatis pariatur alias quaerat nesciunt
          dignissimos voluptates sunt laboriosam quidem officia? Qui placeat sit
          debitis at perferendis fuga laborum. Tempore explicabo facere
          eligendi, minus aperiam fuga aliquam praesentium odit officiis modi
          laudantium! Magnam adipisci eligendi tempore, saepe quo voluptatem
          laboriosam! Cupiditate pariatur tempora quos beatae recusandae
          molestiae aut eius rerum? Quae magni cumque cupiditate adipisci iusto
          eum ratione saepe at. Quia consequatur molestiae sunt. Hic sit ducimus
          eligendi reprehenderit alias soluta, magnam et debitis tenetur optio
          commodi at neque, dolores perferendis totam quos sapiente in veniam
          labore dicta esse odio eaque? Non laborum, mollitia doloribus dolor
          ipsa totam harum eaque et accusantium ab voluptatem reprehenderit
          atque, deleniti, odit quae assumenda! Repellat, fugiat! Dolorem
          tenetur nam veniam voluptatem modi aperiam saepe, excepturi eius nulla
          quidem nihil unde dolorum adipisci. Voluptas alias non molestias eum
          tempore libero repellat officia ullam, voluptate pariatur dolores quas
          saepe asperiores ad incidunt ipsam hic aspernatur dicta maxime.
          Accusamus dolores aperiam fugiat ipsa mollitia nam accusantium quis,
          labore unde qui in expedita temporibus quasi autem vel, voluptatum
          quas eligendi eius repellat fugit delectus pariatur vero? Reiciendis
          aliquam assumenda mollitia beatae corrupti fuga exercitationem magni
          eum, quos expedita rem, animi id? Ab, quaerat cumque voluptatibus
          vitae cum at sunt error temporibus labore.
        </div>

        {/* Content Area */}
        <div className="w-full px-10 py-5">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentArea;
