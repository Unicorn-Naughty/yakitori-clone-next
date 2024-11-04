

import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';
import { authOptions } from '@/components/constants/auth-options';

export const dynamic = 'force-dynamic'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: any, res: any) {
  try {
    const user = await getServerSession(req, res, authOptions);

    if (!user) {
      return NextResponse.json({ message: 'Вы не авторизованы' }, { status: 401 });
    }

    const data = await prisma.user.findUnique({
      where: {
        email: user.user.email
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: '[USER_GET] Server error' }, { status: 500 });
  }
}