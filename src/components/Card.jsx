import StarIcon from '../assets/star.svg';

const Card = ({ name, img, rating, type, isSuperHost }) => (
  <figure className="w-4/12">
    <img src={img} className="rounded-3xl" alt="" />
    <div className="grid grid-cols-card-info grid-rows-card-info items-center gap-y-3 gap-x-4 font-medium whitespace-nowrap py-4">
      <div>
        {isSuperHost && (
          <span className="text-xs px-3 py-1 mr-3 rounded-full border border-gray-800 font-bold uppercase">
            Super Host
          </span>
        )}
        <span className="text-gray-500 text-sm truncate">{type}</span>
      </div>
      <div className="flex justify-end items-center">
        <img src={StarIcon} alt="" className="w-6 mr-2" />
        <span>{rating}</span>
      </div>
      <p className="text-base font-semibold truncate">{name}</p>
    </div>
  </figure>
);

export default Card;
