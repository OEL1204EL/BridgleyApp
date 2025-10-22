import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Wrench, DollarSign, Star, Calendar } from "lucide-react";

const SystemStatistics = () => {
  const stats = {
    totalUsers: 1247,
    totalTechnicians: 342,
    totalClients: 905,
    activeServices: 87,
    completedServices: 2341,
    totalRevenue: 456780,
    avgRating: 4.6,
    monthlyGrowth: 18.2
  };

  const monthlyData = [
    { month: "Jun", users: 950, services: 380, revenue: 325000 },
    { month: "Jul", users: 1020, services: 420, revenue: 365000 },
    { month: "Ago", users: 1105, services: 465, revenue: 398000 },
    { month: "Sep", users: 1180, services: 502, revenue: 425000 },
    { month: "Oct", users: 1247, services: 574, revenue: 456780 }
  ];

  const topTechnicians = [
    { name: "Carlos Rodríguez", services: 87, rating: 4.9, earnings: 42500 },
    { name: "María González", services: 76, rating: 4.8, earnings: 38200 },
    { name: "José Hernández", services: 69, rating: 4.7, earnings: 35800 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Estadísticas del Sistema</h2>
        <p className="text-muted-foreground">Vista general del rendimiento de la plataforma</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +{stats.monthlyGrowth}% este mes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Técnicos Activos</CardTitle>
            <Wrench className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTechnicians}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.totalClients} clientes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Servicios Totales</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedServices.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.activeServices} activos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Este mes
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Crecimiento Mensual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data) => (
                <div key={data.month} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{data.month}</span>
                    <span className="text-muted-foreground">{data.users} usuarios</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-hero h-2 rounded-full" 
                      style={{ width: `${(data.users / 1500) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{data.services} servicios</span>
                    <span>${(data.revenue / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Técnicos del Mes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTechnicians.map((tech, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">#{index + 1}</span>
                      <p className="font-semibold">{tech.name}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{tech.services} servicios</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        {tech.rating}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">${tech.earnings.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Ingresos</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Distribución de Servicios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-6 border border-border rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">847</p>
              <p className="text-muted-foreground">Electricidad</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">623</p>
              <p className="text-muted-foreground">Plomería</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">871</p>
              <p className="text-muted-foreground">Redes</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemStatistics;
