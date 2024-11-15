import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="flex flex-col gap-5 w-36">
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"default"}>Default</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"link"}>Link</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
    </div>
  );
}
