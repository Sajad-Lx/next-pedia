import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { prisma as db } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { EmptyPlaceholder } from "@/components/EmptyPlaceholder";
import { DashboardHeader } from "@/components/Header";
import { PostCreateButton } from "@/components/PostCreateButton";
import { PostItem } from "@/components/PostItem";
import { DashboardShell } from "@/components/Shell";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const posts = await db.post.findMany({
    where: {
      authorId: user.id!,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton variant={"tertiary"} size={"sm"} />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="divide-y divide-tertiary rounded-md border">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant={"secondary"} size={"sm"} />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
