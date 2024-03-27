import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { UserButton } from "@clerk/nextjs";

export default function AdminPage() {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        Admin Page
      </div>
    </MaxWidthWrapper>
  );
}
