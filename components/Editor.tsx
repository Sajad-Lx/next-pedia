"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EditorJS from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post } from "@prisma/client";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import TextareaAutosize from "react-textarea-autosize";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { postPatchSchema } from "@/lib/validations/post";
import CustomToast from "@/components/ui/custom-toast";
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/material-ui/Buttons/Button";
import { ModeToggle } from "@/components/ModeToggle";

import "@/styles/editor.css";

interface EditorProps {
  post: Pick<Post, "id" | "title" | "content" | "published">;
}

type FormData = z.infer<typeof postPatchSchema>;

export function Editor({ post }: EditorProps) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  });
  const ref = React.useRef<EditorJS>();
  const router = useRouter();
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  const initializeEditor = React.useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    // @ts-ignore
    const Header = (await import("@editorjs/header")).default;
    // @ts-ignore
    const Embed = (await import("@editorjs/embed")).default;
    // @ts-ignore
    const Table = (await import("@editorjs/table")).default;
    // @ts-ignore
    const List = (await import("@editorjs/list")).default;
    // @ts-ignore
    const SimpleImage = (await import("@editorjs/simple-image")).default;
    // @ts-ignore
    const Code = (await import("@editorjs/code")).default;
    // @ts-ignore
    const LinkTool = (await import("@editorjs/link")).default;
    // @ts-ignore
    const InlineCode = (await import("@editorjs/inline-code")).default;
    // @ts-ignore
    const InlineImage = (await import("editorjs-inline-image")).default;

    const body = postPatchSchema.parse(post);

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        data: body.content,
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          image: SimpleImage,
          inlineCode: InlineCode,
          // inlineImage: {
          //   class: InlineImage,
          //   inlineToolbar: true,
          //   config: {
          //     embed: {
          //       display: true,
          //     },
          //     unsplash: {
          //       appName: process.env.UNSPLASH_APP,
          //       clientId: process.env.UNSPLASH_ACCESS,
          //       maxResults: "4",
          //     },
          //   },
          // },
          table: Table,
          embed: Embed,
        },
      });
    }
  }, [post]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  async function onSubmit(data: FormData) {
    setIsSaving(true);

    const blocks = await ref.current?.save();

    const response = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content: blocks,
      }),
    });

    setIsSaving(false);

    if (!response?.ok) {
      return CustomToast({
        title: "Something went wrong.",
        description: "Your post was not saved. Please try again.",
      });
    }

    router.refresh();

    return CustomToast({
      title: "Update",
      description: "Your post has been saved.",
    });
  }

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-1 right-1 z-50 flex items-center justify-center rounded-full bg-tertiary-container font-mono p-1 text-sm text-on-tertiary-container">
        <div className="block">
          {post.published ? "(Published)" : "(Draft)"}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full gap-10">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-10">
              <Link
                href="/dashboard"
                className={cn(buttonVariants({ variant: "elevated" }))}
              >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                <span>Back</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <button type="submit" className={cn(buttonVariants())}>
                {isSaving && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                <span>Save</span>
              </button>
            </div>
          </div>
          <div className="prose prose-stone mx-auto w-full dark:prose-invert">
            <TextareaAutosize
              autoFocus
              id="title"
              defaultValue={post.title}
              placeholder="Post title"
              className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold border-b focus:outline-none"
              {...register("title")}
            />

            {/* EditorJS */}
            <div id="editor" className="min-h-[500px]" />

            <p className="text-sm text-gray-500">
              Use{" "}
              <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
                Tab
              </kbd>{" "}
              to open the command menu.
            </p>
          </div>
        </div>
        <Toaster />
      </form>
    </>
  );
}
