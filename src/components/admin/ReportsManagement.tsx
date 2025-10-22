import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const ReportsManagement = () => {
  const reports = [
    { 
      id: 1, 
      type: "Servicio", 
      reporter: "Juan Pérez", 
      reported: "Carlos Rodríguez", 
      description: "No asistió a la cita programada", 
      date: "22 Oct 2025",
      status: "Pendiente"
    },
    { 
      id: 2, 
      type: "Comportamiento", 
      reporter: "María López", 
      reported: "José Hernández", 
      description: "Trato inadecuado durante el servicio", 
      date: "20 Oct 2025",
      status: "En revisión"
    },
    { 
      id: 3, 
      type: "Pago", 
      reporter: "Ana Martínez", 
      reported: "Sistema", 
      description: "No se procesó el pago correctamente", 
      date: "18 Oct 2025",
      status: "Resuelto"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pendiente": return <Clock className="h-4 w-4" />;
      case "En revisión": return <AlertCircle className="h-4 w-4" />;
      case "Resuelto": return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pendiente": return "bg-yellow-500/20 text-yellow-500";
      case "En revisión": return "bg-orange-500/20 text-orange-500";
      case "Resuelto": return "bg-green-500/20 text-green-500";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const handleResolve = (id: number) => {
    toast.success("Reporte marcado como resuelto");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Gestión de Reportes</h2>
        <p className="text-muted-foreground">Administra reportes y quejas de usuarios</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-yellow-500">
              {reports.filter(r => r.status === "Pendiente").length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En Revisión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-orange-500">
              {reports.filter(r => r.status === "En revisión").length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resueltos (Mes)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-500">28</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Reportes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="p-4 border border-border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{report.type}</Badge>
                      <Badge className={getStatusColor(report.status)}>
                        {getStatusIcon(report.status)}
                        <span className="ml-1">{report.status}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Fecha: {report.date}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="grid gap-2 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium">Reportado por:</p>
                      <p className="text-sm text-muted-foreground">{report.reporter}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Usuario reportado:</p>
                      <p className="text-sm text-muted-foreground">{report.reported}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Descripción:</p>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </div>
                </div>

                {report.status !== "Resuelto" && (
                  <div className="flex gap-2 pt-2">
                    <Button variant="hero" size="sm" onClick={() => handleResolve(report.id)}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Marcar Resuelto
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver Detalles
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsManagement;
