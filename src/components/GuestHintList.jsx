import GuestHint from './GuestHint';

const GuestHintList = ({ guests, setGuests }) => {
  const { adults, children } = guests;

  return (
    <div className="flex flex-col gap-14 px-7 pt-12">
      <GuestHint
        count={adults}
        name="Adults"
        description="Ages 13 or above"
        setCount={(count) =>
          setGuests({ ...guests, adults: Math.max(count, 0) })
        }
      />
      <GuestHint
        count={children}
        name="Children"
        description="Ages 2-12"
        setCount={(count) =>
          setGuests({ ...guests, children: Math.max(count, 0) })
        }
      />
    </div>
  );
};

export default GuestHintList;
