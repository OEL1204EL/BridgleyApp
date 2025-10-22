import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserManagement from "@/components/admin/UserManagement";
import TechnicianValidation from "@/components/admin/TechnicianValidation";
import ReportsManagement from "@/components/admin/ReportsManagement";
import PaymentManagement from "@/components/admin/PaymentManagement";
import SystemStatistics from "@/components/admin/SystemStatistics";
import { Users, CheckCircle, FileText, DollarSign, BarChart3 } from "lucide-react";
import logo from "@/assets/logo.png";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bridgely" className="h-10" />
            <div>
              <h1 className="text-xl font-bold">Bridgely</h1>
              <p className="text-xs text-muted-foreground">Panel de Administrador</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Usuarios</span>
            </TabsTrigger>
            <TabsTrigger value="validation" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Validaciones</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Reportes</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Pagos</span>
            </TabsTrigger>
            <TabsTrigger value="statistics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Estadísticas</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <UserManagement />
          </TabsContent>

          <TabsContent value="validation" className="space-y-4">
            <TechnicianValidation />
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <ReportsManagement />
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <PaymentManagement />
          </TabsContent>

          <TabsContent value="statistics" className="space-y-4">
            <SystemStatistics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
