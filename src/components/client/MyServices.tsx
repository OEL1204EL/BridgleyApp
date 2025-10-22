import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Star, MessageCircle } from "lucide-react";

const MyServices = () => {
  const services = {
    active: [
      { id: 1, technician: "Ana Martínez", specialty: "Plomería", status: "En progreso", date: "20 Oct 2025", location: "Av. Reforma 123", description: "Reparación de tubería" },
      { id: 2, technician: "José Hernández", specialty: "Redes", status: "Confirmado", date: "25 Oct 2025", location: "Calle Juárez 45", description: "Instalación de red WiFi" }
    ],
    pending: [
      { id: 3, technician: "Luis Pérez", specialty: "Electricidad", status: "Solicitado", date: "28 Oct 2025", location: "Col. Centro 789", description: "Instalación de panel eléctrico" }
    ],
    completed: [
      { id: 4, technician: "Carlos Rodríguez", specialty: "Electricidad", status: "Completado", date: "22 Oct 2025", location: "Av. Universidad 456", description: "Reparación de instalación eléctrica", rated: false },
      { id: 5, technician: "María González", specialty: "Plomería", status: "Completado", date: "15 Oct 2025", location: "Calle Morelos 321", description: "Instalación de calentador", rated: true }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En progreso": return "bg-primary/20 text-primary";
      case "Confirmado": return "bg-green-500/20 text-green-500";
      case "Solicitado": return "bg-yellow-500/20 text-yellow-500";
      case "Completado": return "bg-blue-500/20 text-blue-500";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const ServiceCard = ({ service }: { service: any }) => (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">{service.technician}</h3>
              <p className="text-sm text-muted-foreground">{service.specialty}</p>
            </div>
            <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
          </div>
          <p className="text-muted-foreground">{service.description}</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {service.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {service.location}
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat
            </Button>
            {service.status === "Completado" && !service.rated && (
              <Button variant="hero" className="flex-1">
                <Star className="h-4 w-4 mr-2" />
                Calificar
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Mis Servicios</h2>
        <p className="text-muted-foreground">Gestiona todos tus servicios en un solo lugar</p>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">
            Activos ({services.active.length})
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pendientes ({services.pending.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completados ({services.completed.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {services.active.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {services.pending.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {services.completed.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyServices;
