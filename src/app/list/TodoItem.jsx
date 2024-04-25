import { revalidatePath } from "next/cache";
import Link from "next/link";
import { remove } from '@/db/todo';
import { redirect } from "next/navigation";

const API_SERVER = 'http://localhost:33020/api';
// const API_SERVER = 'https://todo-api.frontendschool.shop/api';

export default function TodoItem({ item }){
  // const handleDelete = async () => {
  //   'use server';
  //   const res = await fetch(`${ API_SERVER }/todolist/${ item._id }`, {
  //     method: 'delete',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ 
  //       _id: item._id
  //     })
  //   });
  //   const json = await res.json();
  //   console.log(json);
  //   revalidatePath(`/list`);
  // };

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
        <Link /*prefetch*/ href={`/list/${ item._id }`}>{ item.done ? <s>{ item.title }</s> : item.title }</Link>
        
        <button type="submit" formAction={ handleDelete }>삭제2</button>
      </form>
    </li>
  );
}