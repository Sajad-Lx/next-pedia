import { hashPassword } from "@/lib/hashPass";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };

    const _user = await prisma.user.findFirst({ where: { email } });
    if (_user) {
      return new Response(
        JSON.stringify({
          message: `The user with email: ${email} already exists.`,
        }),
        {
          status: 409,
        }
      );
    }
    const hash = await hashPassword({ password: password, salt: email });
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hash,
      },
    });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error: any) {
    return new Response(null, { status: 500 });
  }
}
