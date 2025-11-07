import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
export default function Hero() {
  return (
    <Card className="p-0">
      <CardContent className="flex min-h-[calc(100dvh-36px)] flex-rows items-center gap-4 p-0 m-0">
        <Image src="/hero.jpg" width={500} height={500}></Image>
        <p className="text-mono text-lg">
          Suguru Geto is a powerful special-grade jujutsu sorcerer and a major
          antagonist in Jujutsu Kaisen. Originally a classmate of Satoru Gojo
          and Shoko Ieiri at Jujutsu High, he later became a hate-filled
          extremist who sought to annihilate all non-sorcerers. His cursed
          technique, Cursed Spirit Manipulation, allows him to absorb and
          control curses after orally ingesting them.
        </p>
      </CardContent>
    </Card>
  );
}
