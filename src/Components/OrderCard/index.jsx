import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderCard({ id, title, image, price }) {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
        </figure>
        <p className="text-sm font-light overflow-ellipsis">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
      </div>
    </div>
  );
}

export default OrderCard;
