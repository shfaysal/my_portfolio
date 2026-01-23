import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

const emailPattern = /^(?!\.)([\w!#$%&'*+/=?^`{|}~-]+(\.[\w!#$%&'*+/=?^`{|}~-]+)*)@([\w-]+\.)+[\w-]{2,}$/i;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const company = payload.company?.trim() ?? "";

  if (company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { error: "Name must be between 2 and 80 characters." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Email is invalid." }, { status: 400 });
  }

  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 2000 characters." },
      { status: 400 }
    );
  }

  // TODO: replace with email provider, CRM, or database write.
  return NextResponse.json({ ok: true });
}
