import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActiveServices from "@/components/technician/ActiveServices";
import ServiceHistory from "@/components/technician/ServiceHistory";
import TechnicianProfile from "@/components/technician/TechnicianProfile";
import Chat from "@/components/shared/Chat";
import Statistics from "@/components/technician/Statistics";
import { Wrench, History, User, MessageCircle, BarChart3 } from "lucide-react";
import logo from "@/assets/logo.png";
import { Badge } from "@/components/ui/badge";

const TechnicianDashboard = () => {
  const [activeTab, setActiveTab] = useState("active");
  const isPremium = true; // This would come from user data

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bridgely" className="h-10" />
            <div>
              <h1 className="text-xl font-bold flex items-center gap-2">
                Bridgely
                {isPremium && <Badge variant="default" className="bg-gradient-hero">Premium</Badge>}
              </h1>
              <p className="text-xs text-muted-foreground">Panel de Técnico</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="active" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              <span className="hidden sm:inline">Activos</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              <span className="hidden sm:inline">Historial</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Mensajes</span>
            </TabsTrigger>
            {isPremium && (
              <TabsTrigger value="statistics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Estadísticas</span>
              </TabsTrigger>
            )}
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Perfil</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            <ActiveServices />
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <ServiceHistory />
          </TabsContent>

          <TabsContent value="chat" className="space-y-4">
            <Chat userType="technician" />
          </TabsContent>

          {isPremium && (
            <TabsContent value="statistics" className="space-y-4">
              <Statistics />
            </TabsContent>
          )}

          <TabsContent value="profile" className="space-y-4">
            <TechnicianProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TechnicianDashboard;
