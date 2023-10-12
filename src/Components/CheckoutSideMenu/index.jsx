import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContex } from "../../Context";

function CheckoutSideMenu() {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, productToShow } =
    useContext(ShoppingCartContex);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? null : "hidden"
      } bg-white flex flex-col fixed right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-[68px] `}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <button type="button" onClick={() => closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 cursor-pointer" />
        </button>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;