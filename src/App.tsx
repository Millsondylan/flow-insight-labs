import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Analytics from "./components/Analytics";
import Index from "./pages/Index";
import WorkWithUs from "./pages/WorkWithUs";
import AICoachPage from "./pages/AICoachPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPage from "./pages/PrivacyPage";
import WebsiteDevelopmentPage from "./pages/WebsiteDevelopmentPage";
import AppDevelopmentPage from "./pages/AppDevelopmentPage";
import ConsultationPage from "./pages/ConsultationPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Analytics />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/work-with-us" element={<WorkWithUs />} />
              <Route path="/ai-coach" element={<AICoachPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
              <Route path="/app-development" element={<AppDevelopmentPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
