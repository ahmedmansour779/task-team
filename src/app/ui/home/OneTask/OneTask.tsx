

import Link from "next/link";
import { usePathname } from "next/navigation";

export type OneTaskProps = {
  name: string,
  description: string,
  id: number
};
export default function OneTask({ name, description, id }: OneTaskProps) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      href={pathname + "/" + id}
      className="bg-backGroundBox rounded-xl p-4 text-white"
    >
      <p className="text-xl">
        {name}
      </p>
      <p className="font-normal text-sm">
        {description}
      </p>
    </Link>
  );
}
