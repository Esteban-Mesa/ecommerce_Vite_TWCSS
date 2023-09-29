import { XMarkIcon } from "@heroicons/react/24/outline";

function ProductDeatail() {
  return (
    <aside className="bg-white flex flex-col fixed right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-80px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon className="h-6" />
      </div>
    </aside>
  );
}

export default ProductDeatail;
