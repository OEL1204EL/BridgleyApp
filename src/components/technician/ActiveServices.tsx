import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User, MessageCircle, Check, X } from "lucide-react";
import { toast } from "sonner";

const ActiveServices = () => {
  const services = [
    { id: 1, client: "Juan Pérez", service: "Instalación eléctrica", date: "25 Oct 2025", time: "10:00 AM", location: "Av. Reforma 123", status: "Solicitado", amount: 850 },
    { id: 2, client: "María López", service: "Reparación de panel", date: "26 Oct 2025", time: "2:00 PM", location: "Calle Juárez 45", status: "Confirmado", amount: 1200 },
    { id: 3, client: "Carlos Gómez", service: "Mantenimiento", date: "24 Oct 2025", time: "9:00 AM", location: "Col. Centro 789", status: "En progreso", amount: 600 }
  ];

  const handleConfirm = (id: number) => {
    toast.success("Servicio confirmado exitosamente");
  };

  const handleReject = (id: number) => {
    toast.error("Servicio rechazado");
  };

  const handleComplete = (id: number) => {
    toast.success("Servicio marcado como completado");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Solicitado": return "bg-yellow-500/20 text-yellow-500";
      case "Confirmado": return "bg-green-500/20 text-green-500";
      case "En progreso": return "bg-primary/20 text-primary";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Servicios Activos</h2>
        <p className="text-muted-foreground">Gestiona tus servicios en curso</p>
      </div>

      <div className="grid gap-4">
        {services.map((service) => (
          <Card key={service.id}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{service.service}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {service.client}
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
                    <p className="text-lg font-bold text-primary">${service.amount.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {service.date} - {service.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {service.location}
                  </div>
                </div>

                <div className="flex gap-2">
                  {service.status === "Solicitado" && (
                    <>
                      <Button variant="hero" className="flex-1" onClick={() => handleConfirm(service.id)}>
                        <Check className="h-4 w-4 mr-2" />
                        Confirmar
                      </Button>
                      <Button variant="destructive" className="flex-1" onClick={() => handleReject(service.id)}>
                        <X className="h-4 w-4 mr-2" />
                        Rechazar
                      </Button>
                    </>
                  )}
                  {service.status === "En progreso" && (
                    <Button variant="hero" className="flex-1" onClick={() => handleComplete(service.id)}>
                      <Check className="h-4 w-4 mr-2" />
                      Marcar Completado
                    </Button>
                  )}
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActiveServices;
