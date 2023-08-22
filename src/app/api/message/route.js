import Message from "@/models/messages";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, message } = await request.json();

  await connect();

  const newMessage = new Message({
    name,
    email,
    message,
  });

  try {
    await newMessage.save();
    return new NextResponse("Message has been sent", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};