import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CodeIcon, FileTextIcon, TerminalIcon, PaletteIcon } from "lucide-react"

export default function Home() {
  const tools = [
    {
      title: "Code Formatters",
      description: "Beautify and minify JSON and HTML code with syntax highlighting",
      icon: <CodeIcon className="h-8 w-8" />,
      href: "/formatters",
    },
    {
      title: "Code Execution",
      description: "Execute code in multiple languages with syntax highlighting",
      icon: <TerminalIcon className="h-8 w-8" />,
      href: "/code-execution",
    },
    {
      title: "Text Utilities",
      description: "Manipulate and transform text with various tools",
      icon: <FileTextIcon className="h-8 w-8" />,
      href: "/text-utilities",
    },
    {
      title: "Theme Settings",
      description: "Customize your experience with light and dark mode",
      icon: <PaletteIcon className="h-8 w-8" />,
      href: "#theme-toggle",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Developer Tools</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A collection of useful tools for developers. Format code, execute scripts, manipulate text, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {tools.map((tool) => (
          <Link href={tool.href} key={tool.title} className="block">
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-2 text-primary">{tool.icon}</div>
                <CardTitle className="text-center">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{tool.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-medium">Syntax Highlighting</h3>
            <p className="text-sm text-muted-foreground mt-2">Color-coded code for better readability</p>
          </div>
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-medium">Dark/Light Mode</h3>
            <p className="text-sm text-muted-foreground mt-2">Switch between themes for comfort</p>
          </div>
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-medium">PWA Support</h3>
            <p className="text-sm text-muted-foreground mt-2">Install as an app on your device</p>
          </div>
        </div>
      </div>
    </div>
  )
}

