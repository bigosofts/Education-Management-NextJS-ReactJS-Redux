import { NextResponse } from 'next/server';
 
export async function GET() {
  return NextResponse.json(
    [
      {"names":"john"},{"names":"limon"}
    ]
  );
}