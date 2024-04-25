'use server';

import { db } from '@/db';

import _ from 'lodash';
import moment from 'moment';
import fs from 'node:fs/promises';
import path from 'node:path';

import { revalidatePath } from 'next/cache.js';

// 할일 등록
export async function create(todo){
  const nextId = ++db.data.nextId.items;
  let createdAt = moment().format('YYYY.MM.DD HH:mm:ss');
  const newTodo = {
    _id: nextId,
    ...todo,
    done: false,
    createdAt,
    updatedAt: createdAt,
  };
  db.data.items.push(newTodo);
  db.write();
  revalidatePath('/list');
  return newTodo;
};

// 할일 수정
export async function update(_id, todo){
  const index = _.findLastIndex(db.data.items, { _id });
  if(index < 0){
    return;
  }
  const oldTodo = db.data.items[index];
  const updatedAt = moment().format('YYYY.MM.DD HH:mm:ss');
  const newTodo = {...oldTodo, ...todo, updatedAt};
  db.data.items.splice(index, 1, newTodo);
  // db.write();
  revalidatePath('/list');
  revalidatePath(`/list/${ _id }`);
  revalidatePath(`/list/${ _id }/edit`);
  return newTodo;
};

// 할일 삭제
export async function remove(_id){
  const result = _.remove(db.data.items, todo => todo._id == _id);
  db.write();
  return result.length;
};

// DB 초기화
export async function init(){
  await fs.rm(path.join(process.cwd(), 'src', 'db', 'todolist.json'));
  initDB();
  return list();
};
