export type InputProps = {
  name: string,
  title: string
};
export default function Input({ name, title }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="capitalize">
        {title}
      </label>
      <input placeholder={title} type="text" name={name} id={name} className="border border-solid border-gray-400 rounded-md outline-none p-1" />
    </div>
  );
}
