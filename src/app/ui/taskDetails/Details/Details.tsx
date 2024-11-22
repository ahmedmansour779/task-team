export type DetailsProps = {
  name: string,
  value: string
};

export default function Details({ name, value }: DetailsProps) {
  return (
    <div>
      <span className="font-bold">
        {name} :
      </span>
      {value}
    </div>
  );
}
