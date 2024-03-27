import Collection from "@/lib/models/Collection";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    await connectToDB();

    await Collection.findByIdAndDelete(params.collectionId);
    return new NextResponse("Collection Deleted", { status: 200 });
  } catch (err) {
    console.log("[collections_DELETE]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
