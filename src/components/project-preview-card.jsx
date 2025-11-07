"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectPreviewCard({ project, index }) {
  console.log(project);
  return (
    <Card
      key={index}
      className="b    order rounded-lg overflow-hidden shadow-lg m-4 p-1 w-80"
    >
      <CardContent className="flex flex-col items-center p-4">
        <Skeleton className="h-[300px] w-[300px] bg-gray-300 mb-4" />
        <CardTitle>{project.title}</CardTitle>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <div className="p-4">
          <p className="text-gray-600 mb-4 text-center">{project.desc}</p>
          <Link href={project.link} className="text-blue-500 hover:underline">
            Learn More
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
