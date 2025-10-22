import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User, Star, DollarSign } from "lucide-react";

const ServiceHistory = () => {
  const services = [
    { id: 1, client: "Ana García", service: "Reparación eléctrica", date: "22 Oct 2025", location: "Av. Universidad 456", amount: 850, rating: 5 },
    { id: 2, client: "Pedro Ramírez", service: "Instalación de panel", date: "18 Oct 2025", location: "Calle Morelos 321", amount: 1500, rating: 4 },
    { id: 3, client: "Laura Hernández", service: "Mantenimiento preventivo", date: "15 Oct 2025", location: "Col. Del Valle 234", amount: 700, rating: 5 },
    { id: 4, client: "Roberto Silva", service: "Instalación de luminarias", date: "10 Oct 2025", location: "Av. Insurgentes 890", amount: 950, rating: 5 },
    { id: 5, client: "Carmen Torres", service: "Reparación de contactos", date: "5 Oct 2025", location: "Calle Madero 567", amount: 450, rating: 4 }
  ];

  const totalEarnings = services.reduce((sum, s) => sum + s.amount, 0);
  const avgRating = services.reduce((sum, s) => sum + s.rating, 0) / services.length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Historial de Servicios</h2>
        <p className="text-muted-foreground">Consulta todos tus servicios completados</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total de Servicios</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{services.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">${totalEarnings.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Calificación Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-primary">{avgRating.toFixed(1)}</p>
              <Star className="h-6 w-6 fill-primary text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Servicios Completados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="space-y-2">
                  <h3 className="font-semibold">{service.service}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {service.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {service.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {service.location}
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="text-xl font-bold">{service.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: service.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Badge className="bg-primary/20 text-primary">Completado</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceHistory;
