import StarIcon from '../assets/star.svg';

const Card = ({ name, img, rating, type, isSuperHost }) => (
  <figure>
    <div className="aspect-w-3 aspect-h-2">
      <img className="rounded-3xl object-cover" src={img} alt="" />
    </div>
    <div className="grid grid-cols-card-info grid-rows-card-info items-center gap-x-4 gap-y-3 font-medium whitespace-nowrap py-4">
      <div>
        {isSuperHost && (
          <span className="text-xs font-bold uppercase rounded-full border border-gray-800 px-3 py-1 mr-3">
            Super Host
          </span>
        )}
        <span className="text-sm text-gray-500 truncate">{type}</span>
      </div>
      <div className="flex justify-end items-center">
        <img src={StarIcon} alt="" className="w-6 mr-2" />
        <span>{rating.toFixed(2)}</span>
      </div>
      <p className="text-base font-semibold truncate">{name}</p>
    </div>
  </figure>
);

export default Card;
