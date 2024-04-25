import { db } from '@/db';
import _ from 'lodash';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { _id } } ) {
  console.log('상세 조회', _id);  
  const item = _.find(db.data.items, { _id: Number(_id) });
  return NextResponse.json({ item }, { status: item ? 200 : 404 });
}
