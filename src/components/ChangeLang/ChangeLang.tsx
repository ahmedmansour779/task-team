"use client";

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function ChangeLang() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const style = "hover:cursor-pointer inline-block"

  const onSubmit = (lang: string) => {
    startTransition(() => {
      router.replace(`/${lang}`);
    })
  }
  console.log(isPending);

  return (
    <div className='flex gap-4 text-textSecondary'>
      <p className={style + " font-arabic"} onClick={() => onSubmit("ar")}>
        عربي
      </p>
      <p className={style + " font-english"} onClick={() => onSubmit("en")}>
        english
      </p>
    </div>
  );
}