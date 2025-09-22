import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="container mx-auto px-4">
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Button variant="destructive">Click Me</Button>
    </div>
    </section>
  );
}
