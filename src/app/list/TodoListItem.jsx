import { revalidatePath } from "next/cache";
import Link from "next/link";
import { remove } from '@/app/actions';
import { redirect } from "next/navigation";

export default function TodoListItem({ item }){
  const handleDelete = async () => {
    'use server';
    await remove(item._id);
    revalidatePath(`/list`);
    redirect('/list');
  };
  return (
    <li>
      <form>
        <span>{ item._id }</span>
        <Link prefetch={false} href={`/list/${ item._id }`}>{ item.done ? <s>{ item.title }</s> : item.title }</Link>
        
        <button type="submit" formAction={ handleDelete }>삭제</button>
      </form>
    </li>
  );
}