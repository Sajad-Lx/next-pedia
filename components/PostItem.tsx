import Link from "next/link";
import { Post } from "@prisma/client";

import { formatDate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/Skeleton";

// import { PostOperations } from "@/components/PostOperations"

interface PostItemProps {
  post: Pick<Post, "id" | "title" | "published" | "createdAt">;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Link
      href={`/editor/${post.id}`}
      className="flex items-center justify-between p-4"
    >
      <div className="grid gap-1">
        <div className="font-semibold hover:underline">{post.title}</div>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(post.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      {/* <PostOperations post={{ id: post.id, title: post.title }} /> */}
    </Link>
  );
}

PostItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
