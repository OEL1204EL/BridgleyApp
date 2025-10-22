import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientHome from "@/components/client/ClientHome";
import SearchTechnicians from "@/components/client/SearchTechnicians";
import MyServices from "@/components/client/MyServices";
import ClientProfile from "@/components/client/ClientProfile";
import Chat from "@/components/shared/Chat";
import Payments from "@/components/shared/Payments";
import { Home, Search, Wrench, User, MessageCircle, CreditCard } from "lucide-react";
import logo from "@/assets/logo.png";

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bridgely" className="h-10" />
            <div>
              <h1 className="text-xl font-bold">Bridgely</h1>
              <p className="text-xs text-muted-foreground">Panel de Cliente</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Inicio</span>
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Buscar</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              <span className="hidden sm:inline">Servicios</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Chat</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Pagos</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Perfil</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-4">
            <ClientHome />
          </TabsContent>

          <TabsContent value="search" className="space-y-4">
            <SearchTechnicians />
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <MyServices />
          </TabsContent>

          <TabsContent value="chat" className="space-y-4">
            <Chat userType="client" />
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Payments userType="client" />
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <ClientProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientDashboard;
