import { NextResponse } from "next/server";
import prisma from "@repo/db";

export const dynamic = "force-dynamic";

export const GET = async () => {
  await prisma.user.create({
    data: {
      email: "asd@example.com",
      name: "Test User",
      number: "9999999999",
      password: "temporary-test-password",
    },
  });

  return NextResponse.json({
    message: "hi there",
  });
};
