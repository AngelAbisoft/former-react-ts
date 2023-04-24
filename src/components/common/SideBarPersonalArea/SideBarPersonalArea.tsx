import React, { useState } from "react";
import imgUser from "../../../assets/img/user.svg";
import imgPassword from "../../../assets/img/password.svg";
import imgUserEdit from "../../../assets/img/user-edit.svg";
import imgMap from "../../../assets/img/map.svg";
import imgShopping from "../../../assets/img/shopping.svg";
import imgVisualize from "../../../assets/img/visualize.svg";
import imgOfert from "../../../assets/img/offer.svg";
import imgPdf from "../../../assets/img/pdf.svg";
import imgStar from "../../../assets/img/star.svg";
import imgCoupon from "../../../assets/img/coupon.svg";
import imgControl from "../../../assets/img/control.png";
import imgArrow from "../../../assets/img/arrowdown.svg";
import LegendOrdini from "../../ordini/components/LegendOrdini";
import TableOrdini from "../../ordini/components/TableOrdini";
import { Link } from "react-router-dom";

const SideBarPersonalArea = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Profile" },
    { title: "Il tuo Profilo", src: imgUser, url:"/Profilo" },
    { title: "Cambio Password", src: imgPassword },
    { title: "Aggiorna Dati Fiscali", src: imgUserEdit },
    { title: "Indirizzi e Corriere", src: imgMap },
    { title: "Le tue consegne" },
    { title: "I tuoi Ordini", src: imgShopping },
    { title: "I tuoi Lavori", src: imgVisualize },
    { title: " I tuoi Coupon di Sconto", src: imgCoupon },
    { title: " Offerte e Promozioni", src: imgOfert },
    { title: "Le tue Fatture", src: imgPdf },
    { title: "Listino PDF" },
    { title: "Crea il tuo listino", src: imgPdf },
    { title: "Recensioni" },
    { title: "Le tue Recensioni", src: imgStar },
    { title: "Contattaci" },
    { title: "Le nostre lavorazioni" },
    { title: "Glossario Tipografico" },
    { title: "Come creare file perfetti" },
  ];

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div className="relative">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={imgControl}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          {/* <img
              src="./src/assets/logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            /> */}
          <h1
            className={` origin-left uppercase font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Area Personale
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.url? Menu.url: ""}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4`}
            >
              {Menu.src && <img className="h-8 w-8" src={Menu.src} />}

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarPersonalArea;
