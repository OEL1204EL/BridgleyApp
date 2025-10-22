import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Droplet, Network, ArrowRight, Star } from "lucide-react";

const ClientHome = () => {
  const services = [
    { icon: Zap, title: "Electricidad", description: "Instalaciones y reparaciones eléctricas", count: 45 },
    { icon: Droplet, title: "Plomería", description: "Servicios de plomería profesional", count: 38 },
    { icon: Network, title: "Redes", description: "Instalación y configuración de redes", count: 52 }
  ];

  const recentServices = [
    { id: 1, technician: "Carlos Rodríguez", specialty: "Electricidad", status: "Completado", date: "22 Oct 2025" },
    { id: 2, technician: "Ana Martínez", specialty: "Plomería", status: "En progreso", date: "20 Oct 2025" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Bienvenido de vuelta</h2>
        <p className="text-muted-foreground">¿Qué servicio necesitas hoy?</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="hover:shadow-elegant transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-muted-foreground">{service.count}</span>
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" className="w-full">
                  Ver Técnicos
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Servicios Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentServices.map((service) => (
              <div key={service.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <p className="font-semibold">{service.technician}</p>
                  <p className="text-sm text-muted-foreground">{service.specialty}</p>
                  <p className="text-xs text-muted-foreground">{service.date}</p>
                </div>
                <div className="text-right space-y-2">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    service.status === "Completado" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {service.status}
                  </span>
                  {service.status === "Completado" && (
                    <Button variant="ghost" size="sm" className="w-full">
                      <Star className="h-4 w-4 mr-1" />
                      Calificar
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientHome;
