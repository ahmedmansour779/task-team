
export default function BtnSubmit({ name }: { name: string }) {
  return (
    <button
      type="submit"
      className="bg-textSecondary text-white w-fit rounded-md p-1 px-2"
    >
      {name}
    </button>
  );
}
