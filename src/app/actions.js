'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const API_SERVER = 'http://localhost:33020/api';
// const API_SERVER = 'https://todo-api.frontendschool.shop/api';

export async function updateTodo(_id, formData){
  const todo = {
    _id,
    title: formData.get('title'),
    content: formData.get('content'),
    done: formData.get('done') === 'on' ? true : false, // submit으로 서버에 전달된 체크박스는 체크되어 있을때 "on" 그렇지 않으면 null
  };

  await fetch(`${ API_SERVER }/todolist/${todo._id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  // const json = await res.json();
  revalidatePath(`/list/${_id}`); // 목록은 새로고침 되지만 상세정보는 여전히 캐시되어 있어서 이전 값을 가지고 있기 때문에 캐시를 무효화 시켜야 함
  redirect('/list');
};