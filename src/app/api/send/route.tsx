import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_aBuwwMTG_6BkcRVzXAhu6iMGRBLM8tCyY');

export async function POST(req:any) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'Muhammad Moeed <m.moeedq497@gmail.com>',
      to: ['delivered@resend.dev'],
      subject: 'Hello World',
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}