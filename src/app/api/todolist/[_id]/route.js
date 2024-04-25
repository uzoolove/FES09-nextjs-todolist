import { db } from '@/db';
import _ from 'lodash';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { _id } } ) {
  console.log('context', _id);
  _id = Number(_id);
  // 할일 상세 조회
  const item = _.find(db.data.items, { _id });
  console.log('item', item);
  return NextResponse.json({ item }, { status: 200 });
}
