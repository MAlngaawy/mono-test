import { Button } from '@mono-test/shared-ui';

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full space-y-6 p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome to Mono Test
          </h1>
          <p className="text-muted-foreground mt-2">
            Demonstrating Shadcn UI in a shared library
          </p>
        </div>

        <div className="space-y-4">
          <Button className="w-full">Default Button</Button>

          <Button variant="secondary" className="w-full">
            Secondary Button
          </Button>

          <Button variant="outline" className="w-full">
            Outline Button
          </Button>

          <Button variant="ghost" className="w-full">
            Ghost Button
          </Button>

          <Button variant="destructive" className="w-full">
            Destructive Button
          </Button>
        </div>
      </div>
    </div>
  );
}
