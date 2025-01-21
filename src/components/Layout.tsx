import { AppSidebar } from "./AppSidebar";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./toggle-theme";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function Layout({children}: {children: React.ReactNode}){
  return (
    <div className="w-screen h-screen">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <AppSidebar/>
          <main className="w-full h-full p-2">
            <header className="flex items-center w-full justify-between">
              <SidebarTrigger />
              <h1 className="font-bold text-5xl">Regex tester</h1>
              <ModeToggle/>
            </header>
            <div className="mt-6">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  )
}
